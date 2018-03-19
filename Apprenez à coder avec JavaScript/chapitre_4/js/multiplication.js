/*
var	nbr = Number(prompt("Saisissez le nombre dont vous voulez la table de mutiplication :"));
for (var i = 1; i <= 10; i++)
	console.log(nbr + " x " + i + " = " + nbr * i);
*/

var	nbr;
do nbr = Number(prompt("Saisissez le nombre dont vous voulez la table de mutiplication :"));
while (nbr >= 2 && nbr <= 10);
for (var i = 1; i <= 10; i++)
	console.log(nbr + " x " + i + " = " + nbr * i);