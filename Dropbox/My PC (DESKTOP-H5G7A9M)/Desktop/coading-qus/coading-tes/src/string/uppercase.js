import React from "react";

const UpperCaseData=()=>{
    let str="i want to switch";
   
    const upperCaseFunction=(str)=>{
        const strval=str.split(" ");
        let result=[];
        for(let i=0;i<strval.length;i++){
           if(strval[i].length > 0){
            let upper=strval[i].charAt(0).toUpperCase() + strval[i].slice(1);
            result.push(upper);
           }
        }
        return result.join(" ");
    }
    console.log(upperCaseFunction(str));
    
    return(
        <>
        <p>UpperCaseData</p>
        </>
    )

};

export default UpperCaseData;