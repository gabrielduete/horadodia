function carregar() {
    var msg = document.querySelector('div#msg')
    var data = new Date()
    var data1 = new Date()
    var mins = data1.getMinutes()
    var hora = data.getHours()
    msg.innerHTML = `Horário atual: ${hora}:${mins}`


    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundImage = "url('dia.png')"
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.backgroundImage = "url('tarde.png')"
    } else {
        document.body.style.backgroundImage = "url('noite.png')"
    }
}
