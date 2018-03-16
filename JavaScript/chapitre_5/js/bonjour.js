function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var	prenom = String(prompt("Saisissez votre prénom :"));
var	nom = String(prompt("Saisissez votre nom :"));
console.log(direBonjour(prenom, nom));