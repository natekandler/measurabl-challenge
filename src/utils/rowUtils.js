export function mergeRows(arrOne, arrTwo) {
  const rows = {};
  arrOne.concat(arrTwo).forEach(function(obj) {
    rows[obj.id] = Object.assign(rows[obj.id] || {}, obj)
  });

  return Array.from(Object.values(rows));
}

