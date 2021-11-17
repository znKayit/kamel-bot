module.exports = {
    name: "jail-sistemi",
    code: `
    
    $author[$username[$clientID];$userAvatar[$clientID]]
    $title[Jail Menüsü]
    $description[
        > <:blurple_settings:909360753469968404> \`.jail-yetkili-rol-ayarla\`: !
        > <:blurple_settings:909360753469968404> \`.jail-yetkili-rol-sıfırla\`: !
        > <:blurple_settings:909360753469968404> \`.jail-log-kanal-ayarla\`: !
        > <:blurple_settings:909360753469968404> \`.jail-log-kanal-sıfırla\`: !
        > <:blurple_settings:909360753469968404> \`.jail-rol-ayarla\`: !
        > <:blurple_settings:909360753469968404> \`.jail-rol-sıfırla\`: !
        > <:blurple_settings:909360753469968404> \`.jail\`: !
        > <:blurple_settings:909360753469968404> \`.unjail\`: !
  
  
      > <:blurple_guide:909357424031449118> \`.gelişmeler\`: Botun Oluşturulma Tarihinden Bu Güne Olan Bütün Gelişmeleri Gösterilen Bir Bilgilendirme Mesajıdır!
    ]
    $footer[$username;$userAvatar[$clientID]]
    $addTimestamp[1]
    $color[$replaceText[$replaceText[$getGlobalUserVar[user_premium;$authorID];no;#9b7f7f];yes;#00ff19]]
    
    $cooldown[5s;**\`jail-sistemi\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]
  
    `
  }