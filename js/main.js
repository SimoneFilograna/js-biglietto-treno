const kmRoute = parseInt( prompt ("Quanti km devi percorrere?"));
const age = parseInt( prompt ("Quanti anni hai?"));
const price = (kmRoute * 0.21);
const priceResult = price.toFixed(2);


// offerta minori
const minOffer = (price - (price * 0.20));
const minResult = minOffer.toFixed(2);

//min decimal
console.log("prezzo scontato 2 decimali");
console.log(minResult);


//offerta pensionati
const maxOffer = (price - (price * 0.40));
const maxResult = maxOffer.toFixed(2);


console.log(kmRoute, age);
console.log("prezzo");
console.log(price);
console.log("offerta minima");
console.log(minOffer);
console.log("offeta massima");
console.log(maxOffer);



if (age < 18) {
    document.getElementById("ticket-price").innerHTML = minResult;   
}   else if (age >= 65) {
    document.getElementById("ticket-price").innerHTML = maxResult;
}   else {
    document.getElementById("ticket-price").innerHTML = priceResult;
}