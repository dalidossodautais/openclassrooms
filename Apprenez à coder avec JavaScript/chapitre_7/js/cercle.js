var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
	perimetre: function () {
		return (Math.PI * r * 2);
	},
	aire : function () {
		return (Math.PI * r * r);
	}
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());