var itachi = {
    nom: 'Uchiha',
    prenom: 'Itachi'
}, chaine;

chaine = JSON.stringify(itachi);
alert('Oréwa : '+chaine);

var obj = JSON.parse(chaine);
alert(typeof obj);

