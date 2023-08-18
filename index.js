/* eslint-disable */
const { Telegraf } = require('telegraf');
require('dotenv').config();

const a = require('./alphabet');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('message', (ctx) => {
  const chatId = ctx.message.chat.id;
  const msgId = ctx.message.message_id;
  const userId = ctx.message.from.id;
  const username = ctx.message.from.username;
  const msgText = ctx.message.text;
  const vladId = +process.env.VLAD_ID;
  const bohdanId = +process.env.BOHDAN_ID;

  const uaPryvit = new RegExp(`${a.uaP}${a.uaR}${a.uaYi}${a.uaV}${a.uaI}${a.uaT}`, 'i');
  const engPryvit = new RegExp(`${a.engP}${a.engR}${a.engY}(${a.engU})?${a.engV}(${a.engW})?${a.engI}${a.engT}`, 'i');
  const engHello = new RegExp(`${a.engH}(${a.engE}|${a.engA})?${a.engL}(${a.engL})?${a.engO}`, 'i');
  const uaHello = new RegExp(`${a.uaKh}(${a.uaE}|${a.uaA})?${a.uaL}(${a.uaL})?${a.uaO}(${a.uaU})?`, 'i');
  const engHi = new RegExp(`(?:^|[^a-zа-я])${a.engH}${a.engI}(?:$|[^a-zа-я])`, 'i');
  const uaHi = new RegExp(`(?:^|[^a-zа-я])${a.uaKh}(${a.uaA}|${a.uaE})${a.uaY}(?:$|[^a-zа-я])`, 'i');
  const engZdarova = new RegExp(`(${a.engZ})?${a.engD}(${a.engA}|${a.engO})?${a.engR}${a.engO}(${a.engV}|${a.engU})?(${a.engA})?`, 'i');
  const uaZdarova = new RegExp(`(${a.uaZ})?${a.uaD}(${a.uaA}|${a.uaO})?${a.uaR}${a.uaO}(${a.uaV}|${a.uaU})?(${a.engA})?`, 'i');
  const engPrivet = new RegExp(`${a.engP}(${a.engR})?${a.engI}(${a.engV}|${a.engW})?((${a.engE}${a.engT})|(${a.engK}${a.engI}))?(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const engSalam = new RegExp(`${a.engS}${a.engA}${a.engL}${a.engA}${a.engM}`, 'i');
  const engNihao = new RegExp(`${a.engN}${a.engI}${a.engH}${a.engA}${a.engO}`, 'i');

  const laugh = new RegExp(`${a.engA}${a.engH}${a.engA}${a.engH}`, 'i');
  const adjective = new RegExp(`[а-яії]+ий(?:$|[а-я])`, 'i');

  if (userId === bohdanId &&
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

  if (laugh.test(msgText) && Math.random() > 0.55) {
    ctx.telegram.sendMessage(chatId, `АХАХАХАХАХАХАХАА🤣🤣😂👆💯`);
  } else if (laugh.test(msgText) && Math.random() > 0.25) {
    ctx.telegram.sendMessage(chatId, `Ахахахахах🤡🤡🤡`);
  } else if (laugh.test(msgText) && Math.random() > 0.1) {
    ctx.telegram.sendMessage(chatId, `АХАХахах.. Не смішно😐`);
  }


  if (ctx.message.photo && Math.random() > 0.65 && userId === bohdanId) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/bogdan-moment-gif-21819300');
  } else if (ctx.message.photo && Math.random() > 0.65) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/eyes-gif-21821822');
  } else if (ctx.message.photo && Math.random() > 0.5) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/didnt-laugh-not-funny-didnt-laugh-not-funny-not-funny-didnt-laugh-meme-funny-gif-25394895');
  } else if (ctx.message.photo && Math.random() > 0.4) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/looking-around-guilty-confused-gif-15013187');
  } else if (ctx.message.photo && Math.random() > 0.3) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/look-at-me-look-at-this-do-you-see-this-mmhmm-ok-gif-17858627');
  }

  if (adjective.test(msgText) && Math.random() > 0.8) {
    const adjInMsg = msgText.match(adjective)[0].toLowerCase();
    ctx.telegram.sendMessage(chatId, `@${username} сам ти ${adjInMsg}`);
  }
});

bot.launch();
