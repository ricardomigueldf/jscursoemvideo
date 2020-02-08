function verificar(){
    //window.alert('Funcionou!') //teste aos poucos, usando o alert
    var data = new Date() // pegar data atual
    var ano = data.getFullYear() // pegar ano com 4 digitos. Ex.:  2020
    var fano = document.getElementById('txtano') //formulario ano - ano que foi capturado do formulario
    var res = document.querySelector('div#res') //pegando da 2a div do html
    if (fano.value.legth == 0 || Number(fano.value) > ano){ //ano vazio (comprimento zero) ou valor acima do ano vigente
        window.alert('[ERRO]: Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src','m-crianca.png')
            } else if (idade < 21){
                // jovem  
                img.setAttribute('src', 'm-jovem.png')  
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'm-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'm-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'f-crianca.png')
            } else if (idade < 21){
                // jovem    
                img.setAttribute('src', 'f-jovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'f-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'f-idoso.png')
            }
        }
        res.style.textAlign = 'center' //centralizando pelo JS
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img)
        }

}   