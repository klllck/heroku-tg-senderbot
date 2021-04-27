require('dotenv').config();
const  TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling:true})

var recieverId;

bot.onText(/\/open/, (msg) => {
    var chatId = msg.chat.id
    recieverId = chatId
    bot.sendMessage(chatId, 'Пересылка открыта!')
})

bot.onText(/\/close/, (msg) => {
    var chatId = msg.chat.id
    recieverId = null
    bot.sendMessage(chatId, 'Пересылка закрыта!')
})

bot.onText(/\!/, function (msg) {
    if (recieverId != null) {
        var chatId = msg.chat.id
        bot.forwardMessage(recieverId, chatId, msg.message_id)
    }
})
