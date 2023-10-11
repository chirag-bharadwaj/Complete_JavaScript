var a = 10;
var b = 20;
console.log('a=', a, 'b=', b);
a = b + (a - b);
b = a + (b - a);
console.log('a=', b, 'b=', a);

