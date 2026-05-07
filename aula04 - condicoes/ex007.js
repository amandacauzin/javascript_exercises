var agora = new Date() //chama a função de data do sistema
var hora = agora.getHours() //pega a hora
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 6){
    console.log(`Boa Madrugada!`)
}else if(hora < 12){
    console.log(`Bom dia!`)
}else if(hora <= 18){
    console.log(`Boa Tarde!`)
}else {
    console.log(`Boa Noite!!!`)
}