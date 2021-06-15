// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var biciclette = [
    {
        nome: 'bmx',
        peso: 10
    },
    {
        nome: 'graziella',
        peso: 20
    },
    {
        nome: 'corsa',
        peso: 5
    }
]


// Stampare a schermo la bici con peso minore.
var pesoPiuBasso = biciclette[0];

for(var i = 1; i < biciclette.length; i++){
    
    if (biciclette[i].peso < pesoPiuBasso.peso){
        pesoPiuBasso = biciclette[i];
    }
}
console.log(pesoPiuBasso);
