const editSection = document.querySelector('#editSection');
const indexSection = document.querySelector('#select')
const datePlace = document.querySelector('#datePlace')
const clock = document.querySelector('#clock')
const formActivity = document.querySelector('#selection')
const defDetail = document.querySelector('#defDetails')
const cusDetail = document.querySelector('#cusDetails')
const unitBox = document.querySelector('#unit')
const nameInput = document.querySelector('#description')
const quantityInput = document.querySelector('#quantity')


let date = new Date();
let sqlDate = date.toISOString().split('T')[0];
const month = date.toLocaleDateString('pt-br', { month: 'long'}).replace('.', '');
const weekday = date.toLocaleDateString('pt-BR', {weekday: 'short'}).replace('.', '').toUpperCase();
const year = date.getFullYear();
const day = date.getDate();





datePlace.innerHTML = `<h3 class="infoDate">${day} de ${month}, ${year}`
clockTime()
setInterval(clockTime, 1000)

let dadosEnvio;
let unit;
let selActv;
let description;
let quantity;

function sendDefault(event){
    event.preventDefault();
    unit = unitBox.value;
    quantity = Number(quantityInput.value);
    dadosEnvio = {
        date: sqlDate,
        type: selActv,
        description: description,
        quantity: quantity,
        unit: unit
    }
    console.log(dadosEnvio)
}
function sendCustom(event){
    event.preventDefault();
    description = nameInput.value;
    unit = unitBox.value;
    quantity = Number(quantityInput.value);
    dadosEnvio = {
        date: sqlDate,
        type: selActv,
        description: description,
        quantity: quantity,
        unit: unit
    }
    console.log(dadosEnvio)
}

function clockTime(){
    date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    hour = hour < 10? `0${hour}`: hour;
    minutes = minutes < 10? `0${minutes}`: minutes;
    let timeString = `${hour}:${minutes}`;
    clock.innerHTML = timeString;
}
function goToMain(){
    window.location.href = '../index.html'
    setTimeout(function() {
        window.location.reload(true);
      }, 100);
}