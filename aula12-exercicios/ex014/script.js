function loadPicture(){
    let message = window.document.getElementById("message")
    let picture = window.document.getElementById("photo")
    let body = window.document.body
    let date = new Date()
    let hour = date.getHours()
   
    message.innerHTML = `<p>Agora são <strong>${hour}</strong> horas</p>`

    if(hour >= 0 && hour <= 12){
        picture.setAttribute("src", "images/morning.png")
        document.body.style.background=  '#9a9996'
    }
    else if(hour > 12 && hour <= 18){
        picture.setAttribute("src", "images/afternoon.png")
        document.body.style.background = '#fc940d'
    }
    else{
        picture.setAttribute("src", "images/night.png")
        document.body.style.background = '#8f6fa6'
    }
}
