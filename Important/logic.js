//                     shift (DELETING THE LAST ELEMETS)
// let a = [10, 20, 30];
// for (let i = 0; i <= a.length - 2; i++) {
//     a[i] = a[i + 1];
// }
// a.length--;
// console.log(a);

function shift() {
    var x = a[0];
    for (let i = 0; i <= a.length - 2; i++) {
        a[i] = a[i + 1];
    }
    a.length--;
    return x;
}
let a = [10, 20, 30];
console.log(shift(a));
