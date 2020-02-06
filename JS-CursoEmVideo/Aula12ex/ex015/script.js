function verificar(){
    //window.alert('Funcionou!') //teste aos poucos, usando o alert
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.legth == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]: ')
    }

}