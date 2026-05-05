function verificar() {
    var data = new Date() //chama variavel DATA
    var ano = data.getFullYear() //pega ANo da DATA
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') //variavel inserida na div com id RES

    if (fano.value.length == 0 || Number(fano.value) > ano){ //confere tamanho do ano e coloca ano em numerico
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //pode ser feito no html com tag IMG
        img.setAttribute('id', 'foto') //pode ser feito no html com tag IMG

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-m.jpg')
                //criança
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-m.jpg')
                //adolescente
            }else if (idade < 50){
                img.setAttribute('src', 'adulto-m.jpg')
                //adulto
            } else{
                img.setAttribute('src', 'idoso-m.jpg')
                //idoso
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-f.jpg')
                //criança
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-f.jpg')
                //adolescente
            }else if (idade < 50){
                img.setAttribute('src', 'adulto-f.jpg')
                //adulto
            } else{
                img.setAttribute('src', 'idoso-f.jpg')
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}