import React from "react";
import { useNavigate } from "react-router-dom";

const ChildB=()=>{
    const navigate=useNavigate();
    const onClickView=()=>{
        navigate("/childB")
    }
return(
    <>
    <button onClick={onClickView}>View Table</button></>
)
}
export default ChildB;