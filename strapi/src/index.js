'use strict';

const {createTelegramBot, telegramBot, stopBot} = require("./extensions/telegram");
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(props) {
    const apiKey = strapi.config.get('server.telegramBot.apiKey', 'defaultValueIfUndefined');
    createTelegramBot(apiKey)
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
  },
};
