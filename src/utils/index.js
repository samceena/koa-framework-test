//load all validations.
//we can add more type of validations here.
const validate = require('./validate');

exports.isGetRequestIdValid = validate.validateGetId;
exports.isRhinoNameValid = validate.isRhinoNameValid;
exports.isRhinoSpeciesValueValid = validate.isRhinoSpeciesValueValid;
exports.isNameAndSpeciesValid = validate.isNameAndSpeciesValid;