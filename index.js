function carregar() {
    var msg = document.querySelector('div#msg')
    var data = new Date()
    var hora = data.getHours()

    setInterval(() => {
        msg.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
    }, 1000);


    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundImage = "url('dia.png')"
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.backgroundImage = "url('tarde.png')"
    } else {
        document.body.style.backgroundImage = "url('noite.png')"
    }
}
