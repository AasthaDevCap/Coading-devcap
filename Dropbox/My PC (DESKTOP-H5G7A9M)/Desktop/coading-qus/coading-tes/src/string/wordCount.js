import React from "react";
// from the given string find out the duplicare character and words

const Count = () => {
    const str = "I love love coading";
    const wordAndCharCount = (str) => {
        let charCount = {};
        let countdata = [];
        let SpaceRemove = str.split("").filter(char => char !== " ");

        for (let i = 0; i < SpaceRemove.length; i++) {
            if (charCount[SpaceRemove[i]]) {
                charCount[SpaceRemove[i]]++;
            } else {
                charCount[SpaceRemove[i]] = 1;
            }
        }
        countdata.push(charCount);
        let wordCount = {};
        let splitWord = str.split(" ");
        for (let i = 0; i < splitWord.length; i++) {
            if (wordCount[splitWord[i]]) {
                wordCount[splitWord[i]]++;
            } else {
                wordCount[splitWord[i]] = 1;
            }
        }
        countdata.push(wordCount);
        return countdata;
    }
    let valcount = wordAndCharCount(str);
    console.log(valcount);

    return (
        <>
          <h3>Character Count</h3>
            <ul>
                {Object.entries(valcount[0]).map(([char, count]) => (
                    <li key={char}>{`Character: ${char}, Count: ${count}`}</li>
                ))}
            </ul>
            
            <h3>Word Count</h3>
            <ul>
                {Object.entries(valcount[1]).map(([word, count]) => (
                    <li key={word}>{`Word: ${word}, Count: ${count}`}</li>
                ))}
            </ul>

        </>
    )
}
export default Count;