const TelegramBot = require("node-telegram-bot-api");
let telegramBot;

module.exports = {
  getTelegramBot() {
    return telegramBot
  },
  createTelegramBot(telegramKey) {
    if (telegramBot) {
      return
    }

    telegramBot = new TelegramBot(telegramKey, {polling: true})

    telegramBot.on("message", async (msg) => {
      const chatId = msg.chat.id;

      await telegramBot.sendMessage(chatId, `Here is your registration chat id: ${chatId}`)
    })
  },
  async stopBot() {
    await telegramBot?.close()
    telegramBot = null
  }
}
