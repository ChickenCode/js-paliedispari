
let userInput = prompt("Inserisci una parola").toLowerCase();

function isPalindrome(word) {

    let reverseWord = "";

    for (i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
    }

    return reverseWord
}

let palindromeControl = isPalindrome(userInput)

if(palindromeControl == userInput) {
    console.log("La parola che hai inserito è palindroma!")
}

else {
    console.log("La parola che hai inserito non è palindroma! Riprova")
}











/*let userInput = prompt("Inserisci una parola");

function isPalindrome(word) {
    lowerWord = word.toLowerCase();
    reverseWord = lowerWord.split('').reverse().join('');

    lol
    if (word === reverseWord) {
        console.log( word + " is palindrome!!!")
    }

    else if (word !== reverseWord) {
        console.log( word + " is not a palindrome, since reversing it you obtain " + reverseWord)
    }
    
    return
}

isPalindrome(userInput)*/







