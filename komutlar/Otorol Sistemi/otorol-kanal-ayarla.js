module.exports = {
  name: "otorol-kanal-ayarla",
  code: `

  
  $if[$hasPerms[$authorID;admin]==false]
  <:blurple_cross:909357547083935744> **$username[$authorID]** Sen Bu Komutu Kullanamazsın Kullanabilmek İçin Sunucuda Yönetici Yetkisine Sahip Olmalısın! Eğer Ne Olduğunu Bilmiyorsan: (Site Linki)
  $else

  $if[$mentionedChannels[1]==]
  <:blurple_cross:909357547083935744> ***$username[$authorID]*** Lütfen Otomatik Rol Kanalını Ayarlamak İçin Bir Kanal Etiketleyin! Eğer Nasıl Olduğunu Bilmiyorsan: (Site Linki)
  $else

  <:blurple_check:909357695566495785> Etiketlemiş Olduğunuz Otomatik Rol Kanalını Başarılı Bir Şekilde Ayarlanmıştır!

  $setServerVar[autorole_channel;$mentionedChannels[1];$guildID]

  $endif
  $endif
  $cooldown[5s;**\`otorol-kanal-ayarla\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}