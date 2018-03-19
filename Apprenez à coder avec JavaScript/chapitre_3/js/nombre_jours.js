var	days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month = Number(prompt("Saisissez le numéro d'un mois :"));

if (month >= 1 && month <= 12)
	alert(days[month - 1]);