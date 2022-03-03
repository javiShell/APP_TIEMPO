//Primero se crea una variable que tenga el id del select de nuestra app
//Para luego seleccionarle el listener con el evento
const selectElement = document.getElementById('id');

//Se añade el listener con el evento de cambio, esto es que cambie cuando cambiemos en el select la opcion
selectElement.addEventListener("change", (event) => {
    var resultado = document.querySelector('.resultado');
    //Se crea la varibale que va almmacenar la URL de la api , para que nos coga lo que selecionamos en el select
    //Como hemos dicho antes del evento que le pasamos , para ver su valor lo haremos con ${event.target.value}
    link = `http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=8330b2dfa218e06ff7e17f8e656c6c71`;
    //Se crea una solicitud nueva
    const request = new XMLHttpRequest();
    //Se tiene que abrir la solicitud, se usa el método GET que en este caso es adecuado. Tambien se le pasa la URL
    request.open('GET', link);
    //Le decimos que lo que esta retornando es JSON
    request.responseType = 'json';
    //Se envia la solicitud
    request.send();
    //Ahora en la tiempo se esta almacenando el objeto javascript basado en el JSON
    request.onload = function() {
        const tiempo = request.response;
        //Se crean 5 varibales para mostrar en los 5 div del html
        //Cada uno se mostrará según lo que se eliga en el select
        const resultado1 = document.querySelector('.resultado1');
        const resultado2 = document.querySelector('.resultado2');
        const resultado3 = document.querySelector('.resultado3');
        const resultado4 = document.querySelector('.resultado4');
        const resultado5 = document.querySelector('.resultado5');
        //Los resultados se mostrará con textContent.
        //La humedad la api nos la en porcentaje
        resultado1.textContent = 'La humedad es: '+tiempo['main']['humidity']+' %';
        //La api nos da los grados en Kelvin y se han tenido que pasar a Celsius
        var max = (tiempo['main']['temp_max'])-273.15;
        var min = (tiempo['main']['temp_min'])-273.15;
        //La presion atmosférica la daba hectopascales y se ha pasado a Atmosferas
        var atm = tiempo['main']['pressure']*0.000987;
        resultado2.textContent = 'La temperatura maxima: '+max.toFixed(2)+'\u00B0'+'C';
        resultado3.textContent = 'La temperatura minima: '+min.toFixed(2)+'\u00B0'+'C';
        resultado4.textContent = 'Presion atmosferica: '+atm.toFixed(2)+ ' ATM';
        //La velocidad del viento es en m/s
        resultado5.textContent = 'La velocidad del viento es: '+tiempo['wind']['speed']+ ' m/s';
        
      }
        
  
});

