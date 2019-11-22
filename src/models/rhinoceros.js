const uuidv4 = require('uuid/v4');
let rhinoceroses = require('../database/data');

function checkEndengered(arr, count){
  let speciesCollection = {};
  let speciesRslt = [];
  arr.map( i => {
      if ( i.species in speciesCollection ){
        speciesCollection[i.species]++
      } else{
        speciesCollection[i.species] = 1;
      }
  })  
  arr.map( x => {
    if ( x.species in speciesCollection  && speciesCollection[x.species] <= count ){
          speciesRslt.push(x);
    }
  })
  return speciesRslt;
}

exports.getAll = (filterName = null, filterValue = null) => {
  if ( filterName && filterValue ){
    let result = [];
    if ( filterName === "name" ){
      for (var x=0;x<rhinoceroses.length;x++){
        if (filterValue === rhinoceroses[x].name){
          result.push(rhinoceroses[x]);
        }
      }
      return result;
    }
    if ( filterName === "species" ){
      for (var x=0;x<rhinoceroses.length;x++){
        if (filterValue === rhinoceroses[x].species){
          result.push(rhinoceroses[x]);
        }
      }
      return result;
    }
  } else {
    return rhinoceroses;
  }
};

exports.getEndangeredRhinos = (filterName = null, filterValue = null) => {
  return checkEndengered(rhinoceroses, 2);

  // if ( filterName && filterValue ){
  //   let result = [];
  //   if ( filterName === "type" ){
  //     for (var x=0;x<rhinoceroses.length;x++){
  //       if (filterValue === rhinoceroses[x].name){
  //         result.push(rhinoceroses[x]);
  //       }
  //     }
  //     return result;
  //   }
  //   if ( filterName === "species" ){
  //     for (var x=0;x<rhinoceroses.length;x++){
  //       if (filterValue === rhinoceroses[x].species){
  //         result.push(rhinoceroses[x]);
  //       }
  //     }
  //     return result;
  //   }
  // } else {
  //   return rhinoceroses;
  // }
};

exports.getSingle = (id) => {
  if (!id){
    return {
      error: "function requires an ID"
    }
  }
  for (var x=0;x<rhinoceroses.length;x++){
    if (id === rhinoceroses[x].id){
      return rhinoceroses[x];
    }
  }
  return {}
}

exports.newRhinoceros = data => {
  const newRhino = {
    id: uuidv4(),
    name: data.name,
    species: data.species
  };
  rhinoceroses.push(newRhino);
  return newRhino;
};


// console.log(getSingle('70314997-b314-4a30-b5bc-1ed9fbd030c8'));
// console.log(getSingle('70314997-b314-4a30-b5bc-1ed9fbd030c8'));  