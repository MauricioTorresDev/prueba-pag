function actualizarReloj() {
     var ahora = new Date();
     var horas = ahora.getHours();
     var minutos = ahora.getMinutes();
     var segundos = ahora.getSeconds();

     horas = horas < 10 ? '0' + horas : horas;
     minutos = minutos < 10 ? '0' + minutos : minutos;
     segundos = segundos < 10 ? '0' + segundos : segundos;

     var horaActual = horas + ':' + minutos + ':' + segundos;
     document.getElementById('reloj').innerHTML = horaActual;
}

setInterval(actualizarReloj, 1000);