module.exports = {
  name: "otorol-sistemi",
  code: `
  
  $author[$username[$clientID];$userAvatar[$clientID]]
  $title[Otomatik Rol Menüsü]
  $description[
    > <:blurple_settings:909360753469968404> \`.otorol-rol-ayarla\`: Sunucunuza Katılanlara Verilecek Olan Rolü Ayarlar!
    > <:blurple_settings:909360753469968404> \`.otorol-rol-sıfırla\`: Otomatik Rolü Sıfırlar!
    > <:blurple_settings:909360753469968404> \`.otorol-kanal-ayarla\`: Otomatik Rol Bilgi Kanal Ayarlar!
    > <:blurple_settings:909360753469968404> \`.otorol-kanal-sıfırla\`: Otomatik Bilgilendirme Kanalı Sıfırlar!
    > <:blurple_employee:909356951757029426> <:blurple_settings:909360753469968404> \`.otorol-mesaj-ayarla\`: Otomatik Rol Bilgi Mesajını Özelleştirir!
    > <:blurple_employee:909356951757029426> <:blurple_settings:909360753469968404> \`.otorol-mesaj-sıfırla\`: Otomatik Rol Bilgi Mesajını Eski Haline Getirir!
    > <:blurple_employee:909356951757029426> <:blurple_settings:909360753469968404> \`.otorol-mesaj-argümanlar\`: Otomatik Rol Bilgi Mesajının Argümanlarını Gösterir!


    > <:blurple_guide:909357424031449118> \`.gelişmeler\`: Botun Oluşturulma Tarihinden Bu Güne Olan Bütün Gelişmeleri Gösterilen Bir Bilgilendirme Mesajıdır!
  ]
  $footer[$username;$userAvatar[$clientID]]
  $addTimestamp[1]
  $color[$replaceText[$replaceText[$getGlobalUserVar[user_premium;$authorID];no;#9b7f7f];yes;#00ff19]]
  
  $cooldown[5s;**\`otorol-sistemi\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}