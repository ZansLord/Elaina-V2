let handler = async (m, { conn }) => {
let caption = `––––––『 *BIODATA* 』––––––
⫹⫺ *💌 Nama* : 𝑅𝑖𝑒𝑙𝑙𝑋𝑑
⫹⫺ *✉️ Nama RL* : 𝐸𝐿𝐿 𝑐𝑜𝑜𝑙 𝑏𝑒𝑡
⫹⫺ *♂️ Gender* : Boys
⫹⫺ *🕉 Agama* : 𝑰𝒔𝒍𝒂𝒎
⫹⫺ *⏰ Tanggal lahir* : Private 
⫹⫺ *🎨 Umur* : 16
⫹⫺ *🧮 Kelas* : 10
⫹⫺ *🧩 Hobby* : 𝑁𝑜𝑛𝑡𝑜𝑛 𝑡𝑖𝑘𝑡𝑜𝑘,𝑚𝑎𝑘𝑎𝑛,𝑡𝑖𝑑𝑢𝑟,𝑟𝑒𝑐𝑜𝑑𝑒 𝑠𝑐,𝑚𝑜𝑑𝑖𝑓𝑖𝑘𝑎𝑠𝑖 𝑝𝑒𝑟𝑎𝑛𝑔𝑘𝑎𝑡 𝑙𝑢𝑛𝑎𝑘
⫹⫺ *💬 Sifat* : 𝑘𝑎𝑙𝑜 𝑑𝑎ℎ 𝑘𝑒𝑛𝑎𝑙 𝑎𝑠𝑖𝑘 𝑙ℎ 𝑝𝑜𝑘𝑜𝑘𝑛𝑦𝑎🥶
⫹⫺ *🗺️ Tinggal* : 𝑖𝑛𝑑𝑜, 𝑘𝑎𝑙𝑡𝑖𝑚, 𝑡𝑒𝑛𝑔𝑔𝑎𝑟𝑜𝑛𝑔

⫹⫺ *📷 ɪɴsᴛᴀɢʀᴀᴍ* : https://instagram.com/riellxd_04_
⫹⫺ *🐈 ɢɪᴛʜᴜʙ:* https://github.com/abilbotz1
•·––––––––––––––––––––––––––·•
`
conn.sendButtonDoc(m.chat, caption, author, 'Menu', `#menu`, fgif, adReply)
}
handler.help = ['biodata']
handler.tags = ['info']
handler.command = /^(biodata|arif|bioowner)$/i

export default handler
