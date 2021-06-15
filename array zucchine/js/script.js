// Crea un array di 10 oggetti che rappresentano una zucchina. 
var zucchine = [
    {
        varieta: 'uno',
        peso: 100,
        lunghezza: 20
    },
    {
        varieta: 'due',
        peso: 100,
        lunghezza: 20
    },
    {
        varieta: 'tre',
        peso: 100,
        lunghezza: 20
    },
    {
        varieta: 'quattro',
        peso: 100,
        lunghezza: 10
    },
    {
        varieta: 'cinque',
        peso: 100,
        lunghezza: 10
    },
    {
        varieta: 'sei',
        peso: 100,
        lunghezza: 10
    },
    {
        varieta: 'sette',
        peso: 100,
        lunghezza: 10
    },
    {
        varieta: 'otto',
        peso: 100,
        lunghezza: 10
    },
    {
        varieta: 'nove',
        peso: 100,
        lunghezza: 10
    },
    {
        varieta: 'dieci',
        peso: 100,
        lunghezza: 10
    }
]

// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
var zucchinePiccole = [];
var zucchineGrandi = [];

for (var i = 0; i < zucchine.length; i++){
    if (zucchine[i].lunghezza > 15){
        zucchineGrandi.push(zucchine[i]);
    } else {
        zucchinePiccole.push(zucchine[i]);
    }
}
console.log(zucchinePiccole);
console.log(zucchineGrandi);


// Infine stampa separatamente quanto pesano i due gruppi di zucchine
var pesoPiccole = 0;

for (var i = 0; i < zucchinePiccole.length; i++){
    pesoPiccole = pesoPiccole + zucchinePiccole[i].peso;
}

console.log('Peso zucchine piccole: ' + pesoPiccole + ' '+ 'kg');

var pesoGrandi = 0;

for (var i = 0; i < zucchineGrandi.length; i++){
    pesoGrandi = pesoGrandi + zucchineGrandi[i].peso;
}
console.log('Peso zucchine grandi:' + pesoGrandi + ' ' + 'kg');