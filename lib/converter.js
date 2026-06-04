/**
 * Copyright reelyActive 2026
 * We believe in an open Internet of Things
 */


const yaml = require('js-yaml');
const fs = require('fs');


const DIST_PATH = 'dist';


/**
 * Convert a YAML source file to a JavaScript Map library file.
 * @param {String} sourcePath The YAML source file path.
 * @param {String} variableName The name of the variable in the YAML source.
 * @param {String} libraryName The name of the output JavaScript library file.
 * @param {String} constantName The name of the constant in the library.
 */
function yamlToMap(sourcePath, variableName, libraryName, constantName) {
  let doc;

  // Attempt to load the source YAML file
  try {
    doc = yaml.load(fs.readFileSync(sourcePath, 'utf8'));
  }
  catch(error) {
    return console.log(error);
  }

  if(!doc.hasOwnProperty(variableName)) {
    return console.log('Error: variable', variableName, 'not found in',
                       sourcePath);
  }

  if(!Array.isArray(doc[variableName])) {
    return console.log('Error: variable', variableName, 'is not an Array');
  }

  // Create the library file in memory
  let libraryPath = DIST_PATH + '/' + libraryName;
  let libraryContents = 'const ' + constantName + ' = new Map([\r\n';

  doc[variableName].forEach((entry, index) => {
    let isLastEntry = (index === (doc[variableName].length - 1));
    let safeName = entry.name.replaceAll('"', '');
    let hexValue;

    if(entry.hasOwnProperty('value')) {
      hexValue = '0x' + entry.value.toString(16).padStart(4, '0');
    }
    else if(entry.hasOwnProperty('uuid')) {
      hexValue = '0x' + entry.uuid.toString(16).padStart(4, '0');
    }
    else {
      return console.log('Error: entries do not have uuid nor value property');
    }

    libraryContents += '[' + hexValue + ',' + '"' + safeName + '"]';
    libraryContents += isLastEntry ? '\r\n' : ',\r\n';
  });

  libraryContents += ']);';

  // Write the library file
  fs.writeFile(libraryPath, libraryContents, 'utf8', (err) => {
    if(err) {
      console.log('Error writing ' + libraryName + ': ' + err);
    }
    else {
      console.log('Wrote', libraryPath);
    }
  });
}


module.exports.yamlToMap = yamlToMap;