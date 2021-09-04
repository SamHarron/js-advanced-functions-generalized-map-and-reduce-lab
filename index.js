  
function map(src, callback) {
    const r = [];
  
    for (let i = 0; i < src.length; i++) {
      const theElement = src[i];
      r.push(callback(theElement));
    }
  
    return r;
  }
  
  function reduce(src, z, x) {
    let total;
    if (x) {
      total = x;
      for (let i = 0; i < src.length; i++) {
        total = z(src[i], total);
      }
      return total;
    } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = z(src[i], total);
      }
      return total;
    }
  }