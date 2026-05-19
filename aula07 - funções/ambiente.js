//Exercicio 1: (par impar)
function parimp(n){
    if(n%2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}
let res = parimp(4)
console.log(res)
console.log(parimp(223))




//Exercicio 2: (soma)
function soma(n1=0, n2=0){ //0 é um parâmetro opcional
    return n1 + n2
}
console.log(soma(2, 8))

//Exerciio 3: (função do dobro do numero)

let v = function(x){
    return x*2
}
console.log(v(5))

//Exercicio 4: (fatorial)

function fatorial(n){
    let fat = 1
    for(let c=n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//Exercicio 5: (fatorial RECURSIVA)

function fatorial(n){
    if(n == 1){
        return 1
    }else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
