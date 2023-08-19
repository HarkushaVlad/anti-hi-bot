/* eslint-disable */
const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config();

// import regex
const a = require('./alphabet');

const bot = new Telegraf(process.env.BOT_TOKEN);
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

bot.on('message', async (ctx) => {
  // variables for telegram messages
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
    ctx.telegram.sendMessage(chatId, `@${username} пока🫡`);
  }

  // answers to laughter
  if (laugh.test(msgText) && Math.random() > 0.75) {
    ctx.telegram.sendMessage(chatId, `АХАХАХАХАХАХ`);
  } else if (laugh.test(msgText) && Math.random() > 0.55) {
    ctx.telegram.sendMessage(chatId, `АХАХАХАХАХАХАХАА🤣🤣😂👆💯`);
  } else if (laugh.test(msgText) && Math.random() > 0.25) {
    ctx.telegram.sendMessage(chatId, `Ахахахахах🤡🤡🤡`);
  } else if (laugh.test(msgText) && Math.random() > 0.1) {
    ctx.telegram.sendMessage(chatId, `АХАХахах.. Не смішно😐`);
  }

  // answers to photos
  if (ctx.message.photo && Math.random() > 0.75 && userId === bohdanId) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/bogdan-moment-gif-21819300', { reply_to_message_id: msgId });
  } else if (ctx.message.photo && Math.random() > 0.75) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/eyes-gif-21821822', { reply_to_message_id: msgId });
  } else if (ctx.message.photo && Math.random() > 0.72) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/didnt-laugh-not-funny-didnt-laugh-not-funny-not-funny-didnt-laugh-meme-funny-gif-25394895', { reply_to_message_id: msgId });
  } else if (ctx.message.photo && Math.random() > 0.67) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/looking-around-guilty-confused-gif-15013187', { reply_to_message_id: msgId });
  } else if (ctx.message.photo && Math.random() > 0.62) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/look-at-me-look-at-this-do-you-see-this-mmhmm-ok-gif-17858627', { reply_to_message_id: msgId });
  }

  // answers to adjactives
  if (adjective.test(msgText) && Math.random() > 0.85) {
    const adjInMsg = msgText.match(adjective)[0].toLowerCase();
    ctx.telegram.sendMessage(chatId, `Cам ти ${adjInMsg}`, { reply_to_message_id: msgId });
  }

  // sending gifs
  if (botName.test(msgText)) {
    const tag = msgText.replace(/[ ]?@anti_HI_bot[ ]?/g, '');
    console.log(tag)

    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}`);
      const gifUrl = response.data.data.images.original.url;

      ctx.telegram.sendAnimation(chatId, gifUrl, { reply_to_message_id: msgId });
    } catch (error) {
      console.error('Error fetching GIF:', error);
      ctx.reply(`Ти можеш нормальні запити давати, інвалід?\n${error}`);
    }
  }
});

bot.launch();
