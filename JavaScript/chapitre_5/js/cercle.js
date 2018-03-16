function perimetre(rayon) {
	return (Math.PI * rayon * 2);
}

function aire(rayon) {
	return (Math.PI * rayon * rayon);
}

var rayon = Number("Saisissez le rayon du cercle :");
console.log("Le périmètre du cercle est " + perimetre(rayon));
console.log("Le aire du cercle est " + aire(rayon));