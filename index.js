/* import packages */
const { Telegraf } = require(`telegraf`);
const axios = require(`axios`);
const translatte = require(`translatte`);
require(`dotenv`).config();

/* import regex */
const a = require(`./alphabet`);

/* variables for api`s keys */
const bot = new Telegraf(process.env.BOT_TOKEN);

// to get your api key and learn more: https://developers.google.com/tenor/guides/quickstart
const TENOR_API_KEY = process.env.TENOR_API_KEY;
const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

/* global variable to limit sending multiple photo reactions at once */
let msgDateLimit = 0;

/* the bot`s response to the message */
bot.on(`message`, async (ctx) => {
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
  if (ctx.message.chat.type === `private`) {
    ctx.reply(
      `This bot is designed for use in group chats.\nLearn more: https://github.com/HarkushaVlad/anti-hi-bot`
    );
    return;
  }

  /* variables for ban words */
  const uaPryvit = new RegExp(
    `${a.begin}${a.uaP}${a.uaR}${a.uaYi}${a.uaV}${a.uaI}${a.uaT}${a.end}`,
    `i`
  );
  const engHello = new RegExp(
    `${a.begin}${a.engH}(${a.engE}|${a.engA})?${a.engL}(${a.engL})?${a.engO}${a.end}`,
    `i`
  );

  const engHi = new RegExp(`${a.begin}hi${a.end}`, `i`); // exception for ukrainian 'ні'

  const banWords = [uaPryvit, engHello, engHi];

  /* variables for trigger words */
  const laugh = new RegExp(`${a.engA}${a.engH}${a.engA}${a.engH}`, `i`);
  const adjective = new RegExp(`[а-яіїє]+ий$`, `i`);

  /* check the message on ban words */
  banWords.forEach((word) => {
    if (userId !== firstId && word.test(msgText)) {
      ctx.telegram.deleteMessage(chatId, msgId);
      ctx.reply(`@${username} пока🫡`);
    }
  });

  /* answers to laughter */
  if (laugh.test(msgText)) {
    const randomLaugh = Math.random();

    if (randomLaugh > 0.95) {
      ctx.reply(`Ахахахахаха`);
    } else if (randomLaugh > 0.89) {
      ctx.reply(`АХАХАХАХАХАХАХАА🤣🤣😂👆💯`);
    } else if (randomLaugh > 0.83) {
      ctx.reply(`Ахахахахах🤡🤡🤡`);
    } else if (randomLaugh > 0.8) {
      ctx.reply(`АХАХахах.. Не смішно😐`);
    }
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

    let gifKeyword = ``;
    const randomAnsPhoto = Math.random();

    if (randomAnsPhoto > 0.94 && userId === secondId) {
      // special reply for "second" user
      ctx.telegram.sendAnimation(
        chatId,
        `https://tenor.com/uk/view/bogdan-moment-gif-21819300`,
        { reply_to_message_id: msgId }
      );
    } else if (randomAnsPhoto > 0.8 && userId === thirdId) {
      // special reply for "third" user
      ctx.reply(`А сьо єто`, { reply_to_message_id: msgId });
    } else if (randomAnsPhoto > 0.7) {
      // answers for all users
      gifKeyword = `look`;
    } else if (randomAnsPhoto > 0.65) {
      gifKeyword = `cringe`;
    } else if (randomAnsPhoto > 0.58) {
      gifKeyword = `laugh`;
    }

    if (gifKeyword) {
      const gifUrl = await getRandomGif(gifKeyword);
      ctx.telegram.sendAnimation(chatId, gifUrl, {
        reply_to_message_id: msgId,
      });
    }
  }

  /* answer to adjactives */
  if (adjective.test(msgText) && Math.random() > 0.75 && userId === thirdId) {
    // female
    const adjInMsg = msgText
      .match(adjective)[0]
      .replace(/(..)$/, `а`)
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

  /* send random gif */
  if (
    Math.random() > 0.95 &&
    ctx.message.hasOwnProperty(`text`) &&
    !msgText.includes(`/`)
  ) {
    try {
      // translation
      const transMsgText = await translatte(msgText, {
        from: `auto`,
        to: `en`,
      });

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

  /* greetings */
  if (msgText === `/greetings@anti_HI_bot`) {
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
          ctx.reply(`Упс`);
          console.log(error);
        });
    };

    sendPiecesOfWord();
  }

  /* birthday video */
  if (msgText === `/happybday@anti_HI_bot`) {
    const sendBDayVideo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files/1GxMgklUVVPiAkDAm-Wcda5fednkEP-HX?key=${GOOGLE_DRIVE_API_KEY}`
        );

        const videoUrl = `https://drive.google.com/uc?id=${response.data.id}`;

        await ctx.telegram.sendAnimation(chatId, videoUrl);
      } catch (error) {
        console.error(error);
        ctx.reply(`*Круте відео з пісенькою*`);
      }
    };

    sendBDayVideo();
  }

  /* astrology */
  if (msgText === `/horoscope@anti_HI_bot`) {
    const signs = {
      inline_keyboard: [
        [{ text: `Овен ♈️`, callback_data: `Aries` }],
        [{ text: `Телець ♉️`, callback_data: `Taurus` }],
        [{ text: `Близнюки ♊️`, callback_data: `Gemini` }],
        [{ text: `Рак ♋️`, callback_data: `Cancer` }],
        [{ text: `Лев ♌️`, callback_data: `Leo` }],
        [{ text: `Діва ♍️`, callback_data: `Virgo` }],
        [{ text: `Терези ♎️`, callback_data: `Libra` }],
        [{ text: `Скорпіон ♏️`, callback_data: `Scorpio` }],
        [{ text: `Стрілець ♐️`, callback_data: `Sagittarius` }],
        [{ text: `Козеріг ♑️`, callback_data: `Capricorn` }],
        [{ text: `Водолій ♒️`, callback_data: `Aquarius` }],
        [{ text: `Риби ♓️`, callback_data: `Pisces` }],
      ],
    };

    ctx.telegram.sendMessage(chatId, `Ваш знак зодіаку?`, {
      reply_markup: JSON.stringify(signs),
    });
  }
});

/* reply for astrology buttons */
bot.on(`callback_query`, async (ctx) => {
  const chatId = ctx.callbackQuery.message.chat.id;
  const msgId = ctx.callbackQuery.message.message_id;

  ctx.telegram.deleteMessage(chatId, msgId);

  try {
    const sendingData = {
      sign: ctx.callbackQuery.data,
    };

    // getting horoscope
    const response = await axios.post(
      `https://newastro.vercel.app/`,
      sendingData,
      {
        headers: {
          'Content-Type': `application/json`,
        },
      }
    );

    const horoscope = response.data.horoscope;

    try {
      // translation
      const transHoroscope = await translatte(horoscope, {
        from: `en`,
        to: `uk`,
      });

      ctx.reply(transHoroscope);
    } catch (error) {
      console.error(error);
      ctx.reply(`Щось пішло не так😥`);
    }
  } catch (error) {
    ctx.reply(`Щось пішло не так😥`);
    console.error(error);
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
