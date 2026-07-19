Holyspirit powed by MORGYKHANTECH.
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys')
const fs = require('fs')
const path = require('path')

const prefix = '.'
const commands = new Map()

// Load commands
const commandsPath = path.join(__dirname, 'commands')
if(!fs.existsSync(commandsPath)) fs.mkdirSync(commandsPath)
fs.readdirSync(commandsPath).filter(f => f.endsWith('.js')).forEach(file => {
    const cmd = require(`./commands/${file}`)
    commands.set(cmd.name, cmd)
})

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('session')
    const sock = makeWASocket({ auth: state, printQRInTerminal: true })
    sock.ev.on('creds.update', saveCreds)
    
    sock.ev.on('connection.update', (u) => {
        if(u.connection === 'open') console.log('🔥 HOLYSPIRIT BOT CONNECTED')
        if(u.connection === 'close') startBot()
    })

    sock.ev.on('messages.upsert', async ({ messages }) => {
        cons
        const commandName = args.shift().toLowerCase()
        const command = commands.get(commandName)
        if(command) command.execute(sock, msg, args)
    })
}
startBot(hi){import { createBot } from "whatsflow";
const bot = createBot(HOLYSPIRIT);
bot.onText("hi", (msg, bot) => bot.reply(msg, "Hello!"));
bot.start(on); // scan QR code to connect
  "name": "holyspirit-bot",
.menu` =ping
.repo
.prefix`=()
             


             
}
