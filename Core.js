    reply(mess.waiting)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('Please enter a seach term!')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.animewall2 ${q}`, buttonText: {displayText: `>>`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*مصطلح البحث :* ${q}`,
      footer: `${global.BotName}`,
      buttons: walb,
      headerType: 4
      }     
            await Miku.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })          
break


case 'anime': case 'انمي':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	    if(!q) return reply(`يرجى تقديم مصطلح البحث!\n\n*مثال:* ${prefix}anime naruto`)
reply(mess.waiting)							
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `*العنوان:* ${result.title}\n`;
    details += `*الشكل:* ${result.type}\n`;
    details += `*الحاله:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*مجموع الحلقات:* ${result.episodes}\n`;
    details += `*المده:* ${result.duration}\n`;
    details += `*الانواع:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `*مرتكز على:* ${result.source.toUpperCase()}\n`;
    details += `*استوديوهات:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*منتجين:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `*عرض لأول مرة في:* ${result.aired.from}\n`;
    details += `*انتهى في:* ${result.aired.to}\n`;
    details += `*شعبية:* ${result.popularity}\n`;
    details += `*المفضلة:* ${result.favorites}\n`;
    details += `*تقييم:* ${result.rating}\n`;
    details += `*مرتبه:* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
      details += `*جَرَّار:* ${result.trailer.url}\n\n`;
    details += `*عنوانurl:* ${result.url}\n\n`;
    if (result.background !== null)
      details += `*خلفيه:* ${result.background}\n\n`;
    details += `*الوصف:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
Miku.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break

case 'مانجا':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`اكتب اسم شخصيه انمي للبحث!\n\n_مثال:_ ${prefix}مانجا naruto`)
let srh = await manga.searchManga(q)
    let mang = `*Title:* ${srh.data[0].title}\n`;
    mang += `*Status:* ${srh.data[0].status}\n`;
    mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
    mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
    mang += `*Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
    }
    mang += `*Published on:* ${srh.data[0].published.from}\n`;
    mang += `*Score:* ${srh.data[0].scored}\n`;
    mang += `*Popularity:* ${srh.data[0].popularity}\n`;
    mang += `*Favorites:* ${srh.data[0].favorites}\n`;
    mang += `*Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
    }
    mang += `\n*URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `*Background:* ${srh.data[0].background}`;
    mang += `*Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
Miku.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break



case 'وايفي' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `.وايفي`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let button4Messagess = {
        image: {url:waifuddd.data.url},
        caption: 'أكثر من وايفي سوف يدمر لايفو الخاص بك بالتأكيد!',
        buttons: wbuttsssr,
        headerType: 4
         }     
                                  
    await Miku.sendMessage(m.chat, button4Messagess, { quoted:m }).catch(err => {
        return('error..')
        })
break

case 'نيكو' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `.نيكو`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessf = {
        image: {url:waifuddd.data.url},
        caption: 'اي خدمه يروحي🌚❤️...',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Miku.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'لولي' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `.لولي`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'لا تكن لولي كون!',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Miku.sendMessage(m.chat, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'lyrics': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
reply(mess.waiting)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break


case "quotes":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Quotes()
teks = `\n*Author:* ${res.author}\n`
teks += `\n*Quotes:*\n`
teks += `${res.quotes}\n`

replay(teks)
break

case "darkjoke":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Darkjokes()
teks = "\nDarkjokes"
Miku.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break

case 'leavegc': case 'leavegroup': case 'bye': case 'اخرج': case 'غادر': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply(mess.waiting)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await Miku.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break


case 'bc': case 'شير': case 'bcall': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args.join(" ")) return replay(`الرجاء إدخال نص للبث! \n\nمثال : ${prefix + command} ${global.OwnerName}`)
let anu = await store.chats.all().map(v => v.id)
replay(`إرسال البث إلى ${anu.length} شات\nانتهى الوقت ${anu.length * 1.5} ثواني`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
quickReplyButton: {
displayText: 'القائمه✨',
id: '.menu'
}  
}, {
quickReplyButton: {
displayText: 'مطور البوت👤',
id: '.owner'
}
}]
let txt = `「 *${global.OwnerName}' شير للكل* 」\n\n${text}`
Miku.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
}
replay('تم ارسال البث بنجاح !')
}
break    


