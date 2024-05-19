const datePlace = document.querySelector('#datePlace')
const indexSection = document.querySelector('#select')
const editSection = document.querySelector('#editSection');
const clock = document.querySelector('#clock')
const greetings = document.querySelector('#greetings')


let date = new Date();
const month = date.toLocaleDateString('pt-br', { month: 'long'}).replace('.', '');
const weekday = date.toLocaleDateString('pt-BR', {weekday: 'short'}).replace('.', '').toUpperCase();
const year = date.getFullYear();
const day = date.getDate();


datePlace.innerHTML = `<h3 class="infoDate">${day} de ${month}, ${year}`
clockTime()
setInterval(clockTime, 1000)


function goToEdit(){
    indexSection.classList.remove('indexOut');
    indexSection.classList.add('indexIn');
    indexSection.addEventListener('animationend', handleAnimationEnd);
    function handleAnimationEnd() {
        console.log('Animação terminou, redirecionando...'); // Para depuração
        indexSection.removeEventListener('animationend', handleAnimationEnd);
        window.location.href = 'pages/edit.html';
    }
}
function clockTime(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    hour = hour < 10? `0${hour}`: hour;
    minutes = minutes < 10? `0${minutes}`: minutes;
    let timeString = `${hour}:${minutes}`;
    clock.innerHTML = timeString;
    if (hour<12 && hour>=6) {
        greetings.innerHTML = `<h1>Bom dia</h1>`
    } else if (hour>=12 && hour<18){
        greetings.innerHTML = `<h1>Boa tarde</h1>`
    } else if (hour>=18 && hour<24){
        greetings.innerHTML = `<h1>Boa noite</h1>`
    } else {
        greetings.innerHTML = `<h1>Boa madrugada</h1>`
    }
}





