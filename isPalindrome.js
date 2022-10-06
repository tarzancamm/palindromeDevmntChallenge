// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
// Write your code below



let isPalindrome = (word) => {
    let newArr = word.split('').reverse().join('');
    if (word === newArr) {
        return true
    } else {
        return false
    }
}


console.log(isPalindrome('hello'))
