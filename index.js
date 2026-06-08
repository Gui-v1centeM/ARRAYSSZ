
let frutas = [];

frutas.push("Maçã");
frutas.push("Banana");
frutas.push("Uva");
frutas.push("Laranja");
frutas.push("Morango");

frutas.unshift("Abacaxi");

frutas.shift();

console.log("Lista completa de frutas:");
console.log(frutas);

console.log("Primeira fruta:");
console.log(frutas[0]);

console.log("Última fruta:");
console.log(frutas[frutas.length - 1]);


// 2 - SOMA DOS NÚMEROS//

let numeros = [10, 20, 30, 40, 50, 60];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("Soma total:");
console.log(soma);


// 3 - MAIOR NÚMERO DA LISTA//

let listaNumeros = [12, 45, 7, 89, 34, 100, 23, 67, 5, 90];

let maior = listaNumeros[0];


for (let i = 0; i < listaNumeros.length; i++) {

    if (listaNumeros[i] > maior) {
        maior = listaNumeros[i];
    }
}

console.log("Maior número encontrado:");
console.log(maior);

// TUPLAS - 1//
let aluno = ["Carlos", 16, "2º Ano A"];

console.log("Dados do aluno:");
console.log("Nome:", aluno[0]);
console.log("Idade:", aluno[1]);
console.log("Turma:", aluno[2]);

// TUPLAS - 2//

let produto = ["Notebook", 3500, 15];

console.log(
    "O produto " + produto[0] +
    " custa R$" + produto[1] +
    " e possui " + produto[2] +
    " unidades em estoque."
);


// TUPLAS - 3//
let filmes = [
    ["Vingadores", 2019, "Ação"],
    ["Toy Story", 1995, "Animação"],
    ["Titanic", 1997, "Romance"]
];

console.log("Lista de filmes:");

for (let i = 0; i < filmes.length; i++) {

    console.log("Nome:", filmes[i][0]);
    console.log("Ano:", filmes[i][1]);
    console.log("Gênero:", filmes[i][2]);
    console.log("----------------------");
}