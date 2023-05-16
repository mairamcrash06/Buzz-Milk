for ( var i = 0; i <= 100; i++) {
    if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
}

var products = ['milk', 'beer', 'beer', 'milk', 'milk'];

for (var products of products) {
    if (products === 'milk') console.log(products + ' good');
    else if (products === 'beer') console.log(products + ' bad');
}