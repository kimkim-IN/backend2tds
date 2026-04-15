const alunos = ["Nathy", "Maria", "Laura"];

alunos.push("Allan");
alunos.unshift("Lucas");
console.log(alunos);

console.log(alunos.indexOf("Allan")); //Retorna o índice do array
console.log(alunos.indexOf("Gustavo"));

console.log(alunos.includes("Gustavo"));
console.log(alunos.includes("Laura"));