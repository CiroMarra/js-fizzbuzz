const numberContainer = document.querySelector ('#container-number');
console.log(numberContainer);

// crea una variabile i con valore predefito di 1 che segue le istruzioni di incrementare il valore di 1 fino a quando non sarà 100.

for (let i = 1; i <= 100; i++) {
    // crea una costante che va a creare dei DIV nel DOM.
    const newDiv = document.createElement ('div');
    let fizzBuzz = i;
    let classFizzBuzz;
    // determina se un numero  è un multiplo sia di 3 che di 5 e lo stampa con il termine "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = "FizzBuzz";
        classFizzBuzz = "fizzbuzz";
        newDiv.classList.add (classFizzBuzz);
    // determina se un numero è multiplo di 3 e lo stampa con il termine "Fizz"    
    } else if (i % 3 === 0) {
        fizzBuzz = "Fizz";
        classFizzBuzz = "fizz";
        newDiv.classList.add (classFizzBuzz)
    // determina se un numero è multiplo di 5 e lo stampa con il termine "Buzz"
    } else if (i % 5 === 0) {
        fizzBuzz = "Buzz";
        classFizzBuzz = "buzz";
        newDiv.classList.add (classFizzBuzz);

       
}  
    

    console.log(fizzBuzz);
    //crea un nuovo elemento div all'interno del DOM
    
    console.log(newDiv);
    //popolo l'elemento i 
    newDiv.innerHTML = fizzBuzz;
    // Aggiungo la classe box

    
    // crea e applica la classe "box" ai nostri div.
    newDiv.classList.add ('box');
 
    // concatena i div creati precedenemente al contenitore numberContainer presente nel DOM.    
    numberContainer.append(newDiv);

}