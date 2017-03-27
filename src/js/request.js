/* global fetch */
const view = require('./view');

module.exports = {
  data(url) {
    return new Promise(function(resolve){
      fetch(url)
      .then(d => d.json())
      .then(d => resolve(d))
      .catch(view.section.loading());
    });
  }
};
