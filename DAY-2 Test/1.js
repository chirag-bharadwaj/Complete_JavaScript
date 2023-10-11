var temp = 95;
var sqrl = 'false';
var climate = 'summer';

if (temp <= 60 || temp >= 90) {
    console.log(false);
}
else if (climate == 'summer' && temp >= 100) {
    console.log(true);
}
else {
    console.log(false);
}