function calculer(x1, sign, x2) {
	if (sign == "+")
		return (x1 + x2);
	if (sign == "-")
		return (x1 - x2);
	if (sign == "*")
		return (x1 * x2);
	if (sign == "/")
		return (x1 / x2);
}

console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0));