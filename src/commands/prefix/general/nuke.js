const { PermissionFlagsBits } = require('discord.js');
module.exports = { name: 'nuke', execute: async(m) => {
    if (!m.member.permissions.has(PermissionFlagsBits.Administrator)) return m.reply('❌ Sin permisos');
    const c = m.channel; const pos = c.position;
    const newC = await c.clone(); await newC.setPosition(pos); await c.delete();
    await newC.send('☢️ Canal Nukeado (Restaurado desde cero).');
}};