var	h = Number(prompt("Saisissez l'heure :"));
var	m = Number(prompt("Saisissez les minutes :"));
var	s = Number(prompt("Saisissez les secondes :"));

if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59)
	alert(h + 'h' + m + 'm' + s + 's => ' + (h + ((m + (s + 1) / 60) / 60)) % 24 + 'h' + (m + (s + 1) / 60) % 60 + 'm' + (s + 1) % 60 + 's');