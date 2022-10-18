const telegramBot = require("node-telegram-bot-api")


TOKEN = '5655149375:AAH0XldbeSCG__nDnynFVS9dlmhIAoO-cbI'
const bot = new telegramBot(TOKEN, { polling: true })

bot.on('message', async msg => {
	const text = msg.text;
	const chatId = msg.chat.id;

	if (text === '/start') {
		 await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/9a5/3d6/9a53d66b-53c8-3ccb-a3dd-75fa64c18322/20.webp')
		 return bot.sendMessage(chatId, `Добро опожаловать в Телеграм бот Сергея Васильева `)

	}
	if (text === '/info') {
		 return bot.sendMessage(chatId, `Привет ${msg.from.first_name} ${msg.from.last_name}`)
	}

	if (text === '/game') {
		 return startGame(chatId)
	}
	return bot.sendMessage(chatId, 'Попробуй еще раз)')
})






