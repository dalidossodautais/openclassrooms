/*
for (var i = 1; i <= 100; i++)
	console.log(!(i % 3) ? "Fizz" : (!(i % 5) ? "Buzz" : i));
*/

for (var i = 1; i <= 100; i++)
{
	if (!(i % 3) && !(i % 5))
		console.log("FizzBuzz");
	else if (!(i % 3))
		console.log("Fizz");
	else if (!(i % 5))
		console.log("Buzz");
	else
		console.log(i);
}