/* global document */
module.exports = {
  urlFundaSearch(type, address, options, page, size) {return `/api/?type=${type}&location=${address}&options=${options}&page=${page}&pagesize=${size}`;},
  urlGetAddress(lat, long) {return `/api/?lat=${lat}&long=${long}`;},
  chat: document.querySelector('#chat-body'),
  chatForm: document.querySelector('#chat-form'),
  chatInputs: document.querySelectorAll('#chat-form > *')
};
