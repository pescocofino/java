// Alguns erros comuns

//const numero; Primeiro erro: não declarar uma constante

const minhaVar = "01"// 2 Erro: Não declarar uma variável e chamar no código;
console.log(minhaVar);// exemplo: Chamar minhaVar com V minusculo

console.error("Isso está errado, corrija ;-;")//3 "Erro": Você pode declarar um erro com console.error

// Condicional abreviada if(){}

let idadeMínima = 18;
let idadeCliente = 16;

if(idadeCliente >= idadeMínima){
    console.log("Cerveja")
} else {
    console.log("tang")
}

// Valor ternário
console.log(idadeCliente >= idadeMínima ? "Cerveja" : "Corote")
// modo ternário, utilizando a estrutura _____ >= ______ ? ______ : ______
// modo ternário, utilizando a estrutura _____ <= ______ ? ______ : ______
// modo ternário, utilizando a estrutura _____ == ______ ? ______ : ______

//Template string

const nome = "Lukky";
const idade = 17;
const cidadeNatal = "Foz do Iguaçu"

const apresentação = "Meu nome é " + nome + ", minha idade é " + idade + "e nasci em " + cidadeNatal

console.log(apresentação)

const apresentação2 = 'Meu nome é' (nome)