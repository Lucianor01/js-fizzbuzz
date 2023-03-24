/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

for (let i = 1; i <= 100; i++) {

    const container = document.getElementById('container_main');

    const div = document.createElement('div');

    div.innerHTML = `${i}`

    div.className = 'container_numero d-inline-block'

    container.append(div)
    
    if (i % 3 === 0 && i % 5 === 0) {
        div.innerHTML = 'FizzBuzz';
    } else if (i % 3 === 0) {
        div.innerHTML = 'Fizz'
    } else if (i % 5 === 0) {
        div.innerHTML = 'Buzz'
    } else {
        div.innerHTML = i
    }

}