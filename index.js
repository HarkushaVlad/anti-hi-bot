/* eslint-disable */
const { Telegraf } = require('telegraf');
const axios = require('axios');
const translatte = require('translatte');
require('dotenv').config();

// import regex
const a = require('./alphabet');

const bot = new Telegraf(process.env.BOT_TOKEN);
const TENOR_API_KEY = process.env.TENOR_API_KEY;

bot.on('message', async (ctx) => {
  // variables for telegram api
  const chatId = ctx.message.chat.id;
  const msgId = ctx.message.message_id;
  const userId = ctx.message.from.id;
  const username = ctx.message.from.username;
  const msgText = ctx.message.text;
  const vladId = +process.env.VLAD_ID;
  const bohdanId = +process.env.BOHDAN_ID;

  // variables for ban words
  const uaPryvit = new RegExp(`${a.begin}${a.uaP}${a.uaR}${a.uaYi}${a.uaV}${a.uaI}${a.uaT}${a.end}`, 'i');
  const engPryvit = new RegExp(`${a.begin}${a.engP}${a.engR}${a.engY}(${a.engU})?${a.engV}(${a.engW})?${a.engI}${a.engT}${a.end}`, 'i');
  const engHello = new RegExp(`${a.begin}${a.engH}(${a.engE}|${a.engA})?${a.engL}(${a.engL})?${a.engO}${a.end}`, 'i');
  const uaHello = new RegExp(`${a.begin}${a.uaKh}(${a.uaE}|${a.uaA})?${a.uaL}(${a.uaL})?${a.uaO}(${a.uaU})?${a.end}`, 'i');
  const engHi = new RegExp(`${a.begin}${a.engH}${a.engI}${a.end}`, 'i');
  const uaHi = new RegExp(`${a.begin}${a.uaKh}(${a.uaA}|${a.uaE})${a.uaY}${a.end}`, 'i');
  const engZdarova = new RegExp(`${a.begin}(${a.engZ})?${a.engD}(${a.engA}|${a.engO})?${a.engR}${a.engO}(${a.engV}|${a.engU})?(${a.engA})?${a.end}`, 'i');
  const uaZdarova = new RegExp(`${a.begin}(${a.uaZ})?${a.uaD}(${a.uaA}|${a.uaO})?${a.uaR}${a.uaO}(${a.uaV}|${a.uaU})?(${a.engA})?${a.end}`, 'i');
  const engPrivet = new RegExp(`${a.begin}${a.engP}(${a.engR})?${a.engI}(${a.engV}|${a.engW})?((${a.engE}${a.engT})|(${a.engK}${a.engI}))?${a.end}`, 'i');
  const engSalam = new RegExp(`${a.begin}${a.engS}${a.engA}${a.engL}${a.engA}${a.engM}${a.end}`, 'i');
  const engNihao = new RegExp(`${a.begin}${a.engN}${a.engI}${a.engH}${a.engA}${a.engO}${a.end}`, 'i');

  // variables for trigger words
  const laugh = new RegExp(`${a.engA}${a.engH}${a.engA}${a.engH}`, 'i');
  const adjective = new RegExp(`[а-яіїє]+ий(?:[а-яіїє]|$)`, 'i');
  const botName = new RegExp(`@anti_HI_bot`, 'g');

  // check the message on ban words
  if (userId !== vladId &&
    (uaPryvit.test(msgText) ||
      engPryvit.test(msgText) ||
      engPrivet.test(msgText) ||
      engHello.test(msgText) ||
      uaHello.test(msgText) ||
      engHi.test(msgText) ||
      uaHi.test(msgText) ||
      engZdarova.test(msgText) ||
      uaZdarova.test(msgText) ||
      engSalam.test(msgText) ||
      engNihao.test(msgText))
  ) {
    ctx.telegram.deleteMessage(chatId, msgId);
    ctx.reply(`@${username} пока🫡`);
  }

  // answers to laughter
  if (laugh.test(msgText) && Math.random() > 0.8) {
    ctx.reply(`АХАХАХАХАХАХ`);
  } else if (laugh.test(msgText) && Math.random() > 0.6) {
    ctx.reply(`АХАХАХАХАХАХАХАА🤣🤣😂👆💯`);
  } else if (laugh.test(msgText) && Math.random() > 0.4) {
    ctx.reply(`Ахахахахах🤡🤡🤡`);
  } else if (laugh.test(msgText) && Math.random() > 0.25) {
    ctx.reply(`АХАХахах.. Не смішно😐`);
  }

  // answers to photos
  if (ctx.message.photo && Math.random() > 0.8 && userId === bohdanId) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/bogdan-moment-gif-21819300', { reply_to_message_id: msgId });
  } else if (ctx.message.photo && Math.random() > 0.8) {
    try {
      const response = await axios.get(`https://tenor.googleapis.com/v2/search?q=look&key=${TENOR_API_KEY}&random=true&limit=1`);
      const gifUrl = response.data.results[0].url;

      ctx.telegram.sendAnimation(chatId, gifUrl, { reply_to_message_id: msgId });
    } catch (error) {
      console.error(error);
      ctx.reply(`Тут повинна була бути гіфка, але щось пішло не так😢`);
    }
  } else if (ctx.message.photo && Math.random() > 0.65) {
    try {
      const response = await axios.get(`https://tenor.googleapis.com/v2/search?q=cringe&key=${TENOR_API_KEY}&random=true&limit=1`);
      const gifUrl = response.data.results[0].url;

      ctx.telegram.sendAnimation(chatId, gifUrl, { reply_to_message_id: msgId });
    } catch (error) {
      console.error(error);
      ctx.reply(`Тут повинна була бути гіфка, але щось пішло не так😢`);
    }
  } else if (ctx.message.photo && Math.random() > 0.5) {
    try {
      const response = await axios.get(`https://tenor.googleapis.com/v2/search?q=laugh&key=${TENOR_API_KEY}&random=true&limit=1`);
      const gifUrl = response.data.results[0].url;

      ctx.telegram.sendAnimation(chatId, gifUrl, { reply_to_message_id: msgId });
    } catch (error) {
      console.error(error);
      ctx.reply(`Тут повинна була бути гіфка, але щось пішло не так😢`);
    }
  }

  // answers to adjactives
  if (adjective.test(msgText) && Math.random() > 0.6) {
    const adjInMsg = msgText.match(adjective)[0].toLowerCase();
    ctx.telegram.sendMessage(chatId, `Cам ти ${adjInMsg}`, { reply_to_message_id: msgId });
  }

  // send random gif
  if (Math.random() > 0.95 && ctx.message.hasOwnProperty('text')) {
    try {
      //translation
      const transMsgText = await translatte(msgText, {
        from: 'auto',
        to: 'en',
      });

      console.log('done');

      const msgArr = transMsgText.text.match(/\b\w{3,}\b/g);

      if (msgArr) {
        const randomTag = msgArr[Math.floor(Math.random() * msgArr.length)];

        const response = await axios.get(`https://tenor.googleapis.com/v2/search?q=${randomTag}&key=${TENOR_API_KEY}&random=true&limit=1`);
        const gifUrl = response.data.results[0].url;

        ctx.telegram.sendAnimation(chatId, gifUrl, { reply_to_message_id: msgId });
      }
    } catch (error) {
      console.error(error);
      ctx.reply(`Я хотів відправити якусь смішнявку, але щось пішло не так😢`);
    }
  }
});

//reset old messages while bot was offline
async function sendGetUpdatesRequest() {
  const response = await axios.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getUpdates?offset=-1`);
  console.log(response.data);
}

sendGetUpdatesRequest();


bot.launch();
