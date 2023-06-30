const kmRoute = parseInt( prompt ("Quanti km devi percorrere?"));
const age = parseInt( prompt ("Quanti anni hai?"));
const price = (kmRoute * 0,21);


// offerta minori
const minOffer = (price - (price * 0.20));


//offerta pensionati
const maxOffer = (price - (price * 0.40));


console.log(kmRoute, age);
console.log("prezzo");
console.log(price);
console.log("offerta minima");
console.log(minOffer);
console.log("offeta massima");
console.log(maxOffer);



if (age < 18) {
    document.getElementById("ticket-price").innerHTML = minOffer;   
}   else if (age >= 65) {
    document.getElementById("ticket-price").innerHTML = maxOffer;
}   else {
    document.getElementById("ticket-price").innerHTML = price;
}