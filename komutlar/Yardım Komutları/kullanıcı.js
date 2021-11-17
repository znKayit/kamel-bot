module.exports = {
  name: "kullanıcı",
  code: `
  
  $author[$username[$clientID];$userAvatar[$clientID]]
  $title[Yardım Menüsü]
  $description[
    > 🐶 \`.köpek\`: Her Seferinde Farklı Köpek Resimleri Gösterir!
    > 🐱 \`.kedi\`: Her Seferinde Farklı Kedi Resimleri Gösterir!
    > 🐻 \`.ayı\`: Her Seferinde Farklı Ayı Resimleri Gösterir!
    > 🐼 \`.panda\`: Her Seferinde Farklı Panda Resimleri Gösterir!
    > 📡 \`.ping\`: $username[$clientID]'nin Anlık Pingini Gösterir!
    > 📊 \`.istatistik\`: $username[$clientID]'nin Anlık İstatistiklerini Gösterir!

    > <:blurple_guide:909357424031449118> \`.gelişmeler\`: Botun Oluşturulma Tarihinden Bu Güne Olan Bütün Gelişmeleri Gösterilen Bir Bilgilendirme Mesajıdır!
  ]
  $footer[$username;$userAvatar[$clientID]]
  $addTimestamp[1]
  $color[$replaceText[$replaceText[$getGlobalUserVar[user_premium;$authorID];no;#9b7f7f];yes;#00ff19]]
  
  $cooldown[5s;**\`kullanıcı\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}