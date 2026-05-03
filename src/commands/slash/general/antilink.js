const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js'); const db = require('../../../utils/db');
module.exports = {
    data: new SlashCommandBuilder().setName('antilink').setDescription('Activa/Desactiva Antilink').setDefaultMemberPermissions(PermissionFlagsBits.Administrator).addBooleanOption(o=>o.setName('estado').setDescription('On/Off').setRequired(true)),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.Administrator)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        const e = i.options.getBoolean('estado');
        db.setConfig(i.guild.id, 'antilink', e);
        await i.reply({embeds:[new EmbedBuilder().setColor(e?'Green':'Red').setTitle('🛡️ Antilink').setDescription(`El antilink ahora está: **${e?'ACTIVADO':'DESACTIVADO'}**`)]});
    }
};