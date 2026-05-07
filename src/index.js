function isPalindrome(word) {
    word = word.toLowerCase().replace(/[^a-zа-яёієїґ0-9]/g, '');
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return word === reversed;
}


const isAnagram = (first, second) => {
    let word1 = first.toLowerCase().replace(/[^a-zа-яёієїґ0-9]/g, "");
    let word2 = second.toLowerCase().replace(/[^a-zа-яёієїґ0-9]/g, "");
    if (word1.length !== word2.length) {
        return false;
    }
    while (word1.length > 0) {
        const char = word1[0];

        if (word2.includes(char)) {
            word1 = word1.replace(char, "");
            word2 = word2.replace(char, "");
        } else {
            return false;
        }
    }

    return word1.length === 0 && word2.length === 0;
};

// Перевірка
console.log(isPalindrome("Козак з казок"));
console.log(isAnagram("Топор", "ропот"));
console.log(isAnagram("казан", "наказ"));