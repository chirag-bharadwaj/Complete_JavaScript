var cigar = 30;
var weekend = 'false';

if (cigar <= 40 && cigar >= 60) {
    console.log(true);
}
else if (cigar <= 40 && weekend) {
    console.log(false);
}