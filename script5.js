var heightjohn = 170;
var heightpren = 195;
var heightita = 165;
var agejohn = 36;
var agepren = 25;
var ageita = 25;
function hitungskor(tinggibadan,umur)
{
    var winner = tinggibadan + 5 * umur;
    return winner;
}
var nilaijohn=hitungskor(heightjohn,agejohn);
var nilaipren=hitungskor(heightpren,agepren);
var nilaiita=hitungskor(heightita,ageita);

console.log(nilaijohn);
console.log(nilaipren);
console.log(nilaiita);
if(nilaipren>nilaijohn && nilaipren>nilaiita)
    console.log('pren Menang Dengan Skor'+nilaipren);
else if(nilaiita>nilaipren && nilaiita>nilaijohn)
    console.log('ita Menang Dengan Skor'+nilaiita);
else
{
    console.log('john Menang Dengan Skor'+nilaijohn);
}