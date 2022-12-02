let handler = async (m, { conn }) => {
let caption = `––––––『 *BIODATA* 』––––––
⫹⫺ *💌 Nama* : Abdul Masuk Surga/ZansLord
⫹⫺ *✉️ Nama RL* : Abdul Malik R.N.R
⫹⫺ *♂️ Gender* : Boys
⫹⫺ *🕉 Agama* : Islam
⫹⫺ *⏰ Tanggal lahir* : Private 
⫹⫺ *🎨 Umur* : 14
⫹⫺ *🧮 Kelas* : 8
⫹⫺ *🧩 Hobby* : Baca Manga
⫹⫺ *💬 Sifat* : 𝑘𝑎𝑙𝑜 𝑑𝑎ℎ 𝑘𝑒𝑛𝑎𝑙 𝑎𝑠𝑖𝑘 𝑙ℎ 𝑝𝑜𝑘𝑜𝑘𝑛𝑦𝑎🥶
⫹⫺ *🗺️ Tinggal* : indonesia, Jabar, Bandung Selatan

⫹⫺ *📷 ɪɴsᴛᴀɢʀᴀᴍ* : https://instagram.com/black_team_indonesia
⫹⫺ *🐈 ɢɪᴛʜᴜʙ:* https://github.com/ZansLord
•·––––––––––––––––––––––––––·•
`
conn.sendButtonDoc(m.chat, caption, author, 'Menu', `#menu`, fgif, adReply)
}
handler.help = ['biodata']
handler.tags = ['info']
handler.command = /^(biodata|arif|bioowner)$/i

export default handler
