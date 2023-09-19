/* eslint-disable */

/* import packages */
const { Telegraf } = require('telegraf');
const axios = require('axios');
const translatte = require('translatte');
require('dotenv').config();

/* import regex */
const a = require('./alphabet');

/* variables for api's keys */
const bot = new Telegraf(process.env.BOT_TOKEN);

// to get your api key and learn more: https://developers.google.com/tenor/guides/quickstart
const TENOR_API_KEY = process.env.TENOR_API_KEY;

/* global variable to limit sending multiple photo reactions at once */
let msgDateLimit = 0;

/* the bot's response to the message */
bot.on('message', async (ctx) => {
  /* variables for telegram api */
  const chatId = ctx.message.chat.id;
  const msgId = ctx.message.message_id;
  const userId = ctx.message.from.id;
  const username = ctx.message.from.username;
  const msgText = ctx.message.text;
  const msgDate = ctx.message.date;

  /* variables for users id */
  const firstId = +process.env.FIRST_ID;
  const secondId = +process.env.SECOND_ID;
  const thirdId = +process.env.THIRD_ID;

  /* reply for private chat */
  if (ctx.message.chat.type === 'private') {
    ctx.reply(
      'This bot is designed for use in group chats.\nLearn more: https://github.com/HarkushaVlad/anti-hi-bot'
    );
    return;
  }

  /* variables for ban words */
  const uaPryvit = new RegExp(
    `${a.begin}${a.uaP}${a.uaR}${a.uaYi}${a.uaV}${a.uaI}${a.uaT}${a.end}`,
    'i'
  );
  const engPryvit = new RegExp(
    `${a.begin}${a.engP}${a.engR}${a.engY}(${a.engU})?${a.engV}(${a.engW})?${a.engI}${a.engT}${a.end}`,
    'i'
  );
  const engHello = new RegExp(
    `${a.begin}${a.engH}(${a.engE}|${a.engA})?${a.engL}(${a.engL})?${a.engO}${a.end}`,
    'i'
  );
  const uaHello = new RegExp(
    `${a.begin}${a.uaKh}(${a.uaE}|${a.uaA})?${a.uaL}(${a.uaL})?${a.uaO}(${a.uaU})?${a.end}`,
    'i'
  );
  const engHi = new RegExp(`${a.begin}${a.engH}${a.engI}${a.end}`, 'i');
  const uaHi = new RegExp(
    `${a.begin}${a.uaKh}(${a.uaA}|${a.uaE})${a.uaY}${a.end}`,
    'i'
  );
  const engZdarova = new RegExp(
    `${a.begin}(${a.engZ})?${a.engD}(${a.engA}|${a.engO})?${a.engR}${a.engO}(${a.engV}|${a.engU})?(${a.engA})?${a.end}`,
    'i'
  );
  const uaZdarova = new RegExp(
    `${a.begin}(${a.uaZ})?${a.uaD}(${a.uaA}|${a.uaO})?${a.uaR}${a.uaO}(${a.uaV}|${a.uaU})?(${a.engA})?${a.end}`,
    'i'
  );
  const engPrivet = new RegExp(
    `${a.begin}${a.engP}(${a.engR})?${a.engI}(${a.engV}|${a.engW})?((${a.engE}${a.engT})|(${a.engK}${a.engI}))?${a.end}`,
    'i'
  );

  /* variables for trigger words */
  const laugh = new RegExp(`${a.engA}${a.engH}${a.engA}${a.engH}`, 'i');
  const adjective = new RegExp(`[а-яіїє]+ий$`, 'i');
  const botName = new RegExp(`@anti_HI_bot`, 'g');

  /* check the message on ban words */
  if (
    userId !== firstId &&
    (uaPryvit.test(msgText) ||
      engPryvit.test(msgText) ||
      engPrivet.test(msgText) ||
      engHello.test(msgText) ||
      uaHello.test(msgText) ||
      engHi.test(msgText) ||
      uaHi.test(msgText) ||
      engZdarova.test(msgText) ||
      uaZdarova.test(msgText))
  ) {
    ctx.telegram.deleteMessage(chatId, msgId);
    ctx.reply(`@${username} пока🫡`);
  }

  /* answers to laughter */
  if (laugh.test(msgText) && Math.random() > 0.85) {
    ctx.reply(`АХАХАХАХАХАХ`);
  } else if (laugh.test(msgText) && Math.random() > 0.65) {
    ctx.reply(`АХАХАХАХАХАХАХАА🤣🤣😂👆💯`);
  } else if (laugh.test(msgText) && Math.random() > 0.45) {
    ctx.reply(`Ахахахахах🤡🤡🤡`);
  } else if (laugh.test(msgText) && Math.random() > 0.3) {
    ctx.reply(`АХАХахах.. Не смішно😐`);
  }

  /* answers to photos */
  if (ctx.message.photo && msgDate !== msgDateLimit) {
    // updating the message date
    msgDateLimit = msgDate;

    // sending random gifs by keyword
    async function getRandomGif(keyword) {
      try {
        const response = await axios.get(
          `https://tenor.googleapis.com/v2/search?q=${keyword}&key=${TENOR_API_KEY}&random=true&limit=1`
        );
        return response.data.results[0].url;
      } catch (error) {
        console.error(error);
        ctx.reply(`Тут повинна була бути гіфка, але щось пішло не так😢`);
      }
    }

    let gifKeyword = '';

    if (Math.random() > 0.9 && userId === secondId) {
      // special reply for "second" user
      ctx.telegram.sendAnimation(
        chatId,
        'https://tenor.com/uk/view/bogdan-moment-gif-21819300',
        { reply_to_message_id: msgId }
      );
    } else if (Math.random() > 0.6 && userId === thirdId) {
      // special reply for "third" user
      ctx.reply(`А сьо єто`, { reply_to_message_id: msgId });
    } else if (Math.random() > 0.85) {
      // answers for all users
      gifKeyword = 'look';
    } else if (Math.random() > 0.75) {
      gifKeyword = 'cringe';
    } else if (Math.random() > 0.65) {
      gifKeyword = 'laugh';
    }

    if (gifKeyword) {
      const gifUrl = await getRandomGif(gifKeyword);
      ctx.telegram.sendAnimation(chatId, gifUrl, {
        reply_to_message_id: msgId,
      });
    }
  }

  /* answer to adjactives */
  if (adjective.test(msgText) && Math.random() > 0.65 && userId === thirdId) {
    // female
    const adjInMsg = msgText
      .match(adjective)[0]
      .replace(/(..)$/, 'а')
      .toLowerCase();
    ctx.telegram.sendMessage(chatId, `Cама ти ${adjInMsg}`, {
      reply_to_message_id: msgId,
    });
  } else if (adjective.test(msgText) && Math.random() > 0.65) {
    // male
    const adjInMsg = msgText.match(adjective)[0].toLowerCase();
    ctx.telegram.sendMessage(chatId, `Cам ти ${adjInMsg}`, {
      reply_to_message_id: msgId,
    });
  }

  /* search gifs */
  if (botName.test(msgText)) {
    const tag = msgText.replace(/[ ]?@anti_HI_bot[ ]?/g, '');

    try {
      // translation
      const transTag = await translatte(tag, {
        from: 'auto',
        to: 'en',
      });

      const response = await axios.get(
        `https://tenor.googleapis.com/v2/search?q=${transTag.text}&key=${TENOR_API_KEY}&random=true&limit=1`
      );
      const gifUrl = response.data.results[0].url;

      ctx.telegram.sendAnimation(chatId, gifUrl, {
        reply_to_message_id: msgId,
      });
    } catch (error) {
      console.error(error);
      ctx.reply(`Ти можеш нормальні запити робити?`);
    }
  }

  /* send random gif */
  if (
    Math.random() > 0.95 &&
    ctx.message.hasOwnProperty('text') &&
    !msgText.includes('/')
  ) {
    try {
      // translation
      const transMsgText = await translatte(msgText, {
        from: 'auto',
        to: 'en',
      });

      console.log('done');

      const msgArr = transMsgText.text.match(/\b\w{3,}\b/g);

      if (msgArr) {
        const randomTag = msgArr[Math.floor(Math.random() * msgArr.length)];

        const response = await axios.get(
          `https://tenor.googleapis.com/v2/search?q=${randomTag}&key=${TENOR_API_KEY}&random=true&limit=1`
        );
        const gifUrl = response.data.results[0].url;

        ctx.telegram.sendAnimation(chatId, gifUrl, {
          reply_to_message_id: msgId,
        });
      }
    } catch (error) {
      console.error(error);
      ctx.reply(`Я хотів відправити якусь смішнявку, але щось пішло не так😢`);
    }
  }

  /* for congratulations */
  if (msgText === '/вітаю') {
    const sendCongratsGif = async () => {
      try {
        const response = await axios.get(
          `https://tenor.googleapis.com/v2/search?q=congratulations&key=${TENOR_API_KEY}&random=true&limit=3`
        );

        const gifUrls = response.data.results;

        for (let i = 0; i < 3; i++) {
          const sendGifUrl = gifUrls[i].url;
          await ctx.telegram.sendAnimation(chatId, sendGifUrl);
        }
      } catch (error) {
        console.error(error);
        ctx.reply(`*Уяви що тут гіфка*`);
      }
    };

    const sendPiecesOfWord = () => {
      ctx
        .reply(`🎉🥳🎉🥳🎉🥳🎉`)
        .then(() => ctx.reply(`ВІ`))
        .then(() => ctx.reply(`ТА`))
        .then(() => ctx.reply(`Ю`))
        .then(() => ctx.reply(`🎉🥳🎉🥳🎉🥳🎉`))
        .then(() => sendCongratsGif())
        .then(() => ctx.reply(`🎉🥳🎉🥳🎉🥳🎉`))
        .then(() => ctx.reply(`ВІ`))
        .then(() => ctx.reply(`ТА`))
        .then(() => ctx.reply(`Ю`))
        .then(() => sendCongratsGif())
        .catch((error) => {
          ctx.reply('Упс');
          console.log(error);
        });
    };

    sendPiecesOfWord();
  }
});

/* reset old messages while the bot was offline */
async function sendGetUpdatesRequest() {
  const response = await axios.get(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getUpdates?offset=-1`
  );
  console.log(response.data);
}

sendGetUpdatesRequest();

bot.launch();
