(function(){
  'use strict';

  const appSettings = require('./app-settings');
  const view = require('./view');

  const app = {
    init() {
      appSettings.chat.innerHTML = '';
      appSettings.chat.classList.remove('nojs');
      appSettings.chatForm.classList.remove('hidden');
      appSettings.chatInputs.forEach(input => input.disabled = false);
      view.store.checkLocalStorage();
    }
  };

  app.init();
})();
