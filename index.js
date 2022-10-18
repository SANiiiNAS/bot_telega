const telegramBot = require("node-telegram-bot-api")


TOKEN = '5655149375:AAH0XldbeSCG__nDnynFVS9dlmhIAoO-cbI'
const bot = new telegramBot(TOKEN, { polling: true })

bot.sendMessage(msg.chat.id, `hello from Heroku , bot say :'hi,${msg.from.first_name}'`)