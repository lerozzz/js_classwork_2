let a = 6;
let b = 'Hello';

console.log(a);

let inputIn = document.querySelector('.input-in'); //input
let button = document.querySelector('button'); //button
let div = document.querySelector('.out');

button.onclick = function () {
    //кнопка будет нажата
    console.log('Работает');
    //console.log(inputIn.value); //value-то, что введено в input
    let b = +inputIn.value; // + перед inputIn.value позволяет перевести строку в число, даже если number
    console.log(b + 10); // '66' + 10 =6610 
    div.innerHTML = b;
    inputIn.value = ''
}