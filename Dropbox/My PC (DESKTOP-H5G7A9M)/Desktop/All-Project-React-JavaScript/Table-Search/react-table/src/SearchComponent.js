import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputText } from "./Store/searchDataSlice";

const SearchCom = () => {
    const dispatch = useDispatch();
    const TextInput = useSelector((state) => state.searchSlice);
    const onSearchTextChange = (word) => {
        dispatch(setInputText(word));
    }

    return (
        <div style={{ display: "inline-flex" }}>
            <p>Search:
                <input
                    style={{ marginLeft: "2px" }}
                    placeholder="Search..."
                    value={TextInput?.inputText}
                    onChange={(e) => onSearchTextChange(e.target.value)}
                /></p>

        </div>
    )

}

export default SearchCom;