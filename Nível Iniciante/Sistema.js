/*Desafio: Sistema de classificação de temperatura 🌡️
Crie um programa em JavaScript que receba uma temperatura 
em graus Celsius e informe a condição do clima de acordo 
com as regras abaixo.*/

var temperatura = 15
if(temperatura >= 30) {
    console.log('Está quente!!')
} else if (temperatura < 30 && temperatura > 20){
    console.log('Clima agradável!')
} else {
    console.log('Clima agradável')
}

//nota : 9/10, o código está correto, mas a última condição poderia ser mais específica para indicar que está frio.