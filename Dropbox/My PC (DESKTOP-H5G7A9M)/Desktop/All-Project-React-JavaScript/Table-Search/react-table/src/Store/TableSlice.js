import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: []
}
const TableData = createSlice({
    name: "tableSlice",
    initialState,
    reducers: {
        setApiData(state,action){
            return(state={
                ...state,
                data:action.payload
            })
        }

    }
});
export const {setApiData} = TableData.actions;
export default TableData.reducer;