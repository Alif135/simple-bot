/*
  * Sript By Thadz BotZ
  * Contact : wa.me/6288232991394
  * Library : @adiwajshing/baileys-md
*/
global.ownerNumber = '6281315017916@s.whatsapp.net';
global.ownerName = 'Khalif';
global.botName = 'Khalif BOTZ';
global.vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN:Thadz BotZ\n'
+ 'TEL;type=CELL;type=VOICE;waid=6288232991394:+62 882-3299-1394\n'
+ 'END:VCARD';
global.onlyGroup = (pushname) => {
  return `*Maaf ${pushname} Perintah ini hanya dapat digunakan di group*`;
};
global.onlyAdmin = (pushname) => {
   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan oleh admin group*`;
};
global.botAdmin = (pushname) => {
   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan ketika bot menjadi admin*`;
};
global.notText = (prefix, cmd, pushname) => {
   return `*Maaf ${pushname}*

_Parameter text belum dimasukan_
ex: ${prefix + cmd} yourtext `;
};
global.help = (list, prefix, pushname) => {
	return `Halo ${pushname}

*⛦ Maker menu*
${list} ${prefix}sticker
${list} ${prefix}sgif

*⛦ Wallpaper menu*
${list} ${prefix}wpml

*⛦ Group menu*
${list} ${prefix}group open/close
${list} ${prefix}editinfogroup admin/all
${list} ${prefix}hidetag
${list} ${prefix}add
${list} ${prefix}kick
${list} ${prefix}promote
${list} ${prefix}demote
${list} ${prefix}resetlink
${list} ${prefix}linkgroup
${list} ${prefix}setname
${list} ${prefix}setdesc`;
};
global.donate = () => {
	return `•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•

*[Smartfren]* 0882-3299-1394
*[Gopay]* 0882-3299-1394

•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•`;
};
