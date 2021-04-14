let userInput = prompt("Inserisci una parola");

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

isPalindrome(userInput)







