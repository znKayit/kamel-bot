module.exports = {
    name: "jail-log-kanal-ayarla",
    code: `
  
    
    $if[$hasPerms[$authorID;admin]==false]
    <:blurple_cross:909357547083935744> **$username[$authorID]** Sen Bu Komutu Kullanamazsın Kullanabilmek İçin Sunucuda Yönetici Yetkisine Sahip Olmalısın! Eğer Ne Olduğunu Bilmiyorsan: (Site Linki)
    $else
  
    $if[$mentionedChannels[1]==]
    <:blurple_cross:909357547083935744> ***$username[$authorID]*** Lütfen Jail Log Kanalını Ayarlamak İçin Bir Kanal Etiketleyin! Eğer Nasıl Olduğunu Bilmiyorsan: (Site Linki)
    $else
  
    <:blurple_check:909357695566495785> Etiketlemiş Olduğunuz Jail Log Kanalını Başarılı Bir Şekilde Ayarlanmıştır!
  
    $setServerVar[jail_log_channel;$mentionedChannels[1];$guildID]
  
    $endif
    $endif
    $cooldown[5s;**\`jail-log-kanal-ayarla\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]
  
    `
  }