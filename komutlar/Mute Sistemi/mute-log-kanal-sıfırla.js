module.exports = {
  name: "mute-log-kanal-sıfırla",
  code: `

  
  $if[$hasPerms[$authorID;admin]==false]
  <:blurple_cross:909357547083935744> **$username[$authorID]** Sen Bu Komutu Kullanamazsın Kullanabilmek İçin Sunucuda Yönetici Yetkisine Sahip Olmalısın! Eğer Ne Olduğunu Bilmiyorsan: (Site Linki)
  $else

  <:blurple_check:909357695566495785> Mute Log Kanalı Başarılı Bir Şekilde Sıfırlandı!

  $setServerVar[mute_log_channel;Ayarlanmadı;$guildID]

  $endif
  $cooldown[5s;**\`mute-log-kanal-sıfırla\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}