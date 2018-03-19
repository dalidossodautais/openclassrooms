var perso = {
	nom: "",
	sante: 0,
	force: 0,
	xp: 0,
	or : 10,
	cle: 1,

	init: function (nom, sante, force) {
		this.nom = nom;
		this.sante = sante;
		this.force = force;
	},
	combat: function (cible)
	{
		console.log(this.nom + " attaque " + cible.nom + " et lui fait " + this.force + " points de dégâts");
		cible.sante -= this.force;
		if (cible.sante > 0)
			console.log(cible.nom + " a encore " + cible.sante + " points de vie");
		else
		{
			this.xp += 10;
			this.or += cible.or;
			this.cle += cible.cle;
			console.log(cible.nom + " est mort !");
			console.log(this.nom + " a tué " + cible.nom + " et gagne 10 points d'expérience, ainsi que " + cible.or + " pièces d'or et " + cible.cle + " clé(s)");
		}
	},
	decrire: function () {
		console.log(this.nom + " a " + this.sante + " points de vie, " + this.force + " en force, " + this.force + " points d'expérience, " + this.or + " pièces d'or et " + this.cle + " clé(s)");
	}
};

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
var Aurora = Object.create(perso);
Aurora.init("Aurora", 150, 25);
var Glacius = Object.create(perso);
Glacius.init("Glacius", 130, 30);
Aurora.decrire();
Glacius.decrire();
console.log("Un affreux monstre arrive : c'est un orc nommé ZogZog");
var ZogZog = Object.create(perso);
ZogZog.init("ZogZog", 40, 20);
ZogZog.combat(Aurora);
ZogZog.combat(Glacius);
Aurora.combat(ZogZog);
Glacius.combat(ZogZog);
Aurora.decrire();
Glacius.decrire();