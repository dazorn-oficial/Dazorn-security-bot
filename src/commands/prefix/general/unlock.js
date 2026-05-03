const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = { name: 'unlock', execute: async(m) => {
    if (!m.member.permissions.has(PermissionFlagsBits.ManageChannels)) return m.reply('❌ Sin permisos');
    await m.channel.permissionOverwrites.edit(m.guild.roles.everyone, { SendMessages: true });
    await m.reply({embeds:[new EmbedBuilder().setColor('Green').setTitle('🔓 Canal Desbloqueado').setDescription('Todos pueden escribir de nuevo.')]});
}};