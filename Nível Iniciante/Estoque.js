/*Objetivo: Criar um sistema que verifique se um produto pode ser vendido com base na quantidade disponível no estoque 

Regras:
1. Declare uma variável chamada estoque com o valor 10.
2. Declare uma variável chamada compra com o valor 4.
3. Verifique se a quantidade solicitada está disponível.
4. Se estiver disponível, exiba "Compra autorizada!".
5. Caso contrário, exiba "Estoque insuficiente!".
6. Ao final, mostre quantas unidades restaram no estoque, caso a compra seja autorizada.*/

var estoque = 3;
var compra = 4;
if (compra <= estoque) {
    console.log("Compra autorizada!");
    estoque -= compra;
    console.log("Unidades restantes no estoque: " + estoque);
} else {
    console.log("Estoque insuficiente!");
}