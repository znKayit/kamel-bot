module.exports = {
  name: "unmute",
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

`
$channelSendMessage[$getServerVar[mute_log_channel;$guildID];
<:blurple_unmuted:909359627462901771> <@$mentioned[1]> Adlı Kullanıcı <@$authorID> Tarafından Mutesi Kaldırıldı!
]

$takeRole[$mentioned[1];$getServerVar[mute_role;$guildID]]



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

  $cooldown[5s;**\`unmute\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}