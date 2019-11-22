const validate = require('../validate');


describe('Validate Library Test', () => {
  it('should check if return true if a rhina name is string. can also contain space', () => {
    const result = validate.isRhinoNameValid("Sam")
    expect(result).toBeTruthy();
  })

  it('Returns true or false. Should receive an object. with only 2 keys. key names should be name & species, name should be between 1 to 20, and species must be one of: ["white_rhinoceros", "black_rhinoceros", "indian_rhinoceros", "javan_rhinoceros", "sumatran_rhinoceros"] ', () => {
    let objectToTest = 
    {
        "name": "rhino",
        "species": "sumatran_rhinoceros"
    };
    const result = validate.isNameAndSpeciesValid(objectToTest)
    expect(result).toBeTruthy();
  })

})