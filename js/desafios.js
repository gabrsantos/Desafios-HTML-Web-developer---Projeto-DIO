// DESAFIO 1 - Quantidade de Números Positivos - Resp;

let total = 0;
let i = 0;
let valor;

while (i <= 6){
    valor = parseFloat(gets());
  
    if (valor >= 0){
        total = total + 1;
    }
  
    i = i + 1;
}

print(total + " valores positivos");

// ----------------------------------------------------//

// DESAFIO 2 - Exibindo Números Pares - Resp;

N = parseInt(gets())

for (let num = 2; num <= N; num++) {
  if(num != 0 && num % 2 == 0){
   console.log(num);
  }
}

// ----------------------------------------------------//

// DESAFIO 3 - Análise de Números - Resp;

numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

function numpar(numero){ return numero % 2 == 0 };
function numimp(numero){ return numero % 2 != 0 };
function numpos(numero){ return numero > 0 };
function numneg(numero){ return numero < 0 };

pares = numero.filter(numpar);
impares = numero.filter(numimp);

positivos = numero.filter(numpos);
negativos = numero.filter(numneg);

print(pares.length + " valor(es) par(es)");
print(impares.length + " valor(es) impar(es)");

print(positivos.length + " valor(es) positivo(s)");
print(negativos.length + " valor(es) negativo(s)");



// ----------------------------------------------------//

// DESAFIO 4 - Contagem de Cédulas - Resp;


let valor = parseInt(gets());
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;
let nota5 = 0;
let nota2 = 0;
let nota1 = 0;
let novoValor;
let subValor;

  novoValor = valor;
  nota100 = Math.trunc(valor / 100);
  valor %= 100;
  nota50 = Math.trunc(valor / 50);
  valor %= 50;
  nota20 = Math.trunc(valor / 20);
  valor %= 20;
  nota10 = Math.trunc(valor / 10);
  valor %= 10;
  nota5 = Math.trunc(valor / 5);
  valor %= 5;
  nota2 = Math.trunc(valor / 2);
  valor %= 2;
  nota1 = valor;

  console.log(novoValor);
  console.log(nota100 + ' nota(s) de R$ 100,00');
  console.log(nota50 + ' nota(s) de R$ 50,00');
  console.log(nota20 + ' nota(s) de R$ 20,00');
  console.log(nota10 + ' nota(s) de R$ 10,00');
  console.log(nota5 + ' nota(s) de R$ 5,00');
  console.log(nota2 + ' nota(s) de R$ 2,00');
  console.log(nota1 + ' nota(s) de R$ 1,00');


// ----------------------------------------------------//

// DESAFIO 5 - Consumo Médio do Automóvel - Resp;

let X = parseInt(gets());
let Y = parseFloat(gets());

let total = (X / Y).toFixed(3);

print(total + " km/l");