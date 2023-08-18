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
  const engHi = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.engH}${a.engI}(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const uaHi = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.uaKh}(${a.uaA}|${a.uaE})${a.uaY}(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const engZdarova = new RegExp(`(${a.engZ})?${a.engD}(${a.engA}|${a.engO})?${a.engR}${a.engO}(${a.engV}|${a.engU})?(${a.engA})?`, 'i');
  const uaZdarova = new RegExp(`(${a.uaZ})?${a.uaD}(${a.uaA}|${a.uaO})?${a.uaR}${a.uaO}(${a.uaV}|${a.uaU})?(${a.engA})?`, 'i');
  const engPrivet = new RegExp(`${a.engP}(${a.engR})?${a.engI}(${a.engV}|${a.engW})?((${a.engE}${a.engT})|(${a.engK}${a.engI}))?(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const engSalam = new RegExp(`${a.engS}${a.engA}${a.engL}${a.engA}${a.engM}`, 'i');
  const engNihao = new RegExp(`${a.engN}${a.engI}${a.engH}${a.engA}${a.engO}`, 'i');

  const laugh = new RegExp(`${a.engA}${a.engH}${a.engA}${a.engH}`, 'i');

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

  if (laugh.test(msgText)) {
    ctx.telegram.sendMessage(chatId, `АХАХАХАХАХАХАХАА🤣🤣😂😂👆👆💯`);
  }

  if (ctx.message.photo) {
    ctx.telegram.sendAnimation(chatId, 'https://tenor.com/uk/view/eyes-gif-21821822');
  }
});

bot.launch();
