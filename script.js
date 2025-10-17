const contadorDisplay = document.getElementById('contador');
const contadorBtn = document.getElementById('contador-btn');
let contador = 0;

contadorBtn.addEventListener('click', function() {
    contador ++;
    contadorDisplay.textContent = contador;
});