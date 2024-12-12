import { createSlice } from "@reduxjs/toolkit";
const initialState={
    inputText:""
}

const SearchSlice=createSlice({
    name:"SearchDataSlice",
    initialState,
    reducers:{
        setInputText(state,action){
            return(state={
                ...state,
                inputText:action.payload,
            })
        }

    }
});
export const {setInputText}=SearchSlice.actions
export default SearchSlice.reducer