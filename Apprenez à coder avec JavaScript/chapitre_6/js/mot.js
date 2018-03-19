function compterNbVoyelles(mot) {
	return (mot.match(/[aeiouy]/gi) ? mot.match(/[aeiouy]/gi).length : 0);
}
function compterNbConsonnes(mot) {
	return (mot.match(/[b-df-hj-np-tv-xz]/gi) ? mot.match(/[b-df-hj-np-tv-xz]/gi).length : 0);
}
function inverser(mot) {
	var nouveau_mot = "";
	for (var i = mot.length - 1; i >= 0; i--)
		nouveau_mot += mot[i];
	return (nouveau_mot);
}
function trouverLettreLeet(lettre) {
	var lettreLeet = {"a" : "4", "b" : "8", "e": "3", "l" : "1", "o" : "0", "s" : "5"};
	return (lettreLeet[lettre.toLowerCase()]);
}
function convertirEnLeetSpeak(mot) {
	return (mot.replace(/[abelos]/gi, trouverLettreLeet));
}
var mot = String(prompt("Saisissez un mot :"));
console.log("Le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + mot.toLowerCase());
console.log("Il s'écrit en majuscules " + mot.toUpperCase());
console.log("Il contient " + compterNbVoyelles(mot) + " voyelle(s) et " + compterNbConsonnes(mot) + " consonne(s)");
console.log("Il s'écrit à l'envers " + inverser(mot));
console.log(mot.toLowerCase() === inverser(mot).toLowerCase() ? "C'est un palindrome" : "Ce n'est pas un palindrome");
console.log("Il s'écrit en leet speak " + convertirEnLeetSpeak(mot));