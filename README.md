<p align="center"><br><span style="font-size: 6rem">📑</span></p>

<h3 align="center">ngx-translate-spec</h3>
<p align="center"><strong><code>@marnickvda/ngx-translate-spec</code></strong></p>
<p align="center">
  A library that manages conformance of translation .json files to a specification in an Angular project
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2021?style=flat-square" />
  <a href="https://www.npmjs.com/package/@marnickvda/ngx-translate-spec"><img src="https://img.shields.io/npm/l/@marnickvda/ngx-translate-spec?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@marnickvda/ngx-translate-spec"><img src="https://img.shields.io/npm/dw/@marnickvda/ngx-translate-spec?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@marnickvda/ngx-translate-spec"><img src="https://img.shields.io/npm/v/@marnickvda/ngx-translate-spec?style=flat-square" /></a>


## Maintainers

| Maintainer                           | GitHub                                                                
| ------------------------------------ | -------------------------------------------------
| Marnick van der Arend | [MarnickvdA](https://github.com/marnickvda) 

Maintenance Status: Actively Maintained

## Prerequisites
Tested with Node `v14.17.0`

## Installation

```
npm i --save @marnickvda/ngx-translate-spec
```

## Functions

<dl>
<dt><a href="#initialize">initialize(translationsDirectory)</a></dt>
<dd><p>Initialize the specification for a new project</p>
</dd>
<dt><a href="#extractSpecificationFromImplementation">extractSpecificationFromImplementation(translationsDirectory, file)</a></dt>
<dd><p>This method can be used when you already have an existing implementation for your translations. You can extract the
specification from this implementation. After you have created your specification, you can execute the copy translations function.</p>
</dd>
<dt><a href="#copyTranslations">copyTranslations(translationsDirectory, specPrefix)</a></dt>
<dd><p>This method adds missing fields from the translation specification to the implementation files. Additionally, a prefix
can be added which helps with quickly fixing the implementations&#39; translations.</p>
</dd>
</dl>

<a name="initialize"></a>

## initialize(translationsDirectory)
Initialize the specification for a new project

**Kind**: global function

| Param | Description |
| --- | --- |
| translationsDirectory | directory in which your translation .json files are located |

<a name="extractSpecificationFromImplementation"></a>

## extractSpecificationFromImplementation(translationsDirectory, file)
This method can be used when you already have an existing implementation for your translations. You can extract the
specification from this implementation. After you have created your specification, you can execute the copy translations function.

**Kind**: global function  
**See**: copyTranslations

| Param | Description |
| --- | --- |
| translationsDirectory | directory in which your translation .json files are located |
| file | name of the file including its extension |

<a name="copyTranslations"></a>

## copyTranslations(translationsDirectory, specPrefix)
This method adds missing fields from the translation specification to the implementation files. Additionally, a prefix
can be added which helps with quickly fixing the implementations' translations.

**Kind**: global function

| Param | Description |
| --- | --- |
| translationsDirectory | directory in which your translation .json files are located |
| specPrefix | adds prefix to every specification field value that is missing in the implementation |

**Example**
```js
// adds 'TRANSLATE: ' to every field's value
copyTranslations('/i18n', 'TRANSLATE: ');
```

## Authors

- Marnick van der Arend ([MarnickvdA](https://github.com/marnickvda))

## License

MIT

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/marnickvda"><img src="https://avatars0.githubusercontent.com/u/15157389?v=4?s=100" width="100px;" alt=""/><br /><sub><b>marnickvda</b></sub></a><br /><a href="https://github.com/marnickvda/ngx-translate-spec/commits?author=MarnickvdA" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->