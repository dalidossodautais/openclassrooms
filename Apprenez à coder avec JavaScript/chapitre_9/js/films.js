var Film = {
	init: function (nom, date, realisateur) {
		this.nom = nom;
		this.date = date;
		this.realisateur = realisateur;
	},
	decrire: function () {
		console.log(this.nom + "(" + this.date + ", " + this.realisateur + ")");
	}
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");
var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");
var films = [film1, film2, film3];
films.forEach(function (films) {
	films.decrire();
});