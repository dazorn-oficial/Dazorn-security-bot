const fs = require('fs');
const p = require('path').join(__dirname, '../data/config.json');
function getC() { try { if(!fs.existsSync(p)) fs.writeFileSync(p,'{}'); return JSON.parse(fs.readFileSync(p)); } catch(e) { return {}; } }
function saveC(d) { fs.writeFileSync(p, JSON.stringify(d, null, 4)); }
module.exports = {
    getConfig: (gId) => { let d = getC(); if(!d[gId]) {d[gId]={antilink:false, antispam:false}; saveC(d);} return d[gId]; },
    setConfig: (gId, key, val) => { let d = getC(); if(!d[gId]) d[gId]={antilink:false, antispam:false}; d[gId][key] = val; saveC(d); }
};