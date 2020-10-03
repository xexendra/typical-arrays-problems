exports.min = function min(array) {
  console.log(array);
  if (!array || !array.length) {
  return 0;
  } else {
  return Math.min.apply(null, array);
  }
  }
  
  exports.max = function max(array) {
  console.log(array);
  if (!array || !array.length) {
  return 0;
  } else {
  return Math.max.apply(null, array);
  }
  }
  
  exports.avg = function avg(array) {
  console.log(array);
  if (!array || !array.length) {
  return 0;
  } else {
  return array.reduce((current, next) => current + next, 0) / array.length;
  }
  }