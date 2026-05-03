const { EmbedBuilder, PermissionFlagsBits } = require('discord.js'); const db = require('../../../utils/db');
module.exports = { name: 'antilink', execute: async(m, a) => {
    if (!m.member.permissions.has(PermissionFlagsBits.Administrator)) return m.reply('❌ Sin permisos');
    const e = a[0] === 'on' || a[0] === 'true';
    db.setConfig(m.guild.id, 'antilink', e);
    await m.reply({embeds:[new EmbedBuilder().setColor(e?'Green':'Red').setTitle('🛡️ Antilink').setDescription(`El antilink ahora está: **${e?'ACTIVADO':'DESACTIVADO'}**`)]});
}};