const TelegramBot = require('node-telegram-bot-api');
const fs = require("fs");

const token = '7019805673:AAFmCq-WEPUe0rbf4AHO4B8yMgtIHsNdwdQ';

const url = 'https://dmitrii3end.github.io/Munya';

const bot = new TelegramBot(token, {polling: true});

const munyaArray = ['муня', 'муне', 'муни', 'мунь', 'муню'];

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text == '/start'){
    try {
        await bot.sendMessage(chatId, 'Здарова заебал')
    } catch (error) {
        console.log(error);
    }
  }

  if (text == '/criptoflip'){
    try {
        coinRandom()? await bot.sendMessage(chatId, 'Сейчас бери!')
            : await bot.sendMessage(chatId, 'Сейчас не бери!');
    } catch (error) {
        console.log(error);
    }
  }

//   if (text == '/попустить'){
//     try {
//         await bot.sendMessage(chatId, 'qq', {
//             reply_markup: {
//                 inline_keyboard: [
//                     [{text: 'попустить', web_app: {url: url}}]
//                 ]
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
//   }

  if (text == 'муня'){
    try {
        const data = fs.readFileSync("bd.txt");
        let count = +data.toString();
    
        await bot.sendMessage(chatId, `упоминаний Муни: ${++count}`);
    
        fs.writeFile("bd.txt", count.toString(), (eror) => {
            console.log(eror);
        });
    } catch (error) {
        console.log(error);
    }
  }
});

function coinRandom() {
    return Math.floor(Math.random() * 2);
}