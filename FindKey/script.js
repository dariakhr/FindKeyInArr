var obj = {
  name: 'darya',
  surname: 'kharchenko',
  age: '21'
};
var new_obj = {
  name: 'sophia',
  surname: 'kharchenko'
};

function findKeys(obj) {
  var keys = Object.keys(obj);
  var checked_keys = [];
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == 'name' || keys[i] == 'surname' || keys[i] == 'age') {
      checked_keys.push(keys[i]);

    }
  };
  return keys.length == checked_keys.length;
};

findKeys(obj);
findKeys(new_obj);
