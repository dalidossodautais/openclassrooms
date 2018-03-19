var Compte = {
	initCompte: function (titulaire, solde) {
		this.titulaire = titulaire;
		this.solde = solde;
	},
	crediter: function (montant) {
		this.solde += montant;
	},
	debiter: function (montant) {
		this.solde -= montant;
	},
	decrire: function () {
		return ("Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros");
	}
};

var CompteBancaire = Object.create(Compte);

CompteBancaire.initCB = function (titulaire, solde) {
	this.titulaire = titulaire;
	this.solde = solde;
};

var CompteEpargne = Object.create(Compte);

CompteEpargne.initCE = function (titulaire, solde, interet) {
	this.titulaire = titulaire;
	this.solde = solde;
	this.interet = interet;
};
CompteEpargne.ajouterInterets = function () {
	this.solde += this.solde * this.interet;
};

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());