case 'help': case 'القائمه': case 'menu': case 'مساعده': case 'الاوامر':case 'اوامر':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `مرحبا *${pushname}*,

انا *❤️BOT - ELGAZAR❤️️*, 
تم تطويري بواسطة *ELGAZAR ALWAZER❤*.

♠️ البادئة الخاصة بي هي:  ${prefix}
 
*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋🔰┋ الاعضاء ⋌⌬*

*˼‏✧˹↫: .بروفايل╎🪪」*
*↲ 〖معرفة معلوماتك〗* 
 
*˼‏✧˹↫: .الدعم╎☎️」*
*↲ 〖رابط جروب البوت للمساعدة〗*

*˼‏✧˹↫: .المطور╎🧑‍💻」*
*↲ 〖يجلب لك رقم مطور البوت〗* 
 
*˼‏✧˹↫: .انطق╎🗣️」*
*↲ 〖اكتب اي شي والبوت يقوله في مقطع〗*

*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋👤┋ المطور ⋌⌬*

*˼‏✧˹↫: .عام╎🤳」*
*↲ 〖يجعل البوت عام للجميع〗*
 
*˼‏✧˹↫: .خاص╎📱」*
*↲ 〖يجعل البوت خاص للمالك فقط〗*
 
*˼‏✧˹↫: .حظر╎🚫」*
*↲ 〖حظر شخص من استخدام البوت 〗*
 
*˼‏✧˹↫: .بان╎❗」*
*↲ 〖حظر اي جروب من استخدام البوت〗* 

*˼‏✧˹↫: .غادر╎🚶🏻‍♂️」*
*↲ 〖مغادره البوت من الجروب〗*  
 
*˼‏✧˹↫: .انضم╎➕」*
*↲ 〖ينضم البوت لجروب عن طريق الرابط〗*
 
*˼‏✧˹↫: .بلوك╎📵」*
*↲ 〖عمل بلوك لشخص من البوت〗* 


 *˼‏✧˹↫: .فك-البلوك╎💯」*
*↲ 〖الغاء البلوك عن الشخص من البوت〗* 

*˼‏✧˹↫: .شير╎📢」*
*↲ 〖عمل شير لكل الجروبات في البوت〗* 

*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋🛡️┋ الـجـروب ⋌⌬*

*˼‏✧˹↫: .منشن╎📧」*
*↲ 〖منشن جماعي لكل الاعضاء〗* 

*˼‏✧˹↫: .مخفي╎👽」*
*↲ 〖منشن مخفي لكل الاعضاء〗*  

*˼‏✧˹↫: .المتصلين╎💬」*
*↲ 〖يجيب لك الاعضاء المتصله〗* 
 
*˼‏✧˹↫: .حذف╎🗑️」*
*↲ 〖حذف رسالة البوت والاعضاء〗* 
 
*˼‏✧˹↫: .لينك╎🪀」*
*↲ 〖جلب رابط الجروب〗*  

*˼‏✧˹↫: .رستر╎♻️」*
*↲ 〖رستارت لرابط الجروب〗*  
 
*˼‏✧˹↫: .رفع╎↖️」*
*↲ 〖رفع عضو لمشرف〗*  
 
*˼‏✧˹↫: .تنزيل╎↙️」*
*↲ 〖تنزيل عضو من المشرف〗*  

*˼‏✧˹↫: .تغيرالاسم╎📝」*
*↲ 〖تغيير اسم الجروب〗*  
 
*˼‏✧˹↫: .تغيرالبايو╎📝」*
*↲ 〖تغيير وصف الجروب〗*  

*˼‏✧˹↫: .تغيرالصوره╎📸」*
*↲ 〖تغيير صورة الجروب〗*  

*˼‏✧˹↫: .جروب╎🛋️」*
*↲ 〖غلق وفتح الجروب〗*  
 
*˼‏✧˹↫: .طرد╎🚸」*
*↲ 〖طرد شخص من الجروب〗*  
 
*˼‏✧˹↫: .اضافه╎➕」*
*↲ 〖اضافه شخص للجروب〗* 

*˼‏✧˹↫: .الروابط╎⚠️」*
*↲ 〖منع ارسال الروابط في الجروب〗*  

*˼‏✧˹↫: .اعدادات╎⚙️」*
*↲ 〖جلب معلومات التحكم بالجروب〗* 

*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋🔍┋ البحث ⋌⌬*

*˼‏✧˹↫: .شغل╎🖥️」*
*↲ 〖التنزيل من يوتيوب〗*  

*˼‏✧˹↫: .تشغيل╎🖥️」*
*↲ 〖سيرفر اخر للتنزيل من يوتيوب〗*
 
*˼‏✧˹↫: .فيلم╎🎥」*
*↲ 〖البحث عن معلومات فلم〗* 
 
*˼‏✧˹↫: .انمي╎🖼️」*
*↲ 〖البحث عن خلفية انمي〗*  
 
*˼‏✧˹↫: .صوره╎🖼️」*
*↲ 〖البحث عن صور في جوجل〗*  

*˼‏✧˹↫: .طقم╎👫」*
*↲ 〖جلب تطقيمات〗*  
 
*˼‏✧˹↫: .بحث╎🔍」*
*↲ 〖بحث في اليوتيوب بالرابط〗* 
 
*˼‏✧˹↫: .ويكيديا╎🖼️」*
*↲ 〖بحث في ويكيديا 〗*
 
*˼‏✧˹↫: .هابي╎😈」*
*↲ 〖تنزيل من هابي مود〗*
 
*˼‏✧˹↫: .جوجل╎📠」*
*↲ 〖البحث في جوجل〗*  

*˼‏✧˹↫: .تخمين╎⏱️」*
*↲ 〖تخمين ارقام واتساب〗*  

*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋🎆┋ الـتـحـويـل ⋌⌬*

*˼‏✧˹↫: .مـلـصـق╎🎴」*
*↲ 〖انشاء ملصقات عادية ومتحركة〗*  
 
*˼‏✧˹↫: .سرقه╎📧」*
*↲ 〖انشاء ملصق بحقوقك〗*  
 
*˼‏✧˹↫: .دمج╎🤯」*
*↲ 〖دمج اثنين من الاموجي〗*  

*˼‏✧˹↫: .ايموجي╎🥺」*
*↲ 〖يحول الايموجي لصوره〗* 

*˼‏✧˹↫: .لصوره╎🃏」*
*↲ 〖تحويل ملصق عادي لصورة〗*  
 
*˼‏✧˹↫: .لفيديو╎🎥」*
*↲ 〖تحويل ملصق متحرك لفيديو〗*  
 
*˼‏✧˹↫: .لصوتي╎🎶」*
*↲ 〖تحويل الفيديو لصوتي〗*  
 
*˼‏✧˹↫: .لملف╎♻️」*
*↲ 〖تحويل الفيديو لملف صوتي〗*
 
*˼‏✧˹↫: .لمتحرك╎♻️」*
*↲ 〖تحويل ملصق لصوره متحركه〗* 

*˼‏✧˹↫: .تليجراف╎📠」*
*↲ 〖رفع الصور تليجراف〗*
 
*˼‏✧˹↫: .اكتب╎📝」*
*↲ 〖الكتابه علي الملصق بالانقلش〗* 

*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋🔊┋ تغير الصوت ⋌⌬*

*˼‏✧˹↫: .دبه╎🔊」*
*↲ 〖عمل دبه لصوت الاغنيه〗* 

*˼‏✧˹↫: .ضوضاء╎🤯」*
*↲ 〖عمل ضوضاء لصوت الاغنيه〗* 
 
*˼‏✧˹↫: .بطئ╎⏳」*
*↲ 〖عمل تبطئ لصوت الاغنيه〗* 
 
*˼‏✧˹↫: .بطئ2╎⏳」*
*↲ 〖عمل تبطئ لصوت الاغنيه〗* 

*˼‏✧˹↫: .سريع╎⌛」*
*↲ 〖عمل تسريع لصوت الاغنيه〗* 
 
*˼‏✧˹↫: .طفل╎👶🏻」*
*↲ 〖عمل الاغنيه بصوت طفل〗* 
 
*˼‏✧˹↫: .عكس╎🔄」*
*↲ 〖عمل عكس لاغنيه〗*  

*˼‏✧˹↫: .روبوت╎🤖」*
*↲ 〖عمل الاغنيه بصوت روبوت〗*  

*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋📍┋ الانمي ⋌⌬*

*˼‏✧˹↫: .وايفي╎🖼️」*
*↲ 〖صوره عشوائيه لـ وايفي〗* 

*˼‏✧˹↫: .لولي╎🖼️」*
*↲ 〖صوره عشوائيه لـ لولي〗* 
 
*˼‏✧˹↫: .نيكو╎🖼️」*
*↲ 〖صوره عشوائيه لـ نيكو〗* 
 
*˼‏✧˹↫: .فيد╎🖼️」*
*↲ 〖صوره عشوائيه لـ فيد〗* 

*˼‏✧˹↫: .ويلبر╎🖼️」*
*↲ 〖صوره عشوائيه لـ ويلبر〗* 
 
*˼‏✧˹↫: .قهوه╎☕」*
*↲ 〖صوره عشوائيه لـ قهوه〗* 
 
*˼‏✧˹↫: .وايفي2╎🖼️」*
*↲ 〖صوره عشوائيه لـ وايفي〗* 

*˼‏✧˹↫: .نيكو2╎🖼️」*
*↲ 〖صوره عشوائيه لـ نيكو〗* 
 
 *˼‏✧˹↫: .نوم╎🖼️」*
*↲ 〖صوره عشوائيه لـ نوم〗* 
 
*˼‏✧˹↫: .مانجا╎🖼️」*
*↲ 〖صوره عشوائيه لـ مانجا〗* 

*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋🌐┋ التنزيل ⋌⌬*

*˼‏✧˹↫: .ميديافاير╎📧」*
*↲ 〖التنزيل من ميديا فاير〗* 
 
*˼‏✧˹↫: .انستجرام╎📲」*
*↲ 〖التنزيل من انستجرام〗* 
 
*˼‏✧˹↫: .فيسبوك╎📲」*
*↲ 〖التنزيل من فيسبوك〗* 
 
*˼‏✧˹↫: .تويتر╎📲」*
*↲ 〖التنزيل من تويتر〗*  

*˼‏✧˹↫: .تيكتوك╎📲」*
*↲ 〖التنزيل من تيك توك〗*  

*═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋☃️┋ الـتـسـلـيـة ⋌⌬*

*˼‏✧˹↫: .زواج╎👫」*
*↲ 〖يزوج اثنين عشوائي من الاعضاء〗* 

*˼‏✧˹↫: .طلاق╎🙍🏻‍♂️」*
*↲ 〖يطلق اثنين عشوائي من الاعضاء〗* 
 
*˼‏✧˹↫: .المستوي╎🎚️」*
*↲ 〖يرفع مستوي الاعضاء〗* 
 
*˼‏✧˹↫: .رفيق╎🫂」*
*↲ 〖البوت يجيب لك رفيق عشوائي〗* 

*˼‏✧˹↫: .فراق╎💔 」*
*↲ 〖يتم فراقك من رفيق〗* 

*˼‏✧˹↫: .الحب╎🫂」*
*↲ 〖نسبه حب الشخص لك〗*

*˼‏✧˹↫: .الكره╎💔」*
*↲ 〖نسبه كره الشخص لك〗*

*˼‏✧˹↫: .الجمال╎🌚」*
*↲ 〖نسبه جمال الشخص〗* 

*˼‏✧˹↫: .شخصيتك╎📇」*
*↲ 〖البوت يعرفك شخصيه الشخص〗* 
 
*˼‏✧˹↫: .عكس╎🔄」*
*↲ 〖عكس كلمة او جملة〗*  

*˼‏✧˹↫: .حساب╎🔣」*
*↲ 〖حساب الارقام〗*

*˼‏✧˹↫: .اختفاء╎🛌」*
*↲ 〖اترك سبب ذهابك〗* 

*˼‏✧˹↫: .لو╎🧙‍♂️」*
*↲ 〖اسأله لو خيروك〗*

*˼‏✧˹↫: .صراحه╎🎋」*
*↲ 〖اسأله صراحه〗*

 *═════⊹⊱≼🤖≽⊰⊹═════*
*⌬⋋ قـائـمـة┋💎┋ الشكر ⋌⌬*

🍁 شكرا لك علي دعمي واستخدام البوت الخاص بي

🍁 اكتب:  ${prefix} قبل كل امر ليعمل معك البوت



 『  *${global.BotName}*  』
 *تم التطوير بواسطه:اعبدالله محمد*
`


    let buttonshelpm = [

    {buttonId: `.owner`, buttonText: {displayText: 'مطور البوت 👤'}, type: 1},

    {buttonId: `.support`, buttonText: {displayText: 'الدعم 🌺'}, type: 1},

    {buttonId: `.profile`, buttonText: {displayText: 'بروفايلي 🚶'}, type: 1}
    ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/miku2.mp4'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break
 

case '':
    if(isCmd){
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

      mikupic ='https://telegra.ph/file/f1a719ad79f830231d984.jpg'
    
        
 const needhelpmenu = `*✺❯╼╾╼╾╼╾ ╭╰ مرحبا بك في بوت الجزار 🤖 ╯╮ ╼╾╼╾╼╾❮✺*

*┏═───═⊱⬩⊰『 لظهور قائمه الاوامر اكتب .الاوامر او اضغط علي القائمه 』⊱⬩⊰═───═┓*


*⋋📜┋ 𓆩 لا تنسي وضع*${prefix} قبل كل امر* 𓆪 ┋📜⋌*


*═════⊹⊱≼🤖≽⊰⊹═════*`
     
         let butRun = [
                {buttonId: `.help`, buttonText: {displayText: 'القائمه✨'}, type: 1}
                ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,
                    caption: needhelpmenu,
                    footer: `${global.BotName}`,
                    buttons: butRun,
                    headerType: 4
                }
            Miku.sendMessage(m.chat,buttonMessage,{quoted:m})
                }
break



case 'alive': case 'بوت': case 'جزار':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

const txt = `❄️ مرحــبـا بـك عـزيـزي انــــا مـتـصـل الـان❤،


'❄️ كـيــف يـمـكـنـنـي مـسـاعـدتـك❤،


'❄️ شـكـرا لــك لـاسـتـخـدامـك❤،
'❤️BOT - ELGAZAR❤`
const mikuarray= [
            "https://c.tenor.com/SOeIW-QVZvoAAAPo/scared-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/FDe7lTs0xvMAAAPo/miku-nakano-nakano-miku.mp4",
            "https://c.tenor.com/IWKYIP6AMIgAAAPo/miku-nakano-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/qE3H_Ae_jTQAAAPo/miku-nakano-nakano.mp4",
            "https://c.tenor.com/9ijVngbm_ZMAAAPo/itsuki-nakano-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/Fz9xGVR_FHAAAAPo/miku-nakano-nakano-miku.mp4",
            "https://c.tenor.com/ALV6SZoJZb8AAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/QHefpWiqvN4AAAPo/blush-anime.mp4",
            "https://c.tenor.com/NJVFjOYEcsIAAAPo/miku-gotoubun.mp4",
            "https://c.tenor.com/DA88NW5x_0wAAAPo/miku-nakano-stare.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/miku-nakano.mp4",
            "https://c.tenor.com/V9XEKQYRwrEAAAPo/miku-nakano-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/GDH4WFhELpAAAAPo/anime-pout.mp4",
            "https://c.tenor.com/ME0cvLQiW0kAAAPo/nakano-miku-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/d5pE_0GJUf0AAAPo/miku-nakano.mp4",
            "https://c.tenor.com/zNTH_-ks3GEAAAPo/miku-nakano.mp4",
            "https://c.tenor.com/pCgBkgDBbnIAAAPo/nakano-miku-go-toubun-no-hanayome.mp4",
            "https://c.tenor.com/6GTU3JEtpKoAAAPo/miku-nakano-the-quintessential-quintuplets.mp4",
            "https://c.tenor.com/XNbmenhVucMAAAPo/5toubun-no-hanayome-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/lyMqrhEK4scAAAPo/%EC%98%A4%EB%93%B1%EB%B6%84-5%EB%93%B1%EB%B6%84.mp4",
            "https://c.tenor.com/vQ9TpmdjfWAAAAPo/cuteness-overload.mp4",
            "https://c.tenor.com/PHngM6-NJVwAAAPo/miku-quintessential.mp4",
            "https://c.tenor.com/yniTgeiOo4gAAAPo/miku-nakano.mp4",
            "https://c.tenor.com/AULffc4ZKFIAAAPo/miku-god-miku.mp4",
            "https://c.tenor.com/Y8Y1GbmQSOIAAAPo/miku-nakano-quintessential-quintuplets.mp4",
            "https://c.tenor.com/m0EjrelpOfkAAAPo/miku-nakano-nakano-miku.mp4",
            "https://c.tenor.com/x6RTarQTMzoAAAPo/miku-nakano.mp4",
            "https://c.tenor.com/hUzZGMltInkAAAPo/gotoubun-corada.mp4",
            "https://c.tenor.com/9-7azOBpr84AAAPo/miku-nakano-and-i-love-you.mp4",
            "https://c.tenor.com/Ed5IC_yxZkoAAAPo/miku-nakano-gotoubun-no-hanayome.mp4",
            "https://c.tenor.com/hDKieuZGiU0AAAPo/miku-nakano.mp4",
            "https://c.tenor.com/WD8L3QLO024AAAPo/whaatt-the-quintessential-quintuplets.mp4"
            
            ]
        
            const mikuselection = mikuarray[Math.floor(Math.random()*mikuarray.length)]
        
            Miku.sendMessage(from,{video:{url:mikuselection},gifPlayback:true,caption:txt},{quoted:m})

break

case 'add': case 'اضافه':{     			
    if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return replay(`يرجى كتابة رقم الشخص الذي تريد إضافته إلى هذه المجموعة`)
  await Miku.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`تمت إضافة المستخدم بنجاح!`)).catch((err) => replay(`لا يمكن إضافة هذا المستخدم إلى هذه المجموعة!`))
 }
 break


 case "tts":  case "انطق":  case "قول": case "speak":{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("من فضلك اكتب اي شئ و سوف انطقه!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "ar", slow: false, host: "https://translate.google.com",});
      Miku.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `MikuSpeechEngine.mp3`,},{quoted: m,});
    }
    break


    case 'qr': case 'باركود':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        if (!m.isGroup) return replay(mess.grouponly)
    reply(`جاري إعادة التشغيل .... يرجى الانتظار حتى يستجيب Rep.it ...`)						
    var replqr =  await getBuffer(`https://bot-elgazar-qr--bm077197.repl.co/`)
                               var qrbutton = [
            {buttonId: `.qr`, buttonText: {displayText: `باركود جديد`}, type: 1}
            ]
          let bmffg = {
           image: replqr,
           caption:  `امسح الباركود خلال 10-15 ثانية ...`,
          footer: `${global.BotName}`,
          buttons: qrbutton,
          headerType: 4
          }     
                await Miku.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                        return('Error!')
                    })
    break



default:

    if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply (`لا يوجد امر مبرمج مثل هذا *${pushname}* اكتب *${prefix}الاوامر* للحصول على قائمة الأوامر الكاملة الخاصة بي!`)

    }	 			


if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
Miku.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await Miku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}


                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return Miku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}


if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Miku.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
Miku.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
