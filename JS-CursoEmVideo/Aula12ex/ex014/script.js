function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 7   // para testar outros horários
    
    msg.innerHTML = `Agora  são ${hora} horas.`   
    if (hora >= 0 && hora <12){
        //BOM DIA!
        img.src = 'fotoManha.png'
        document.body.style.background = '#77c0f7'
        }
        else if (hora >=12 && hora <= 18) {
            //BOA TARDE
            img.src = 'fotoTarde.png'
            document.body.style.background = '#b84902'
        } else {
            //BOA NOITE
            img.src = 'fotoNoite.png'
            document.body.style.background = '#2f2025'
        }
}
