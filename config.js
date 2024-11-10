const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "234 706 909 4507";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_51_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzLFxuICAgICAgICAzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgNixcbiAgICAgICAgNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVW1EbkRLR0ViU1BhcXR0Z0dXUmM1cUZIOHljTitKaFlCQ2F1clpmV0hGbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNzJGYVBrUDdTUUNuNFdhNFZFaVQ5d1wiLFxuICBcInBob25lSWRcIjogXCIyNmNhNmUwOS1mYjAzLTRkOGUtYTcxMi0yYWQ0M2MxMTQ5OGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAxMTMsXG4gICAgICAxNjcsXG4gICAgICAyMTYsXG4gICAgICA3NSxcbiAgICAgIDE2MyxcbiAgICAgIDIwOCxcbiAgICAgIDE5MCxcbiAgICAgIDI0NSxcbiAgICAgIDIxMCxcbiAgICAgIDIxMSxcbiAgICAgIDY4LFxuICAgICAgMTk2LFxuICAgICAgMTc4LFxuICAgICAgMTY3LFxuICAgICAgMjQxLFxuICAgICAgNjcsXG4gICAgICAyMTksXG4gICAgICAyNDcsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxNjUsXG4gICAgICAyMDEsXG4gICAgICAxNjksXG4gICAgICAyMTUsXG4gICAgICA2LFxuICAgICAgMTY0LFxuICAgICAgMzAsXG4gICAgICAxNTYsXG4gICAgICAxNTYsXG4gICAgICAxNTUsXG4gICAgICAxNTYsXG4gICAgICAyMzIsXG4gICAgICAyNixcbiAgICAgIDU2LFxuICAgICAgMzQsXG4gICAgICAyNTIsXG4gICAgICAxMzMsXG4gICAgICAyMTYsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkFCMjNZRThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjkwOTQ1MDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcwOTkxMzgwOTk2MTEwOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmJvNmNBQ0VQQ3N3N2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpdFpUOVJFZ1Vhc3l5OWlQODUvVXRSd3ZyRDZPbnFPNG1qUldINklDc2xzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk0xRVJYL2s1akYxTTQ3MFl5c0VWanp6cnRMYmV2U1dPZlYreHJWVm9FYXBwRlZqUjVlOE5nSVFyTjBUa0xodFlCaVJQa2M0V2tMaFdLRGVJU1NEV0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklzYjcyOEM4alRhcDVMWXRIMjNDb1pNMlJaN3hJSkFzL0tJbElRMmh5QW9jRm5mSjVXOFg0a3Vpc1ZNb2FuSm9aS3ZicFp5dmN1a2d3cVUwVEQrUWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjkwOTQ1MDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyNTM4NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRE9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZETy5qc29uIjogIntcImtleURhdGFcIjpcIlpuTWN5eGFQZGJyZUpoSnVuY2NnL3ZXYnl4WVFKdHlHdEJybFdCNVBPa1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjcyODIyMjk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEyNTM4ODI3OTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
