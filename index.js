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

  const uaPryvit = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.uaP}${a.uaR}${a.uaYi}${a.uaV}${a.uaI}${a.uaT}(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const engPryvit = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.engP}${a.engR}${a.engY}(${a.engU})?${a.engV}(${a.engW})?${a.engI}${a.engT}(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const engPrivet = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.engP}(${a.engR})?${a.engI}(${a.engV}|${a.engW})?${a.engE}${a.engT}(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const engHello = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.engH}(${a.engE}|${a.engA})?${a.engL}(${a.engL})?${a.engO}(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const uaHello = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.uaKh}(${a.uaE}|${a.uaA})?${a.uaL}(${a.uaL})?${a.uaO}(${a.uaU})?(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const engHi = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.engH}${a.engI}(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const uaHi = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])${a.uaKh}${a.uaA}${a.uaY}(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const engZdarova = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])(${a.engZ})?${a.engD}(${a.engA}|${a.engO})?${a.engR}${a.engO}(${a.engV}|${a.engU})?(${a.engA})?(?:$|[^a-zA-Zа-яА-Я])`, 'i');
  const uaZdarova = new RegExp(`(?:^|[^a-zA-Zа-яА-Я])(${a.uaZ})?${a.uaD}(${a.uaA}|${a.uaO})?${a.uaR}${a.uaO}(${a.uaV}|${a.uaU})?(${a.engA})?(?:$|[^a-zA-Zа-яА-Я])`, 'i');

  if (userId !== vladId &&
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
    ctx.telegram.sendMessage(chatId, `@${username} пока🫡`);
  }
});

bot.launch();
