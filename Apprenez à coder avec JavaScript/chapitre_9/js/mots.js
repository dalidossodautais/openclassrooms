var mots = [];

while ((nouveauMot = prompt("Saisissez un mot :")) !== "stop")
	mots.push(nouveauMot);
mots.forEach(function (nouveauMot) {
	console.log(nouveauMot);
})
