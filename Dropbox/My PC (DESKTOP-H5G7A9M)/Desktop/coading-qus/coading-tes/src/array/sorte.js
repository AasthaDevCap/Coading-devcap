import React from "react";

const ArraySort=()=>{
    const arr=[7,3,1,9,6];
    const arr1=[2,4,5,8]

    const sortArray=(arr)=>{
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length-i-1;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp
                }
            }
        }
        return arr;
    };
    const mergetwoarr=(arr,arr1)=>{
        let mergedarray=arr.concat(arr1)
        
        for(let i=0;i<mergedarray.length;i++){
            for(let j=0;j<mergedarray.length-i-1;j++){
                if(mergedarray[j]>mergedarray[j+1]){
                    let temp=mergedarray[j];
                    mergedarray[j]=mergedarray[j+1];
                    mergedarray[j+1]=temp;
                }
            }
        }
        return mergedarray;

    }
    console.log(mergetwoarr(arr,arr1));
    

    return(
        <>
        <p>Sort</p>
        </>
    )

}

export default ArraySort;