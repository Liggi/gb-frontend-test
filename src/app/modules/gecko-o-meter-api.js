import 'whatwg-fetch'

module.exports = function () {

  const url = "https://widgister.herokuapp.com/challenge/frontend";

  function get() {
    return new Promise(function(resolve, reject) {
      fetch(url)
        .then(res => resolve(res.json()))
        .catch(reject);
    });
  }

  return {
    get
  }
}()
