const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = { name: 'lock', execute: async(m) => {
    if (!m.member.permissions.has(PermissionFlagsBits.ManageChannels)) return m.reply('❌ Sin permisos');
    await m.channel.permissionOverwrites.edit(m.guild.roles.everyone, { SendMessages: false });
    await m.reply({embeds:[new EmbedBuilder().setColor('Red').setTitle('🔒 Canal Bloqueado').setDescription('Nadie puede escribir en este canal ahora.')]});
}};