//Lista ordenada de valores
const frutas = ["Abacaxota", "Banânus", "Pêssegoza", "AceRola"];
//İndice =         0          1          2           3
console.log(frutas[0]);
console.log(frutas[3]);
console.log(frutas.length)

frutas[1] = "Mangostesão";
console.log(frutas);

frutas.push("GoiRaba");
frutas.unshift("Maracuzei");
console.log(frutas);
console.log(frutas.length);
