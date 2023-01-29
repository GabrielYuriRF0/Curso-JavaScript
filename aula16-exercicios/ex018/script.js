var numbers = []
let list = window.document.getElementById("list")
function add(){

    let number = Number(window.document.getElementById("inputNumber").value)

    if(window.document.getElementById("inputNumber").value.length != 0){
        if(number >= 0 && number <= 100){
            if(numbers.indexOf(number) == -1){
                numbers.push(number)
                let item = document.createElement("option")
                item.text = `O valor ${number} foi adicionado`
                list.appendChild(item)

            }
            else{
                window.alert("Este número já existe na lista, escolha outro!")
            }
        }
        else{
            window.alert("Digite um número no intervalo entre 1 e 100!")
        }
    }
    else{
        window.alert("Você não digitou um número!")
    }
}

function addArrayElements(array){
    let sum = 0
    for(let number in array){
        sum += array[number]

    }
    return sum
}

function calculateAverage(array){
    return addArrayElements(array) / array.length
}


function calculate(){
    let divResult = window.document.getElementById("result")
    divResult.innerHTML = `<p>Ao todo temos <strong>${numbers.length}</strong> números cadastrados</p>`
    numbers = numbers.sort(function(a, b) {
        return a - b;
      });

    let maxNumber = numbers[numbers.length - 1]
    let minNumber = numbers[0]

    divResult.innerHTML += `<p>O maior valor informado foi <strong>${maxNumber}</strong></p>`
    divResult.innerHTML += `<p>O menor valor informado foi <strong>${minNumber}</strong></p>`

    divResult.innerHTML += `<p>A soma de todos os valores foi <strong>${addArrayElements(numbers)}</strong></p>`

    divResult.innerHTML += `<p>A média de todos os valores foi <strong>${calculateAverage(numbers)}</strong></p>`

    window.document.getElementById("inputNumber").value = " "
    window.document.getElementById("inputNumber").focus()
    

}

