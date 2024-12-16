
const String=()=>{

    let str="ALLAHABAD";
    // find occrance of a in ALLAHABAD
    const findDuplicate=(str)=>{
        let strArray=str.split("");
        let finalVal={};
        for(let i=0;i<strArray.length; i++){
            if(finalVal[strArray[i]]){
                finalVal[strArray[i]]++;
            }else{
                finalVal[strArray[i]]=1
            }
        }
        return finalVal;
    }
    // console.log(findDuplicate(str));



    // Find occarace of A in "ALLAHABAD"
    const particularChar=(str,A)=>{
        let strArray=str.split("");
        let count=0;
        for(let i=0;i<strArray.length; i++){
            if(strArray[i]==A){
                count++;
            }    
        }
        return count;
    }
    // console.log(particularChar(str,"A"));



    //reverse the string removeduplicate nd print the char which comes at odd number

    let city ="allahabad";
    const mixFunction=(str)=>{
        let splitstr=str.split("");
        let unique=splitstr?.filter((item,i)=>
            str.indexOf(item)==i
        );
        let reverse=[];
        for(let i=unique.length-1;i>=0;i--){
            reverse.push(unique[i]);
        };
        let oddpoint=[];
        for(let i=0;i<reverse.length;i++){
            if(i % 2!=0){
                oddpoint.push(reverse[i]);
            }
        }
        return oddpoint.join("");
        

    }
     console.log("mixFunction===>",mixFunction(city));

};

export default String;