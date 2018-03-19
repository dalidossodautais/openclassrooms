var valeurs = [11, 3, 7, 2, 9, 10];
var max;

valeurs.forEach(function (valeurs) {
	if (max === undefined || max < valeurs)
		max = valeurs;
})
console.log("Le maximum des éléments vaut " + max);