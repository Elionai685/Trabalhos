function convertTemperature() {
    const tempInput = document.getElementById("temp-input").value;
    const unitSelect = document.getElementById(tempInput).value;
    const result = document.getElementById("result");

    let convertedTemp;
    if (unitSelect === "celsius") {
        // Converte Celsius para Fahrenheit
        convertedTemp = (tempInput * 9/5) + 32;
        result.innerText = `${tempInput} °C é igual a ${convertedTemp.toFixed(2)} °F`;
    } else {
        // Converte Fahrenheit para Celsius
        convertedTemp = (tempInput - 32) * 5/9;
        result.innerText = `${tempInput} °F é igual a ${convertedTemp.toFixed(2)} °C`;
    }
}
