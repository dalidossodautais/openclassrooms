var mousquetaire = ["Arthos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires :");
for (var i = 0; i < 3; i++)
	console.log(mousquetaire[i]);
mousquetaire.push("D'Artagnan");
mousquetaire.forEach(function (mousquetaire) {
	console.log(mousquetaire);
console.log("A présent, ils sont quatre !");
});