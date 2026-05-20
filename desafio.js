//⚫declarar 5 variaveis para representar um funcionario

let nome = "Ana Silva";
let cargo = "Desenvolvedora";
let idade = 28;
let ativo = true;
let contratacao = "2024-05-15";

console.log(`Funcionário: ${nome}, Cargo: ${cargo}, Idade: ${idade} anos.`);

let valorA = 8;
let valorB = 5;
let soma = valorA + valorB;
let multiplicacao = valorA * valorB;

console.log(`Soma de ${valorA} + ${valorB} = ${soma}`);
console.log(`Multiplicação de ${valorA} * ${valorB} = ${multiplicacao}`);

let salarioBase = 3000.00;
let bonus = 500.00;
let salarioTotalBruto = salarioBase + bonus;
let desconto = salarioTotalBruto * 0.10;
let salarioLiquido = salarioTotalBruto - desconto;

console.log(`Salário Base: R$ ${salarioBase} | Bônus: R$ ${bonus}`);
console.log(`Salário Total: R$ ${salarioTotalBruto}`);
console.log(`Desconto (10%): R$ ${desconto}`);
console.log(`Salário Líquido: R$ ${salarioLiquido}`);

let anosEmpresa = 2.5; 
let diasEmpresa = anosEmpresa * 365;
let salarioAtual = 5000.00;

if (diasEmpresa <= 90) {
    console.log(`Status: Período de experiência (${diasEmpresa} dias).`);
} else if (anosEmpresa >= 2 && anosEmpresa < 5) {
    console.log(`Status: Elegível para promoção! (Tempo: ${anosEmpresa} anos).`);
} else if (anosEmpresa >= 5) {
    console.log(`Status: Nível Sênior (Tempo: ${anosEmpresa} anos).`);
} else {
    console.log(`Status: Funcionário efetivo.`);
}
