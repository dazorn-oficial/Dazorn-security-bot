const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder().setName('lock').setDescription('Bloquea el canal').setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.ManageChannels)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        await i.channel.permissionOverwrites.edit(i.guild.roles.everyone, { SendMessages: false });
        await i.reply({embeds:[new EmbedBuilder().setColor('Red').setTitle('🔒 Canal Bloqueado').setDescription('Nadie puede escribir en este canal ahora.')]});
    }
};