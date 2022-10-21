const express = require('express')
const mysql = require('mysql')
const path = require('path')
const expressApp = express()
const port = 3000;
expressApp.use(express.static('static'))
expressApp.use(express.json());

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	database: "database",
	password: ""
});

connection.connect(err => {
	if (err) {
		console.log(err);
		return err
	} else {
		console.log("data ---ok");
	}
});

const { Telegraf } = require('telegraf')


const token = '5533848555:AAEbph5sMmSbDSD8JxbU6gvtTBA8rbhyEQg'

const bot = new Telegraf(token);

const botstart = () => {


	bot.launch()

	bot.command('start', ctxs => {
		console.log(ctxs.from)
		bot.telegram.sendMessage(ctxs.chat.id, `Привет ${ctxs.from.first_name} ${ctxs.from.last_name}`)

		var sql = ` INSERT INTO usersTest (name, last_name) VALUES ("${ctxs.from.first_name}", "${ctxs.from.last_name}")`;
		connection.query(sql, function (err, result) {
			if (err) throw err;
			console.log("1 record inserted");
		})

	})


}
botstart()









// let GET = 'https://api.trello.com/1/boards/zzfkMLbQ?key=559422330dd22fb9e88c5f7cb8c1f0bd&token=e1b9d4eda437d89cc54cead1a0ba9e4b3905e6564cbe753de5612a55e166ca1b'
