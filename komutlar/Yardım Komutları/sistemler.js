module.exports = {
  name: "sistemler",
  code: `
  
  $author[$username[$clientID];$userAvatar[$clientID]]
  $title[Sistemler Menüsü]
  $description[
    > <:blurple_settings:909360753469968404> \`.mute-sistemi\`: Tamamen Ayarlanılabilen Mute Sisteminin Komutlarını Listeler!
    > <:blurple_settings:909360753469968404> \`.otorol-sistemi\`: Tamamen Ayarlanılabilen Otorol Sisteminin Komutlarını Listeler!
    > <:blurple_employee:909356951757029426> <:blurple_settings:909360753469968404> \`.sayaç-sistemi\`: Tamamen Ayarlanılabilen Sayaç Sisteminin Komutlarını Listeler!
    > <:blurple_settings:909360753469968404> \`.jail-sistemi\`: Tamamen Ayarlanılabilen Jail Sisteminin Komutlarını Listeler!
    > <:blurple_employee:909356951757029426> <:blurple_settings:909360753469968404> \`.kick-sistemi\`: Tamamen Ayarlanılabilen Kick Sisteminin Komutlarını Listeler!
    > <:blurple_employee:909356951757029426> <:blurple_settings:909360753469968404> \`.ban-sistemi\`: Tamamen Ayarlanılabilen Ban Sisteminin Komutlarını Listeler
    > <:blurple_employee:909356951757029426> <:blurple_settings:909360753469968404> \`.abone-rol-sistemi\`: Tamamen Ayarlanılabilen Abone Rol Sisteminin Komutlarını Listeler!

    > <:blurple_guide:909357424031449118> \`.gelişmeler\`: Botun Oluşturulma Tarihinden Bu Güne Olan Bütün Gelişmeleri Gösterilen Bir Bilgilendirme Mesajıdır!
  ]
  $footer[$username;$userAvatar[$clientID]]
  $addTimestamp[1]
  $color[$replaceText[$replaceText[$getGlobalUserVar[user_premium;$authorID];no;#9b7f7f];yes;#00ff19]]
  
  $cooldown[5s;**\`sistemler\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}