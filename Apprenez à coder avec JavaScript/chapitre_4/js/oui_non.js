var	str;
do str = String(prompt("Saisissez votre phrase :"));
while (!/oui|non/.test(str));