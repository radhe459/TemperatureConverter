
const celciusToFahrenheit = document.getElementById("fRadio")
const fahrenheitToCelcius = document.getElementById("cRadio")


function celciusToFahrenheitConverter(temperature){
    return (temperature*(9/5))+32 + "°F"
}

function fahrenheitToCelciusConverter(temperature){
    return ((5/9)*(temperature-32)) + "°C"
}

document.getElementById("Submit").onclick = function(){
    let input = document.getElementById("temperature").value
    if(input===null || input===""){
        document.getElementById("result").textContent = "Please Enter Temperature"
        return
    }
    input = Number(input)
    document.getElementById("result").textContent = celciusToFahrenheit.checked ? celciusToFahrenheitConverter(input) : fahrenheitToCelcius.checked ? fahrenheitToCelciusConverter(input) : "Please select any option";
}
