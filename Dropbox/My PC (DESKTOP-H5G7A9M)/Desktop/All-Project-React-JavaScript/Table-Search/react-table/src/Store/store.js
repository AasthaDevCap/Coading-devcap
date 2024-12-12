import { configureStore } from "@reduxjs/toolkit";
import TableData from '../Store/TableSlice';
import SearchSlice from '../Store/searchDataSlice'
const store=configureStore({
    reducer:{
        tableDataSlice:TableData,
        searchSlice:SearchSlice
    }
});
export default store;