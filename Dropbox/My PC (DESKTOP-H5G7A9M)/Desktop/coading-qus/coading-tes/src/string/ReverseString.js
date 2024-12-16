import React from "react";

const ReverseWhole = () => {
    let str = "i want to switch";
    let result = [];

    const reverseword = (str) => {
        let newWord=str.split("");
        let reverseWord=[];
        for(let i=newWord.length-1;i>=0;i--){
            reverseWord.push(newWord[i]);
        }
        result.push(reverseWord.join(""));
    }
    const reversestr = (str) => {
        let splitstr = str.split(" ");
        let reverse = [];
        for (let i = splitstr.length - 1; i >= 0; i--) {
            reverse.push(splitstr[i]);
        };
        for (let i = 0; i < reverse.length; i++) {
            if (reverse[i].length > 0) {
                reverseword(reverse[i])
            }else{
                result.push(reverse[i]);
            }
        }
        return result;
    }
    console.log(reversestr(str));


    return (
        <p>reverse</p>
    )

}
export default ReverseWhole;