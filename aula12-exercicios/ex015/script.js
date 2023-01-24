function verificar(){
    let yearOfBirth = window.document.getElementById("agetxt").value
    let date = new Date()
    let actualYear = date.getFullYear()

    if(yearOfBirth > actualYear){ 
        window.alert("Ano inválido, Digite novamente!")
    }
    else{
         let age = actualYear - yearOfBirth
         let radio = window.document.getElementsByName("radSex")
         let genre = ""
         let image = document.createElement("img")
         image.setAttribute("id","picture")

         if(radio[0].checked){
            genre = "Homem"

            if(age >= 0 && age <= 10){
                image.setAttribute("src","images/baby-boy.png")
            }
            else if(age <= 20){
                image.setAttribute("src","images/young-men.png")
            }
            else if(age <= 50){
                image.setAttribute("src","images/adult-men.png")
            }
            else{
                image.setAttribute("src","images/old-men.png")
            }
         }
         else{
            genre = "Mulher"

            if(age >= 0 && age <= 10){
                image.setAttribute("src","images/baby-girl.png")
            }
            else if(age <= 20){
                image.setAttribute("src","images/young-girl.png")
            }
            else if(age <= 50){
                image.setAttribute("src","images/adult-women.png")
            }
            else{
                image.setAttribute("src","images/old-woman.png")
            }
         }

         let finalResult = window.document.getElementById("result")
         finalResult.style.textAlign = "center"
         finalResult.innerHTML = `Detectamos <strong>${genre}</strong> com <strong>${age}</strong> anos`

         finalResult.appendChild(image)
         image.style.paddingTop = "10px"
         

         
    }




}