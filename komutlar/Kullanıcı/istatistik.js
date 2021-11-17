module.exports = {
  name: "istatistik",
  code: `
  
  $author[$username[$clientID];$userAvatar[$clientID]]
  $title[İstatistik]
  $description[


  > <:discord_channel_from_VEGA:909354992387883069> Toplam Yazı Kanalları: ***\`$allChannelsCount[text]\`***
  > <:blurple_voicechannel:909355775401545728> Toplam Ses Kanalları: ***\`$allChannelsCount[voice]\`***
  > <:blurple_announcements:909355964619165696> Toplam Anons Kanalı: ***\`$allChannelsCount[news]\`***
  > <:blurple_members:909356597879386122> Toplam Bot Kullanıcı Sayısı: ***\`$allMembersCount\`***
  > <:blurple_star:909360589187469333> Toplam Emoji Sayısı: ***\`$allEmojiCount\`***
  > <:Discord:909367762110001162> Toplam Sunucu Sayısı: ***\`$serverCount\`***
  > <:blurple_slashcommands:909359021293711360> Toplam Komut Sayısı: ***\`$commandsCount\`***
  > <:blurple_settings:909360753469968404> Toplam Ram Kullanımı: ***\`$ram\`***
  ]
  $footer[$username - istatistiklerime Bakıyor;$userAvatar[$clientID]]
  $addTimestamp
  $color[$replaceText[$replaceText[$getGlobalUserVar[user_premium;$authorID];no;#9b7f7f];yes;#00ff19]]

  $cooldown[5s;**\`istatistik\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}