var data = new Date()
var horas = data.getHours()
console.log(`São exatamente ${horas} horas`)

if(horas < 12){
    console.log("Bom dia!")
}
else if(horas <= 18){
    console.log("Boa tarde!")
}
else{
    console.log("Boa noite!")
}