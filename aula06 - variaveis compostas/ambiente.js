let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(8)
num.length //determina quantos elementos tem


console.log(`Nosso vetor é ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições.`)
num.sort() //sorteia as posições
console.log(`A nova ordem sorteada é: ${num}`)
num.indexOf(5) //acha o index da posição onde esta o valor 5
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos+1}`)


//teste lógico com for
for(let pos=0; pos < num.length; pos++){
    console.log(num[pos])
}

for(let pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//jeito simplificado
//para cada posição em num, eu vou mostrar o numero da posição
for(let pos in num){
    console.log(num[pos])
}