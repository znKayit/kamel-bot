module.exports = {
    name: "jail",
    code: `
  
    $if[$rolePosition[$highestRole[$clientID]]>$rolePosition[$highestServerRole]]
    <:blurple_cross:909357547083935744> ***$username[$clientID]***'nin Rolü Sunucunun En Üstünde Olmalıdır!
    $else
  
  
    $if[$getServerVar[jail_log_channel;$guildID]==Ayarlanmadı]
    <:blurple_cross:909357547083935744> **\`Jail Log Kanalı\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
    $else
  
    $if[$getServerVar[jail_yetkili_role;$guildID]==Ayarlanmadı]
    <:blurple_cross:909357547083935744> **\`Jail Yetkili Rolü\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
    $else
  
    $if[$getServerVar[jail_role;$guildID]==Ayarlanmadı]
    <:blurple_cross:909357547083935744> **\`Jail Rolü\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
    $else
  
    $if[$serverChannelExists[$getServerVar[jail_log_channel;$guildID]]==false]
    <:blurple_cross:909357547083935744> **\`Jail Log Kanalı\`** Sunucunuzda Bulunamadı Silinmiş Olabilir!
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
    <:blurple_cross:909357547083935744> **\`Jail Atılacak\`** Kullanıcıyı Etiketle!
    $else
  
  
  `+  
  
  
  //-------------------------------------------------\\
  `
  $if[$message[2]==]
  $channelSendMessage[$getServerVar[jail_log_channel;$guildID];
  <:blurple_jaild:909359442364096563> <@$mentioned[1]> Adlı Kullanıcı <@$authorID> Tarafından \`Belirtilmedi\` Sebebi İle jaillendi!
  ]
  
  $giveRole[$mentioned[1];$getServerVar[jail_role;$guildID]]
  
  $else
  
  $channelSendMessage[$getServerVar[jail_log_channel;$guildID];
  <:blurple_jaild:909359442364096563> <@$mentioned[1]> Adlı Kullanıcı <@$authorID> Tarafından ||\`$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10]\`|| Sebebi İle jaillendi!
  ]
  
  $giveRole[$mentioned[1];$getServerVar[jail_role]]
  
  $endif
  
  `
  //-------------------------------------------------\\
  
  
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
  
    $cooldown[5s;**\`jail\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]
  
    `
  }