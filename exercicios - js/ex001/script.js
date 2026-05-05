function carregar(){
    var msg = window.document.getElementById('msg')//pega a variavel do id msg
    var img = window.document.getElementById('imagem')//pega a variavel do id imagem
    var data = new Date() //variavel data
    var hora = data.getHours() //variavel hora
    msg.innerHTML = `Agora são ${hora} horas.` //escreve este texto

    if (hora >= 0 && hora < 12){
        img.src = "imagem-manha.jpg"
        document.body.style.background = '#e2cd9f'
        //BOM DIA
    } else if(hora >=12 && hora < 18){
        img.src = "imagem-tarde.jpg"
        document.body.style.background = '#b9846f'
        //BOA TARDE
    } else{
        img.src = "imagem-noite.jpg"
        document.body.style.background = '#515154'
        //BOA NOITE
    }
}