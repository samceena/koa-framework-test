const model = require('../models/rhinoceros'), 
validator = require('../utils/');

module.exports.getSingle = (ctx, next) => {
  let rhinocerosID = ctx.params.id;  
  if ( validator.isGetRequestIdValid(rhinocerosID) ){
    const rhinocerose = model.getSingle(rhinocerosID);
    ctx.response.body = rhinocerose;
  } else {
    ctx.response.status = 404;
    ctx.response.body = 
    { 
      status: "error",
      message : "Rhinoceros not found"
    };
  }
}

module.exports.getEndangered = (ctx, next) => {
    // let filter = {...ctx.request.body};
    // console.log("filter: ", filter);
  
    // const rhinoceroses = model.getEndangeredRhinos(filter.type, filter.value);
    const rhinoceroses = model.getEndangeredRhinos();
    // console.log(rhinoceroses);
    ctx.response.body = { rhinoceroses };
}

module.exports.getAll = (ctx, next) => {
  let filter = {...ctx.request.body};
  console.log("filter: ", filter);

  const rhinoceroses = model.getAll(filter.type, filter.value);
  ctx.response.body = { rhinoceroses };
}

module.exports.createRhinoceros = (ctx, next) => {
  let rhinocerosReq = {...ctx.request.body};
  
  if ( validator.isNameAndSpeciesValid(rhinocerosReq) ){
    const createRhinocerose = model.newRhinoceros(rhinocerosReq);
    ctx.response.body = createRhinocerose;
  } else{
    ctx.response.status = 404;
    ctx.response.body = 
    { 
      status: "error",
      message : "There was an error with your request. Make sure you supplied a valid name and species. Species should be one of: white_rhinoceros, black_rhinoceros, indian_rhinoceros, javan_rhinoceros, sumatran_rhinoceros"
    };
  }
}