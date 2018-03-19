/*
for (var i = 1; i <= 10; i++)
	console.log(i + " est " (i % 2 ? "impair" : "pair"));
*/

var	start = Number(prompt("Saisissez le nombre de départ :"))
for (var i = 0; i < 10; i++)
	console.log(start + i + " est " ((start + i) % 2 ? "impair" : "pair"));