const removeFromArray = function (array, args) {
  if (args.length == undefined) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == args) {
        array.splice(i, 1);
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < args.length; j++) {
        if (array[i] == args[j]) {
          array.splice(i, 1);
        }
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
