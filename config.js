import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.botNumber = '' //Ejemplo: 56971943258

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.owner = [
  ['56971943258', 'SkyBot', true]
];

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.mods = []
global.suittag = ['56971943258']
global.prems = []

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.namebot = 'SkyBot'
global.packname = 'SkyBot'
global.botname = 'SkyBot'
global.wm = 'SkyBot'
global.author = 'SkyBot'
global.dev = 'SkyBot'
global.club = 'SkyBot'
global.textbot = 'SkyBot'
global.etiqueta = 'SkyBot'
global.jadi = 'JadiBots'
global.sessions = 'SkyBotSession'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.moneda = 'Diamantes 💎'
global.xanime = '🍮'
global.xmenus = '🍪'
global.xnable = '🧋'
global.xefects = '🥥'
global.xfrases = '🍯'
global.xgame = '🌹'
global.xsearch = '🌳'
global.xtools = '🍚'
global.xdownload = '🥞'
global.xconverter = '🪾'
global.xlist = '📑'
global.xff = '🥧'
global.xlogos = '🖼️'
global.xgc = '🍃'
global.xinfo = '☁️'
global.xnsfw = '🪼'
global.xowner = '☕'
global.xia = '💭'
global.xfun = '🥯'
global.xsticker = '🫓'
global.xrpg = '🍙'
global.xreg = '🪴'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.github = 'https://github.com/SkyBOTzN/SkyBot'
global.grupo = 'https://chat.whatsapp.com/HhZUtxp2KRTD5rD5j09VCy'
global.comu = 'https://chat.whatsapp.com/HhZUtxp2KRTD5rD5j09VCy'
global.channel = 'https://www.whatsapp.com/channel/xdddddd'
global.ig = 'https://www.instagram.com/skybot.ofc'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "56971943258-120363046971143826@g.us" } : {}) }, message: { orderMessage: { itemCount: -999999, status: 1, surface: 1, message: 'SkyBot', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net' } } }
global.multiplier = 70

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})