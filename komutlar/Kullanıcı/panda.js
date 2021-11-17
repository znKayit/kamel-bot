module.exports = {
  name: "panda",
  code: `
  
  $author[$username[$clientID];$userAvatar[$clientID]]
  $image[$jsonRequest[https://no-api-key.com/api/v2/animals/panda;image;Api Kısa Süreli Devre Dışı Bırakılmış!]]
  $footer[$username - Panda Resimlerine Bakıyor]
  $addTimestamp
  $color[$replaceText[$replaceText[$getGlobalUserVar[user_premium;$authorID];no;#9b7f7f];yes;#00ff19]]

  $cooldown[5s;**\`panda\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}

//https://api.no-api-key.com/api/v2/delete?image=