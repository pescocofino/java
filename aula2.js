//, var -> Criando uma variável

//var altura = 5;
//var comprimento = 8;

//var area = altura * comprimento;
//console.log(area);

// let -> Cria uma variável (Forma mais atualizada de criar uma var)

const altura = 5; 
const comprimento = 8;
const forma = "retângulo";
let area;

if(forma === "retângulo"){
    area = altura * comprimento
}else if(forma === "triângulo"){
    area = (altura * comprimento) / 2
} else {
    console.log("Deveria ser uma forma")
}
console.log(area);

// const -> Utilizada para criar "variáveis" que são fixas, que não se altera
// Condições booleanas (Truly ou falsy)
// 0 = false
// 1 = true

const usuariologado = true;
const contaPaga = false;

console.log(0 == false);// True
console.log(contaPaga == 0)// True
console.log(contaPaga === 0);// False
console.log("" == false);// True
console.log(1 == true);// True

// Nulo e indefinido
// Nulo -> vazio ou nada

let gaspiroca;
let oreia = null;
let numero = 16;
let texto = "Eu gosto de sonega imposto <3"

// Consultando os tipos variáveis;

console.log(typeof gaspiroca);
console.log(typeof oreia);
console.log(typeof numero);
console.log(typeof texto);

// Conversão de variável

const numeroNumber = 350;
const numeroString = "350"

console.log(numeroNumber == numeroString);// Compara apenas o valor
console.log(numeroNumber === numeroString);// Compara tambem o tipo
console.log(numeroNumber + numeroString);// Concatenação
console.log(numeroNumber + Number(numeroString));// Soma de números



