/*
console.log("Bienvenue dans ce jeu de devinette !");
var solution = Math.floor(Math.random() * 100) + 1;
var reponse;
do
{
	reponse = Number(prompt("Saisissez une valeur :"));
	if (solution < reponse)
		console.log(reponse + " est trop grand");
	if (solution > reponse)
		console.log(reponse + " est trop petit");
}
while (solution != reponse);
console.log("Bravo ! La solution était " + reponse);
*/

console.log("Bienvenue dans ce jeu de devinette !");
var solution = Math.floor(Math.random() * 100) + 1;
var reponse;
var	index = 1;
do
{
	reponse = Number(prompt("Saisissez une valeur :"));
	if (solution < reponse)
		console.log(reponse + " est trop grand");
	if (solution > reponse)
		console.log(reponse + " est trop petit");
}
while (solution != reponse && ++index <= 6);
if (solution == reponse)
{
	console.log("Bravo ! La solution était " + solution);
	console.log("Vous avez trouvé en " + index + " essai(s)");
}
else
	console.log("Perdu... La solution était " + solution);
