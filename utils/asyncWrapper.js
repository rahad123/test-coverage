const _p = async function (_promise) {
    return new Promise((resolve) => {
      _promise
        .then((value) => {
          resolve([null, value]);
        })
        .catch((err) => {
          resolve([err, null]);
        });
    });
  };
  
  module.exports = _p;