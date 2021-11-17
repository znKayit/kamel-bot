module.exports = {
  name: "mute-sistemi",
  code: `
  
  $author[$username[$clientID];$userAvatar[$clientID]]
  $title[Mute Menüsü]
  $description[
    > <:blurple_muted:909359442364096563> \`.mute-yetkili-rol-ayarla\`: Mute Yetkili Rol Ayarlar!
    > <:blurple_muted:909359442364096563> \`.mute-yetkili-rol-sıfırla\`: Mute Yetkili Rol Sıfırlar!
    > <:blurple_muted:909359442364096563> \`.mute-log-kanal-ayarla\`: Mute Log Kanalını Ayarlar!
    > <:blurple_muted:909359442364096563> \`.mute-log-kanal-sıfırla\`: Mute Log Kanalını Sıfırlar!
    > <:blurple_muted:909359442364096563> \`.mute-rol-ayarla\`: Mute Rol Ayarlar!
    > <:blurple_muted:909359442364096563> \`.mute-rol-sıfırla\`: Mute Rol Sıfırlar!
    > <:blurple_muted:909359442364096563> \`.mute\`: Kullanıcı Muteler!
    > <:blurple_muted:909359442364096563> \`.unmute\`: Kullanıcı Muteler!


    > <:blurple_guide:909357424031449118> \`.gelişmeler\`: Botun Oluşturulma Tarihinden Bu Güne Olan Bütün Gelişmeleri Gösterilen Bir Bilgilendirme Mesajıdır!
  ]
  $footer[$username;$userAvatar[$clientID]]
  $addTimestamp[1]
  $color[$replaceText[$replaceText[$getGlobalUserVar[user_premium;$authorID];no;#9b7f7f];yes;#00ff19]]
  
  $cooldown[5s;**\`mute-sistemi\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}