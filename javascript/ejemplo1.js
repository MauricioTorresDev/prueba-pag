var elemento = document.getElementById('elemento');
var posicionInicial = 0;
var direccion = 1;

function animar() {
     posicionInicial += direccion;
     if (posicionInicial > 300 || posicionInicial < 0) {
          direccion *= -1;
     }
     elemento.style.left = posicionInicial + 'px';
     requestAnimationFrame(animar);
}

animar();