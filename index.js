const { keep_alive } = require("./keep_alive");

const aoi = require("aoi.js");
const bot = new aoi.Bot({
   token: "OTA3MjgwNzEyMjc5OTM3MDg2.YYk5Ag.jCWaQ7AdEXYoyXrPahPg-N0-b28", //Discord Bot Token
   prefix: ".", //Discord Bot Prefix
   intents: "all",
});
bot.onMessage();
bot.onJoined();
bot.onApplicationCmdCreate();
bot.onApplicationCmdDelete();
bot.onApplicationCmdUpdate();
bot.onBanAdd();
bot.onBanRemove();
bot.onChannelCreate();
bot.onChannelDelete();
bot.onChannelPinsUpdate();
bot.onChannelUpdate();
bot.onEmojiCreate();
bot.onEmojiDelete();
bot.onEmojiUpdate();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onGuildUpdate();
bot.onInteractionCreate();
bot.onInviteCreate();
bot.onInviteDelete();
bot.onLeave();
bot.onMemberUpdate();
bot.onMessageDelete();
bot.onMessageDeleteBulk();
bot.onMessageUpdate();
bot.onPresenceUpdate();
bot.onReactionAdd();
bot.onReactionRemove();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onRoleUpdate();
bot.onUserUpdate();
bot.onVoiceStateUpdate();

bot.loadCommands(`./komutlar/`);

/*
const load = new aoi.LoadCommands(bot);

load.load(bot.cmd, "./komutlar/");*/

//BOT VARİABLES
bot.variables({
   user_premium: "no",

   //MUTE SİSTEMİ
   mute_yetkili_role: "Ayarlanmadı",
   mute_log_channel: "Ayarlanmadı",
   mute_role: "Ayarlanmadı",
   
   //JAİL SİSTEMİ
   jail_yetkili_role: "Ayarlanmadı",
   jail_log_channel: "Ayarlanmadı",
   jail_role: "Ayarlanmadı",


   //otorol
   autorole_role: "Ayarlanmadı",
   autorole_channel: "Ayarlanmadı",
   autorole_message: "<:blurple_join:909357052164452392> [join.member] Adlı Kullanıcı [server.name] Sunucusuna Katıldı! `[auto.role.name]` Adlı Rol Kendisine Takdim Edildi",

});

//STATUS
bot.status({
   text: "Durum Yazısı 1",
   type: "PLAYING",
   time: 12,
});

bot.status({
   text: "Durum Yazısı 2",
   type: "PLAYING",
   time: 12,
});

bot.joinCommand({
   channel: "$randomChannelID",
   code: `

$if[$getServerVar[autorole_role;$guildID]==Ayarlanmadı]
$else

$if[$getServerVar[autorole_channel;$guildID]==Ayarlanmadı]

$giveRole[$authorID;$getServerVar[autorole_role]]

$else

$channelSendMessage[$getServerVar[autorole_channel;$guildID];
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[autorole_message;$guildID];[join.member];<@$authorID>];[server.name];$serverName[$guildID]];[auto.role.name];$roleName[$getServerVar[autorole_role;$guildID]]];[join.member.name];$username[$authorID]]

]
$giveRole[$authorID;$getServerVar[autorole_role]]



$endif
$endif


`,
});
