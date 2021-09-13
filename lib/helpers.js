function chunkArray(arr, size) {
  var _arr = [];
  for (var i = 0; i < arr.length; i += size) {
    var chunk = arr.slice(i, i + size);
    _arr.push(chunk);
  }
  return _arr;
}

module.exports = {
  chunkArray
};