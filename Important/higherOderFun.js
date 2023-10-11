// function multiper(factor)
// {
//     return function(x)
//     {
//         return x*factor;
//     }
// }

// function multiper(factor)
// {
//     return x=>x*factor
// }
// let doubler= multiper(2);
// let tripler= multiper(2);

function add(a, b) {
    var sum = a + b;
    return function sub(a, b) {
        return b - a
    }
}

var res = add(2, 3);
console.log(res);
var res1 = sub(2, 3);
console.log(res1);



