// functions
const allSpecies = ["white_rhinoceros", "black_rhinoceros", "indian_rhinoceros", "javan_rhinoceros", "sumatran_rhinoceros"];

// Only accept akphanumeric chatracters only.
// no symbols, except underscore & hyphen, since that can be a name.
function isValidName(name, length, shouldContainSpace = null){
  if (!name) return false;
  let regexPattern;
  if ( shouldContainSpace ){
    regexPattern = /[^A-Za-z0-9-_\s]/; //
  } else {
    regexPattern = /[^A-Za-z0-9-_]/; //
  }
  if (! regexPattern.test(name) && (name.length <= length) ) {
    return true;
  } else {
    return false;
  }
}

// exports
function validateObjKeys(keys){
  if (!keys) return false;
  if ( 
      (keys.indexOf("name") >= 0 && keys.indexOf("species") >= 0 )
      && keys.length === 2
    ){
    return true;
  } else {
    return false;
  }
}

function validateSpeciesValues(value){
  if (!value) return false;
  if (
      ( allSpecies.indexOf(value) >= 0 )
      && isValidName(value, 20)
    ){
    return true;
  } else {
    return false;
  }

}

module.exports.validateGetId = (id) => {
  return isValidName(id, 50);
}

// module.exports.validateRhinoName = (name) => {
//   return isValidName(name, 20, true);
// }

module.exports.isRhinoNameValid = (name) => {
  return isValidName(name, 20, true);
}

module.exports.isRhinoSpeciesValueValid = (name) => {
  return validateSpeciesValues(name);
}


module.exports.isNameAndSpeciesValid = (requestObject) => {
  
    
    //validate object keys first: make sure it has name & species.
  if ( validateObjKeys(Object.keys(requestObject)) ){
    //validate each key value.
    if (
            isValidName(requestObject.name, 20) 
        &&  validateSpeciesValues(requestObject.species) 
      ){
        return true;
      } else {
        return false;
      }
  } else {
    return false;
  }

}
  