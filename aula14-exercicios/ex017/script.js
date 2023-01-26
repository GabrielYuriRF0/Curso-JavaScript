function calculate(){
    let number = window.document.getElementById("inputNumber").value
    let selectResult = window.document.getElementById("selecTab")

    if(number.length == 0){
        window.alert("Digite um número!")
    }
    else{
        number = Number(number)
        selectResult.innerHTML = ``

        for(let i = 1; i <= 10; i++){
            let option = document.createElement("option")
            option.text = `${number} X ${i} = ${number * i}`
            selectResult.appendChild(option) 
            option.value = `tab${i}`
        }

    }
    
    
    


   

}