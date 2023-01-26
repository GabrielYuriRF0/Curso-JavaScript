function counting(){
    let begin = window.document.getElementById("inputBegin").value
    let end = window.document.getElementById("inputEnd").value
    let pass = window.document.getElementById("inputPass").value
    let divResult = window.document.getElementById("result")

    if(begin.length == 0 || end.length == 0){
         window.alert("Os campos de Início e Fim, não podem ser vázios!")
    }
    if(pass.length == 0 || Number(pass) == 0){
        pass = 1
        window.alert("O passo como não foi informado, vai ser considerado como 1!")
    }
    divResult.innerHTML = `Contando: `

    let numberBegin = Number(begin)
    let numberEnd = Number(end)
    let numberPass = Number(pass)


    if(numberBegin < numberEnd){
        for(let i = numberBegin; i <= numberEnd; i+= numberPass){
            divResult.innerHTML += `${i} &#x1F449; `
    
            if(i == numberEnd - 1){
                divResult.innerHTML += `&#x1F6A9`
            }
    
            
        }
    }
    else{
        for(let i = numberBegin; i >= numberEnd; i -= numberPass){
            divResult.innerHTML += `${i} &#x1F449; `

            if(i == numberEnd){
                divResult.innerHTML += `&#x1F6A9`
            }
            

        }
        
    }
    
}