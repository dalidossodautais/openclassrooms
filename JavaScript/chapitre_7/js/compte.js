var compte = {
	titulaire: "Alex",
	solde: 0,
	
	crediter: function (montant) {
		this.solde += montant;
	},
	debiter: function (montant) {
		this.solde -= montant;
	},
	decrire: function (montant) {
		console.log("Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros");
	}
};