var	day = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
var ans = prompt("Donnez un jour :");
for (var i = 0; i < 7 && ans != day[i]; i++);
if (i < 7)
	alert("Demain, nous serons " + day[(i + 1) % 7]);