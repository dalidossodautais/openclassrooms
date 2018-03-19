var	day = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
var answer = prompt("Donnez un jour :");

for (var i = 0; i < 7 && answer != day[i]; i++);
if (i < 7)
	alert("Demain, nous serons " + day[(i + 1) % 7]);