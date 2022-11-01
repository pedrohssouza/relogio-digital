// variável que pega o elemento do html pelo id
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    // variaveis que pegam as horas, minutos e segundos
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    // altera o valor do 00 do html para a hora exata
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})