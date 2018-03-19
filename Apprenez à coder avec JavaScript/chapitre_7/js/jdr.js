var perso = {
	nom: "Aurora",
	sante: 150,
	force: 25,
	xp: 0,
	
	decrire: function () {
		var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.force + " points d'expérience";
		return description;
	}
};

console.log(perso.decrire());
perso.sante = perso.sante - 20;
perso.force = perso.force + 10;
perso.xp = perso.xp + 15;
console.log(perso.decrire());