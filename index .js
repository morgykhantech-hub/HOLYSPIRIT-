const fs = require('fs');
const path = require('path');

// Bot configuration
const config = {
  prefix: '.',
  name: 'holyspirit-bot',
  owner: 'Morgy Khan',
  mode: 'public', // public or private
  enabled: true
};

// Command categories
const commands = {
ai: ['gpt',
'chatgpt',
'bard'
'gemini',
'claude',
`llama'
``deepseek'
, 'qwen', 
'metaai'],
image: ['
imagine'
, 'dalle', '
toanime', '
cartoon', 
'logo', 
'remove', 
upscale', '
removebg', 
'blur', 
'hd', 
'remini'],
  utility: 
  ==search ]
  'google', 
  'wiki', '
  define', 
  ['[ttranslate'],
  code: 
  ['code', 
  'debug', '
  html', 
  'css', '
  js', '
  python', '
  react',
  'node'],
  text: 
  ['write'], 
  'essay', '
  story', '
  poem', '
  song', '
  bio', '
  caption',
  'email', '
  letter']
};

// Initialize bot
function startBot() {
  try {
const bot = require('whatsflow').createBot(config.name);
bot.onText(/hi|hello/i, (msg) => {
 bot.reply(msg, 'Hello! 👋');
    });

bot.onText(new RegExp(`^${config.prefix}(ping|menu|help)$`, 'i'), (msg, match) => {
      const command = match[1].toLowerCase();
      if (command === 'ping') {
        bot.reply(msg, 'Pong! 🏓');
      } else if (command === 'menu' || command === 'help') {
        bot.reply(msg, formatMenu());
      }
    });

    bot.start();
    console.log('✅ HOLYSPIRIT Bot started successfully!');
  } catch (error) {
    console.error('❌ Error starting bot:', error.message);
  }
}

function formatMenu() {
  let menu = '🤖 *HOLYSPIRIT Bot Commands*\n\n';
  Object.entries(commands).forEach(([category, cmds]) => {
    menu += `*${category.toUpperCase()}:*\n${config.prefix}${cmds.join(`\n${config.prefix}`)}\n\n`;
  });
  return menu;
}

// Start the bot
startBot();

module.exports = { startBot, config, commands };
