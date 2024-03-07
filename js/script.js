const numberContainer = document.querySelector ('#container-number');
console.log(numberContainer);

// crea una variabile i con valore predefito di 1 che segue le istruzioni di incrementare il valore di 1 fino a quando non sarà 100.

for (let i = 1; i <= 100; i++) {
    const newDiv = document.createElement ('div');
    let fizzBuzz = i;
    let classFizzBuzz;
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = "FizzBuzz";
        classFizzBuzz = "fizzbuzz";
        newDiv.classList.add (classFizzBuzz);
    } else if (i % 3 === 0) {
        fizzBuzz = "Fizz";
        classFizzBuzz = "fizz";
        newDiv.classList.add (classFizzBuzz)
    
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

    

    newDiv.classList.add ('box');
 

    numberContainer.append(newDiv);

}