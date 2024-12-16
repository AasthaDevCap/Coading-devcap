import React from "react";

const StaticRev=()=>{
    let str="i want to switch";
    let result=[];
    const reverseWordstatic=(word)=>{
        let newWord=word.split("");
        let pushreseverse=[]
        for(let i=newWord.length-1;i>=0;i--){
            pushreseverse.push(newWord[i])
        }
        result.push(pushreseverse.join(""));

    }
    const reverseWord=(str)=>{
        const strval=str.split(" ");
        for(let i=0;i<strval.length;i++){
            if(strval[i].length > 0){
                reverseWordstatic(strval[i]);
            }else{
                result.push(strval[i]);
            }
        }
        return result.join(" ");

    }
    console.log(reverseWord(str));
    
    return(
        <>
        <p>StaticRev</p>
        </>
    )

};

export default StaticRev;