//Exercício1
/*let numero = Number(prompt("Número de 1 a 10: "))

for (let i = 1;i <= 10;i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`)
}*/

//Exercício2
/*for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) { 
      console.log("Número par, pulando para a próxima iteração:");
      continue; 
    }
    if (i === 8) {
      console.log("Número 8 encontrado, encerrando o loop.");
      break; 
    }
  
    console.log(i); 
  }*/

  //Exercício3
  /*for (let i = 1; i <= 20; i++) {
    if (i > 15) {
      console.log("Número maior que 15, encerrando o loop.");
      break; // Sai do loop
    }
  
    if (i % 3 === 0) {
      console.log(i + " Múltiplo de 3, pulando para a próxima iteração.");
      continue; // Pula para a próxima iteração
    }
  
    console.log(i);
  }*/


  //Exercício4
let palavra = prompt("Digite uma palavra:");

for (let caractere of palavra) {
  console.log(caractere);
}
