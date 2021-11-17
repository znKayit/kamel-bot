module.exports = {
    name: "unjail",
    code: `
  
    $if[$rolePosition[$highestRole[$clientID]]>$rolePosition[$highestServerRole]]
    <:blurple_cross:909357547083935744> ***$username[$clientID]***'nin Rolü Sunucunun En Üstünde Olmalıdır!
    $else
  
  
    $if[$getServerVar[jail_log_channel;$guildID]==Ayarlanmadı]
    <:blurple_cross:909357547083935744> **\`Jailail Log Kanalı\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
    $else
  
    $if[$getServerVar[jail_yetkili_role;$guildID]==Ayarlanmadı]
    <:blurple_cross:909357547083935744> **\`Jail Yetkili Rolü\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
    $else
  
    $if[$getServerVar[jail_role;$guildID]==Ayarlanmadı]
    <:blurple_cross:909357547083935744> **\`Jail Rolü\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
    $else
  
    $if[$serverChannelExists[$getServerVar[jail_log_channel;$guildID]]==false]
    <:blurple_cross:909357547083935744> **\`Jailail Log Kanalı\`** Sunucunuzda Bulunamadı Silinmiş Olabilir!
    $else
  
    $if[$roleExists[$getServerVar[jail_yetkili_role]]==false]
    <:blurple_cross:909357547083935744> **\`Jail Yetkili Rolü\`** Sunucunuzda Bulunamadı Silinmiş Olabilir!
    $else
  
    $if[$roleExists[$getServerVar[jail_role]]==false]
    <:blurple_cross:909357547083935744> **\`Jail Rolü\`** Sunucunuzda Bulunamadı Silinmiş Olabilir!
    $else
  
    $if[$hasRole[$authorID;$getServerVar[jail_yetkili_role;$guildID]]==false]
    <:blurple_cross:909357547083935744> **\`Jail Yetkili Rolü\`**'ne Sahip Değilsiniz!
    $else
  
    $if[$mentioned[1]==]
    <:blurple_cross:909357547083935744> **\`jail Atılacak\`** Kullanıcıyı Etiketle!
    $else
  
  
  `+  
  
  `
  $channelSendMessage[$getServerVar[jail_log_channel;$guildID];
  <:blurple_unjaild:909359627462901771> <@$mentioned[1]> Adlı Kullanıcı <@$authorID> Tarafından jaili Kaldırıldı!
  ]
  
  $takeRole[$mentioned[1];$getServerVar[jail_role;$guildID]]
  
  
  
  `
  
  +`
  
    $endif
    $endif
    $endif
    $endif
    $endif
    $endif
    $endif
    $endif
    $endif
  
    $cooldown[5s;**\`unjail\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]
  
    `
  }