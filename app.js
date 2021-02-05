"use strict"

function encryptThis(wordOrSentence){
    // check for false values
    if(
        wordOrSentence === null ||
        wordOrSentence === undefined ||
        wordOrSentence.length === 0
    ) return 'no word or group of words provided.';

    function swapFirstLetterWithLast(str){
        
        if(str.length >= 3){
            const ASCIIOFWORD = str[0].charCodeAt();
            const newStr = str.slice(1)
            const firstLetter = newStr[0];
            const lastLetter  = newStr[newStr.length - 1];
            let copyOfStr = newStr;

            // remove first and last letters
            let strippedString = copyOfStr.slice(1);
            strippedString = strippedString.substr(0, strippedString.length -1);

            return `${ASCIIOFWORD}${lastLetter}${strippedString}${firstLetter}`;

        } else if( str.length === 2 ){

            const wordFirstLetter = str[0];
            const ASCIIOFWORD = wordFirstLetter.charCodeAt(); 

            return `${ASCIIOFWORD}${str[1]}`;

        } else if( str.length === 1 ){

            return str;
        }
        
    }

    const sentenceArray = wordOrSentence.split(' '); 

    // for case of only one word.
    if(sentenceArray.length === 1){
        return swapFirstLetterWithLast(wordOrSentence);
    }


    // for case of a sentence
    let finalSentence = '';
    sentenceArray.forEach(word => finalSentence += `${swapFirstLetterWithLast(word)} `);
    return finalSentence
}

// console.log(encryptThis('My name is Elijah Bobzom'));

function decipherThis(wordOrSentence){
    // check for false values
    if(
        wordOrSentence === null ||
        wordOrSentence === undefined ||
        wordOrSentence.length === 0
    ) return 'no string or group of strings provided.';

    function decipherWord(word){
        // case where a letter is returned without encrypting
        if( isNaN( parseInt(word) ) ){
            return word;
        }

        const ASCIITOLETTER = String.fromCharCode( parseInt(word) );
        let remainingAlphabets = word.replace(parseInt(word), '');

        if(remainingAlphabets.length === 1){
            
            return `${ASCIITOLETTER}${remainingAlphabets}`;

        } else if(remainingAlphabets.length === 2){
            
            return `${ASCIITOLETTER}${remainingAlphabets[1]}${remainingAlphabets[0]}`;

        } else{
            
            const firstLetter = remainingAlphabets[0];
            const lastLetter  = remainingAlphabets[remainingAlphabets.length - 1];
            let copyOfStr = remainingAlphabets;

            // remove first and last letters
            let strippedString = copyOfStr.slice(1);
            strippedString = strippedString.substr(0, strippedString.length -1);
            return `${ASCIITOLETTER}${lastLetter}${strippedString}${firstLetter}`;
        }
    }

    const wordOrSentenceArray = wordOrSentence.split(' ');

    if(wordOrSentenceArray.length === 1){
        return decipherWord(wordOrSentence);
    }

    let result = '';
    wordOrSentenceArray.forEach(word => result += `${decipherWord(word)} `);
    return result;
}

// console.log(decipherThis('77y 110ema 105s 69hijal 66mbzoo'))