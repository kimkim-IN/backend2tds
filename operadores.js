const idade = 15
const maiorDeIdade = idade > 18;
const possuiCNH = false;

const podeDirigir = maiorDeIdade && possuiCNH;
console.log(" pode dirigir? " + podeDirigir);

const podeViajarSozinho = maiorDeIdade || possuiCNH;
console.log("Pode viajar sozinho?" + podeViajarSozinho);

//Operador NOT
const precisaDeAcompanhante = !maiorDeIdade;
console.log("Precisa de acompanhante? " + precisaDeAcompanhante);