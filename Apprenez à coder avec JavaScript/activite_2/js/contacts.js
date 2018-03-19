function ajouterUnePersonne(personnes, nom, prenom) {
	var nouvellePersonne = Object.create(Personne);
	nouvellePersonne.init(nom, prenom);
	personnes.push(nouvellePersonne);
}
function afficherLesOptions() {
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");
}
function afficherLesPersonnes(personnes) {
	console.log("Voici la liste de tous vos contacts :")
	personnes.forEach(function (personnes) {
		personnes.decrire();
	})
}


var Personne = {
	init: function (nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},
	decrire: function () {
		console.log("Nom : " + this.nom + ", prénom : " + this.prenom);
	}
};

var personnes = [];

ajouterUnePersonne(personnes, "Lévisse", "Carole");
ajouterUnePersonne(personnes, "Nelsonne", "Mélodie");

var input;

console.log("Bienvenue dans le gestionnaire des contacts !")
afficherLesOptions();
while (input = Number(prompt("Choisissez une option :"))) {
	if (input === 1)
		afficherLesPersonnes(personnes);
	if (input === 2) {
		ajouterUnePersonne(personnes, prompt("Entrez le nom du nouveau contact :"), prompt("Entrez le prénom du nouveau contact :"));
		console.log("Le nouveau contact a été ajouté");
	}
	console.log("");
	afficherLesOptions();
}
console.log("");
console.log("Au revoir !");