// 6. Vowel Counter

// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be counted

function vowelCounter(str){
    let vowelCount = 0;
    let VowelArray = ['a','e','i','o','u'];
    for (let char of str) {
        if(VowelArray.includes(char)){
            vowelCount++;
        }
    }
    return vowelCount;
}

let result = vowelCounter("sarvesh");
console.log(result);