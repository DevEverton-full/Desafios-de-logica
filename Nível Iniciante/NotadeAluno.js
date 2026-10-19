//Voce deverá criar um programa que receba duas notas de um aluno, calcule a média e informe se ele foi aprovado ou reprovado.

var nota1 = 6
var nota2 = 6
var media = (nota1 + nota2) / 2
if (media >= 7) {
    console.log('Aprovado')
} else if (media < 7) {
    console.log('Reprovado')
}

/*ótimo desafio sua nota foi 9.5/10! Na próxima tente deixar o código 
mais simples para não se atrapalhar, porque na linha 8 você poderia ter 
colocado: else {
    console.log('Reprovado')
    }
porque dentro else já tem um valor negativo(falso), como if é verdadeiro
conseguemente o else será falso.*/
