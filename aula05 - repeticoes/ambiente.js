//escrever 'Oi, tudo bem?' várias vezes

var c = 1 //criando variavel de contador
while (c <= 6){
    console.log('Oi!Tudo bem?')
    console.log(`Passo ${c}`)
    c++
}

//repetição com do while
var c = 1
do{
    console.log('Oi! Tudo bem?')
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

//exercicio de for
for(var c=1; c <= 6; c++){
    console.log(`Oi!Tudo bem?`)
    console.log(`Passo ${c}`)
}

console.log(`Vai começar...`)
for(var c = 1; c <= 4; c++){
    console.log(c)
}
console.log('FIM')