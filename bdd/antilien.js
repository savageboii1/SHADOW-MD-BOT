const a3_0x3f2ff6=a3_0x142e;(function(_0xef73d1,_0x7821f7){const _0x22f9fe=a3_0x142e,_0xbd5125=_0xef73d1();while(!![]){try{const _0x9a07c9=-parseInt(_0x22f9fe(0x134))/0x1+-parseInt(_0x22f9fe(0x153))/0x2*(parseInt(_0x22f9fe(0x140))/0x3)+-parseInt(_0x22f9fe(0x144))/0x4*(parseInt(_0x22f9fe(0x150))/0x5)+-parseInt(_0x22f9fe(0x146))/0x6*(-parseInt(_0x22f9fe(0x12a))/0x7)+-parseInt(_0x22f9fe(0x133))/0x8*(parseInt(_0x22f9fe(0x12e))/0x9)+parseInt(_0x22f9fe(0x131))/0xa*(parseInt(_0x22f9fe(0x14d))/0xb)+parseInt(_0x22f9fe(0x136))/0xc;if(_0x9a07c9===_0x7821f7)break;else _0xbd5125['push'](_0xbd5125['shift']());}catch(_0x58154c){_0xbd5125['push'](_0xbd5125['shift']());}}}(a3_0x58f2,0x95688),require(a3_0x3f2ff6(0x147))[a3_0x3f2ff6(0x148)]());const {Pool}=require('pg');let s=require(a3_0x3f2ff6(0x13c));var dbUrl=s['DATABASE_URL']?s[a3_0x3f2ff6(0x151)]:a3_0x3f2ff6(0x145);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createAntilienTable(){const _0x5e2116=a3_0x3f2ff6,_0x18f06e=(function(){let _0xee8d6a=!![];return function(_0x237921,_0x5095ca){const _0x35395c=_0xee8d6a?function(){if(_0x5095ca){const _0x51f303=_0x5095ca['apply'](_0x237921,arguments);return _0x5095ca=null,_0x51f303;}}:function(){};return _0xee8d6a=![],_0x35395c;};}()),_0x207982=_0x18f06e(this,function(){const _0x1f1a8e=a3_0x142e;return _0x207982['toString']()[_0x1f1a8e(0x132)](_0x1f1a8e(0x149))[_0x1f1a8e(0x154)]()['constructor'](_0x207982)[_0x1f1a8e(0x132)](_0x1f1a8e(0x149));});_0x207982();const _0x2630b9=await pool[_0x5e2116(0x156)]();try{await _0x2630b9[_0x5e2116(0x14f)]('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20antilien\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20etat\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20action\x20text\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'),console[_0x5e2116(0x14c)](_0x5e2116(0x13b));}catch(_0x5b1816){console[_0x5e2116(0x152)](_0x5e2116(0x13e),_0x5b1816);}finally{_0x2630b9[_0x5e2116(0x12d)]();}}createAntilienTable();async function ajouterOuMettreAJourJid(_0x3827d0,_0x28e96b){const _0x589675=a3_0x3f2ff6,_0x4969d4=await pool[_0x589675(0x156)]();try{const _0x305ad4=await _0x4969d4[_0x589675(0x14f)]('SELECT\x20*\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1',[_0x3827d0]),_0x5135e1=_0x305ad4['rows'][_0x589675(0x141)]>0x0;_0x5135e1?await _0x4969d4['query'](_0x589675(0x139),[_0x28e96b,_0x3827d0]):await _0x4969d4[_0x589675(0x14f)](_0x589675(0x142),[_0x3827d0,_0x28e96b,_0x589675(0x14e)]),console[_0x589675(0x14c)](_0x589675(0x137)+_0x3827d0+_0x589675(0x14a));}catch(_0x352111){console[_0x589675(0x152)](_0x589675(0x12c),_0x352111);}finally{_0x4969d4[_0x589675(0x12d)]();}}function a3_0x142e(_0x35d5f5,_0x549406){const _0x1112cd=a3_0x58f2();return a3_0x142e=function(_0x865933,_0x184aa1){_0x865933=_0x865933-0x12a;let _0x58f2e4=_0x1112cd[_0x865933];return _0x58f2e4;},a3_0x142e(_0x35d5f5,_0x549406);};async function mettreAJourAction(_0x13fa36,_0x582276){const _0x3199f8=a3_0x3f2ff6,_0x2d5c3e=await pool['connect']();try{const _0x182cf9=await _0x2d5c3e[_0x3199f8(0x14f)](_0x3199f8(0x12b),[_0x13fa36]),_0x5dbb7f=_0x182cf9[_0x3199f8(0x13a)]['length']>0x0;_0x5dbb7f?await _0x2d5c3e[_0x3199f8(0x14f)](_0x3199f8(0x157),[_0x582276,_0x13fa36]):await _0x2d5c3e[_0x3199f8(0x14f)](_0x3199f8(0x142),[_0x13fa36,_0x3199f8(0x13f),_0x582276]),console[_0x3199f8(0x14c)](_0x3199f8(0x14b)+_0x13fa36+_0x3199f8(0x13d));}catch(_0x2da432){console[_0x3199f8(0x152)](_0x3199f8(0x155),_0x2da432);}finally{_0x2d5c3e[_0x3199f8(0x12d)]();}};async function verifierEtatJid(_0x46635a){const _0x107750=a3_0x3f2ff6,_0x5f0c9e=await pool['connect']();try{const _0x5166e8=await _0x5f0c9e[_0x107750(0x14f)]('SELECT\x20etat\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1',[_0x46635a]);if(_0x5166e8[_0x107750(0x13a)][_0x107750(0x141)]>0x0){const _0xaeca0c=_0x5166e8[_0x107750(0x13a)][0x0]['etat'];return _0xaeca0c===_0x107750(0x135);}else return![];}catch(_0x35b99b){return console['error'](_0x107750(0x12f),_0x35b99b),![];}finally{_0x5f0c9e[_0x107750(0x12d)]();}}function a3_0x58f2(){const _0x4ba864=['14642412DpQPet','JID\x20','action','UPDATE\x20antilien\x20SET\x20etat\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','rows','La\x20table\x20\x27antilien\x27\x20a\x20été\x20créée\x20avec\x20succès.','../set','\x20dans\x20la\x20table\x20\x27antilien\x27.','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27antilien\x27:','non','181503juWjhU','length','INSERT\x20INTO\x20antilien\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)','exports','4NoPNgP','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','5835738Vyynsu','dotenv','config','(((.+)+)+)+$','\x20ajouté\x20ou\x20mis\x20à\x20jour\x20avec\x20succès\x20dans\x20la\x20table\x20\x27antilien\x27.','Action\x20mise\x20à\x20jour\x20avec\x20succès\x20pour\x20le\x20JID\x20','log','688424zfsIFf','supp','query','1040605BCYXIN','DATABASE_URL','error','28gnLNFh','toString','Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27action\x20pour\x20le\x20JID\x20dans\x20la\x20table\x20\x20:','connect','UPDATE\x20antilien\x20SET\x20action\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','7iLchKk','SELECT\x20*\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20du\x20JID\x20dans\x20la\x20table\x20,','release','96687sqwxNl','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27état\x20du\x20JID\x20dans\x20la\x20table\x20','SELECT\x20action\x20FROM\x20antilien\x20WHERE\x20jid\x20=\x20$1','10GYvsFh','search','344glpqmQ','126348kBjRdi','oui'];a3_0x58f2=function(){return _0x4ba864;};return a3_0x58f2();};async function recupererActionJid(_0x370695){const _0x1f7b07=a3_0x3f2ff6,_0x523288=await pool[_0x1f7b07(0x156)]();try{const _0x4c64ab=await _0x523288[_0x1f7b07(0x14f)](_0x1f7b07(0x130),[_0x370695]);if(_0x4c64ab['rows'][_0x1f7b07(0x141)]>0x0){const _0x2be3ed=_0x4c64ab['rows'][0x0][_0x1f7b07(0x138)];return _0x2be3ed;}else return'supp';}catch(_0x208bdc){return console[_0x1f7b07(0x152)]('Erreur\x20lors\x20de\x20la\x20récupération\x20de\x20l\x27action\x20du\x20JID\x20dans\x20la\x20table\x20:',_0x208bdc),'supp';}finally{_0x523288[_0x1f7b07(0x12d)]();}};module[a3_0x3f2ff6(0x143)]={'mettreAJourAction':mettreAJourAction,'ajouterOuMettreAJourJid':ajouterOuMettreAJourJid,'verifierEtatJid':verifierEtatJid,'recupererActionJid':recupererActionJid};
