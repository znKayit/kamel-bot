module.exports = {
  name: "mute-rol-ayarla",
  code: `

  
  $if[$hasPerms[$authorID;admin]==false]
  <:blurple_cross:909357547083935744> **$username[$authorID]** Sen Bu Komutu Kullanamazsın Kullanabilmek İçin Sunucuda Yönetici Yetkisine Sahip Olmalısın! Eğer Ne Olduğunu Bilmiyorsan: (Site Linki)
  $else

  $if[$mentionedRoles[1]==]
  <:blurple_cross:909357547083935744> ***$username[$authorID]*** Lütfen Mute Rolü Olarak Ayarlamak İstediğiniz Rolü Etikeyleyiniz! Eğer Nasıl Olduğunu Bilmiyorsan: (Site Linki)
  $else

  <:blurple_check:909357695566495785> Etiketlemiş Olduğunuz Mute Rolü Başarılı Bir Şekilde Ayarlanmıştır!

  $setServerVar[mute_role;$mentionedRoles[1];$guildID]

  $endif
  $endif
  $cooldown[5s;**\`mute-rol-ayarla\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}