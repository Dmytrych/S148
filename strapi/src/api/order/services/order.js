'use strict';

const {telegramBot, getTelegramBot} = require("../../../extensions/telegram");
/**
 * order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order.order', ({ strapi }) =>  ({
  async create(params) {
    const result = await super.create(params);

    const recipients = await strapi.entityService.findMany('api::admin-telegram-notification-list.admin-telegram-notification-list', {
      filters: {
        publishedAt: {
          $null: false,
        },
      },
    });

    const bot = getTelegramBot();

    if (bot) {
      for (const recipient of recipients) {
        try {
          const orderData = params.data;
          const notificationMessage = `
New order incoming!!!
Name: ${orderData.customerInfo.name} ${orderData.customerInfo.surname}
Phone number: ${orderData.customerInfo.phoneNumber}
        `
          await bot.sendMessage(recipient.telegramChatId, notificationMessage);
        }
        catch (e) {
          console.log(e)
          console.log("Error sending the telegram message")
        }
      }
    }

    return result;
  },
}));
