module.exports = {
  name: "mute-rol-sıfırla",
  code: `

  
  $if[$hasPerms[$authorID;admin]==false]
  <:blurple_cross:909357547083935744> **$username[$authorID]** Sen Bu Komutu Kullanamazsın Kullanabilmek İçin Sunucuda Yönetici Yetkisine Sahip Olmalısın! Eğer Ne Olduğunu Bilmiyorsan: (Site Linki)
  $else

  <:blurple_check:909357695566495785> Mute Rol Başarılı Bir Şekilde Sıfırlandı!

  $setServerVar[mute_role;Ayarlanmadı;$guildID]

  $endif
  $cooldown[5s;**\`mute-rol-sıfırla\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}