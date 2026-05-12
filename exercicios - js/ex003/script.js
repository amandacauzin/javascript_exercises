function contar(){
    let inicio =  document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resp = document.getElementById('resp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        resp.innerHTML = 'Impossível contar!'
    } else{
        resp.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
            resp.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            //contagem regressivas
            for(let c = i; c >= f; c -= p){
                resp.innerHTML += ` ${c} \u{1F449}`

            }
        }
        resp.innerHTML += `\u{1f3c1}`
        
    }
}