// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine

var zucchine = [
    {
        varieta: 'uno',
        peso: 100,
        lunghezza: 10
    },
    {
        varieta: 'due',
        peso: 100,
        lunghezza: 10
    },
    {
        varieta: 'tre',
        peso: 100,
        lunghezza: 10
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
    }
]

var pesoZucchine = 0;

for (var i= 0; i < zucchine.length; i++){
    // console.log(zucchine[i].peso);
    pesoZucchine = pesoZucchine + zucchine[i].peso;   
}
console.log(pesoZucchine);