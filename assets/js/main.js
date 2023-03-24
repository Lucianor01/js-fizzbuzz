/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

for (let i = 1; i <= 100; i++) {

    const container = document.getElementById('container_main');

    const div = document.createElement('div');

    div.innerHTML = `${i}`

    div.className = 'container_numero d-flex justify-content-center align-items-center my-2 text-black fs-5'

    container.append(div)
    
    if (i % 3 === 0 && i % 5 === 0) {
        div.innerHTML = 'FizzBuzz';
        div.id = 'fizzbuzz'
        div.style.cssText = 'background-color: #f0466f'
    } else if (i % 3 === 0) {
        div.innerHTML = 'Fizz'
        div.id = 'fizz'
        div.style.cssText = 'background-color: #0cd6a1'
    } else if (i % 5 === 0) {
        div.innerHTML = 'Buzz'
        div.id = 'buzz'
        div.style.cssText = 'background-color: #ffd166'
    } else {
        div.innerHTML = i
    }

}