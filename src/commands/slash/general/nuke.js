const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder().setName('nuke').setDescription('Borra y clona el canal (limpieza extrema)').setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(i) {
        if (!i.member.permissions.has(PermissionFlagsBits.Administrator)) return i.reply({content:'❌ Sin permisos', ephemeral:true});
        const c = i.channel; const pos = c.position;
        const newC = await c.clone(); await newC.setPosition(pos); await c.delete();
        await newC.send('☢️ Canal Nukeado (Restaurado desde cero).');
    }
};