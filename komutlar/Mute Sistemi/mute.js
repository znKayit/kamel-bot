module.exports = {
  name: "mute",
  code: `

  $if[$rolePosition[$highestRole[$clientID]]>$rolePosition[$highestServerRole]]
  <:blurple_cross:909357547083935744> ***$username[$clientID]***'nin Rolü Sunucunun En Üstünde Olmalıdır!
  $else


  $if[$getServerVar[mute_log_channel;$guildID]==Ayarlanmadı]
  <:blurple_cross:909357547083935744> **\`Mute Log Kanalı\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
  $else

  $if[$getServerVar[mute_yetkili_role;$guildID]==Ayarlanmadı]
  <:blurple_cross:909357547083935744> **\`Mute Yetkili Rolü\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
  $else

  $if[$getServerVar[mute_role;$guildID]==Ayarlanmadı]
  <:blurple_cross:909357547083935744> **\`Mute Rolü\`** Ayarlanmadı Lütfen Ayarlanmasını İsteyiniz!
  $else

  $if[$serverChannelExists[$getServerVar[mute_log_channel;$guildID]]==false]
  <:blurple_cross:909357547083935744> **\`Mute Log Kanalı\`** Sunucunuzda Bulunamadı Silinmiş Olabilir!
  $else

  $if[$roleExists[$getServerVar[mute_yetkili_role]]==false]
  <:blurple_cross:909357547083935744> **\`Mute Yetkili Rolü\`** Sunucunuzda Bulunamadı Silinmiş Olabilir!
  $else

  $if[$roleExists[$getServerVar[mute_role]]==false]
  <:blurple_cross:909357547083935744> **\`Mute Rolü\`** Sunucunuzda Bulunamadı Silinmiş Olabilir!
  $else

  $if[$hasRole[$authorID;$getServerVar[mute_yetkili_role;$guildID]]==false]
  <:blurple_cross:909357547083935744> **\`Mute Yetkili Rolü\`**'ne Sahip Değilsiniz!
  $else

  $if[$mentioned[1]==]
  <:blurple_cross:909357547083935744> **\`Mute Atılacak\`** Kullanıcıyı Etiketle!
  $else


`+  


//-------------------------------------------------\\
`
$if[$message[2]==]
$channelSendMessage[$getServerVar[mute_log_channel;$guildID];
<:blurple_muted:909359442364096563> <@$mentioned[1]> Adlı Kullanıcı <@$authorID> Tarafından \`Belirtilmedi\` Sebebi İle Mutelendi!
]

$giveRole[$mentioned[1];$getServerVar[mute_role;$guildID]]

$else

$channelSendMessage[$getServerVar[mute_log_channel;$guildID];
<:blurple_muted:909359442364096563> <@$mentioned[1]> Adlı Kullanıcı <@$authorID> Tarafından ||\`$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10]\`|| Sebebi İle Mutelendi!
]

$giveRole[$mentioned[1];$getServerVar[mute_role]]

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

  $cooldown[5s;**\`mute\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}