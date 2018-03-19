var compte = {
	titulaire: "Alex",
	solde: 0,
	
	crediter: function (montant) {
		this.solde += montant;
	},
	debiter: function (montant) {
		this.solde -= montant;
	},
	decrire: function () {
		console.log("Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros");
	}
};

compte.decrire();
compte.crediter(200);
compte.debiter(150);
compte.decrire();
