function convertCelsius(){
  let celsius = document.getElementById("celsius").value;
  let fahrenheit = (celsius * 9/5) + 32;

  document.getElementById("result").innerText = celsius + "°C" + " = " + fahrenheit + "℉" ; 
}


function convertFahrenheit(){
  let fahrenheit = document.getElementById("fahrenheit").value;
  let celsius = (fahrenheit - 32) * 5/9;

  document.getElementById("result").innerText = `${fahrenheit} °F = ${celsius} °C` ; 
}



