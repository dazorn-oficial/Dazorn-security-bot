const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder().setName('unlock').setDescription('Desbloquea el canal').setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.ManageChannels)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        await i.channel.permissionOverwrites.edit(i.guild.roles.everyone, { SendMessages: true });
        await i.reply({embeds:[new EmbedBuilder().setColor('Green').setTitle('🔓 Canal Desbloqueado').setDescription('Todos pueden escribir de nuevo.')]});
    }
};