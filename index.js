/* eslint-disable */
const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const alph = require('./alphabet');

bot.on('message', (ctx) => {
  const chatId = ctx.message.chat.id;
  const msgId = ctx.message.message_id;
  const userId = ctx.message.from.id;
  const username = ctx.message.from.username;
  const msgText = ctx.message.text;
  const vladId = +process.env.VLAD_ID;
  const bohdanId = +process.env.BOHDAN_ID;

  const regex = /[п|p][р|г|p|r][і|i|и|u|y][в|b|v|6][і|i|j|1|¡][т|t]|[в|b|6][і|i|1|¡][т|t][а|a|á|à|â|ã|@|4][й]?[ю|у|y]|[х|н|h|x][е|э|є|а|e|a|3|@|á|à|â|ã|4][л|і|l|i|j|\||\\|\/|!|1|¡]?[л|і|l|i|\||\\|\/|!|1|¡][о|o|0|ó|ò][у|y|u]?|[б|в|b|6][о|0|ó|ò|o][н|п|n][ж|j][о|0|ó|ò|o]?[у|y|u][р|г|r][но|nо|нo|no]?/i;

  if (userId !== vladId && regex.test(msgText)) {
    ctx.telegram.deleteMessage(chatId, msgId);
    ctx.telegram.sendMessage(chatId, `@${username} пока🫡`);
  }
});

bot.launch();

//|[х|x|н|h][і||i|1|¡]|[х|x|н|h][а|a|á|à|â|ã|@][й|и|і|i] hi хай
