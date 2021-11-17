module.exports = {
  name: "gelişmeler",
  code: `
  
  $author[$username[$clientID];$userAvatar[$clientID]]
  $title[Gelişmeler Menüsü]
  $description[
    > ***Tarih***: \`14.11.2021\`
    \`.köpek\`, \`.kedi\`, \`.ayı\`, \`.panda\`, \`.ping\`, \`.istatistik\`, \`.gelişmeler\`, \`.kullanıcı\`, \`.sistemler\`, \`.mute-sistemi\`, \`.otorol-sistemi\`, \`.sayaç-sistemi\`, \`.jail-sistemi\`, \`.kick-sistemi\`, \`.ban-sistemi\`, \`.abone-rol-sistemi\`, \`.link-engel-sistemi\`, \`.küfür-engel-sistemi\`, \`.napim-engel-sistemi\`, \`.toxik-engel-sistemi\`, \`.kayıt-sistemi\`, \`.ek-kayıt-sistemi\`, \`.ek-tag-kayıt-sistemi\`, \`.ototag-sistemi\`, \`.tag-rol-sistemi\`

    Komutları Eklenmiştir!

  ]
  $footer[Düzenleyen $username[761945664447840256];$userAvatar[761945664447840256]]
  $addTimestamp
  $color[$replaceText[$replaceText[$getGlobalUserVar[user_premium;$authorID];no;#9b7f7f];yes;#00ff19]]
  
  $cooldown[5s;**\`gelişmeler\`** Komutunu Tekrardan Kullanabilmek İçin ***5*** Saniye Beklemelisin!]

  `
}