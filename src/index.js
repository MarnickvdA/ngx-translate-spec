'use strict';

const fs = require('fs');

function readJSON(path, callback) {
    let data = fs.readFileSync(path, {encoding: 'utf-8'});
    console.log('\tData read from ' + path);

    let parsedData = JSON.parse(data);
    console.log('\tData successfully parsed to JSON');

    callback(parsedData);
}

function writeJSON(path, jsonObject) {
    // Format to beautify json string :)
    let data = JSON.stringify(jsonObject, null, 2);

    fs.writeFileSync(path, data, {encoding: 'utf-8'});
    console.log('\tJSON written to ' + path);
}

function removeValuesFromImplementation(file, callback) {
    function resetNodeValues(object, callback) {
        let specification = {};

        // Iterate through children of node
        Object.keys(object).forEach(value => {
            if (object[value] instanceof Object) {
                // Iterate through child(ren)
                resetNodeValues(object[value], data => specification[value] = data);
            } else {
                // Reset value of leaf to empty string
                object[value] = '';
                specification = object;
            }
        });

        callback(specification);
    }

    readJSON(file, data => resetNodeValues(data, specification => callback(specification)));
}

function conformImplementationToSpecification(implementation, specification, callback, prefix = '') {
    function replaceNodeValues(implNode, specNode, callback) {
        // Iterate through children of node
        Object.keys(specNode).forEach(key => {
            if (specNode[key] instanceof Object) {
                // Update parent address
                replaceNodeValues(implNode[key], specNode[key], data => specNode[key] = data);
            } else {
                // Reset value of leaf to the implementation value
                specNode[key] = implNode[key] || prefix + specNode[key];
            }
        });

        // Once everything is collected from the children, return this (partial) result
        callback(specNode);
    }

    replaceNodeValues(implementation, specification, data => {
        callback(data);
    });
}

function conformTranslationImplementationsToSpecification(translationsDirectory, spec, prefix) {
    fs.readdirSync(translationsDirectory, {
        withFileTypes: true
    }).forEach(file => {
        if (file.isFile() && file.name.endsWith('.json') && file.name !== 'specification.json') {
            console.log("Restructuring " + file.name + " to conform to specification.");
            let filePath = translationsDirectory + '/' + file.name;
            readJSON(filePath, impl => conformImplementationToSpecification(impl, spec, newImpl => writeJSON(filePath, newImpl), prefix));
        }
    });
}

/**
 * Initialize the specification for a new project
 * @param translationsDirectory directory in which your translation .json files are located
 */
module.exports.initialize = function (translationsDirectory) {
    writeJSON(`${translationsDirectory}/specification.json`, {});
    console.log(`Your new specification file can be found at ${translationsDirectory}/specification.json`);
}

/**
 * This method can be used when you already have an existing implementation for your translations. You can extract the
 * specification from this implementation. After you have created your specification, you can execute the copy translations function.
 * @see copyTranslations
 * @param translationsDirectory directory in which your translation .json files are located
 * @param file name of the file including its extension
 */
module.exports.extractSpecificationFromImplementation = function (translationsDirectory, file) {
    removeValuesFromImplementation(`${translationsDirectory}/${file}`,
        specification => writeJSON(`${translationsDirectory}/specification.json`, specification));
    console.log(`Your new specification file can be found at ${translationsDirectory}/specification.json`);
}

/**
 * This method adds missing fields from the translation specification to the implementation files. Additionally, a prefix
 * can be added which helps with quickly fixing the implementations' translations.
 * @example
 * // adds 'TRANSLATE: ' to every field's value
 * copyTranslations('/i18n', 'TRANSLATE: ');
 * @param translationsDirectory directory in which your translation .json files are located
 * @param specPrefix adds prefix to every specification field value that is missing in the implementation
 */
module.exports.copyTranslations = function (translationsDirectory, specPrefix) {
    console.log(`Retrieving specification from ${translationsDirectory}/specification.json`);
    readJSON(`${translationsDirectory}/specification.json`, specification => conformTranslationImplementationsToSpecification(translationsDirectory, specification, specPrefix));
}
