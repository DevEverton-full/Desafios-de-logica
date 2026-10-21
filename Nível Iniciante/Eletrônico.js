/*🎮 Desafio: Sistema de caixa eletrônico
Imagine que você está desenvolvendo um programa simples para um caixa eletrônico.

Sua missão: criar uma lógica que verifique se um cliente pode realizar um saque.
Requisitos
1. Crie uma variável saldo com o valor 500.
2. Crie uma variável saque com o valor 200.
3. Verifique se o valor do saque é menor ou igual ao saldo disponível.
4. Se houver saldo suficiente, exiba: "Saque realizado com sucesso!".
5. Caso contrário, exiba: "Saldo insuficiente!".
6. Se o saque for realizado, mostre também o saldo restante após a operação.
Regras
- Utilize var, if/else e console.log().
- Não use funções nem arrays.
- Não consulte código pronto: tente resolver sozinho!*/

var saldo = 500
var saque = 200
if(saque <= saldo){
    console.log('Saque realizado com sucesso!')
}else{
    console.log('Saldo insuficiente!')
}
var res = saldo - saque
console.log('Saldo restante: ' + res )

/*Sua nota foi 8.5/10 a lógica está ótima, mas faltou colocar a
quantidde que foi retiradda do saldo*/