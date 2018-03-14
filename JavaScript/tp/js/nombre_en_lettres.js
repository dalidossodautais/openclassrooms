var		unit = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
var		ten = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
var		nbr = parseInt(prompt('Entrez un nombre.'), 10);
var		str;

if (nbr < 0 || nbr > 999)
	alert('Le nombre ' + String(nbr) + ' est invalide.');
else if (!nbr)
	alert('zéro');
else {
	str = nbr >= 100 ? (nbr >= 200 ? unit[(nbr - nbr % 100) / 100] + '-cents' : 'cent') : '';
	str += (nbr % 100 ? (nbr >= 100 ? '-' : '') + ten[(nbr - nbr % 10) / 10 % 10] : '');
	alert(str + (nbr % 20 ? (nbr >= 20 ? '-' : '') + unit[nbr % (nbr % 100 < 20 || nbr % 100 > 60 ? 20 : 10)] : ''));
}
