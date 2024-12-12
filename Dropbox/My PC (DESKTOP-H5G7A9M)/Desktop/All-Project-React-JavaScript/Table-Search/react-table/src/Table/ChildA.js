import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setApiData } from "../Store/TableSlice";
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ProductData } from "./DataTable";
import SearchCom from "../SearchComponent";
const ChildA = () => {
    const dispatch = useDispatch();
    let StoreValue = useSelector((state) => state.tableDataSlice)
    // useEffect(() => {
    //     let url = 'https://demo.dataverse.org/api/search?q=trees';
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then(product => console.log(product,"search")
            
    //         )
    // }, []);

    useEffect(() => {
        let url = 'https://dummyjson.com/products';
        fetch(url)
            .then((response) => response.json())
            .then(product => dispatch(setApiData(product.products))
            )
    }, []);
    console.log("StoreValue?.data-->",StoreValue?.data);
    
    // const renderRow = () => {
    //     let rows = [];
    //     let test = StoreValue?.data;
    //     if (Array.isArray(test) && test.length > 0) {
    //         rows = test.map((product) => ({
    //             id: product.id,
    //             title: product.title,
    //             category: product.category,
    //             description: product.description,
    //             brand: product.brand,
    //             createdAt: product.createdAt,
    //             price: product.price,
    //             discountPercentage: product.discountPercentage,
    //             rating: product.rating,
    //         }));
    //     }
    
    //     return rows;
    // };
    
    // console.log(renderRow());
    
    return (
        <>
        <SearchCom/>
            <Paper>
                <DataGrid
                    rows={StoreValue?.data || []}
                    columns={ProductData()}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick 
                    sx={{
                        height: 450, 
                        width: '100%', 
                       }}
                    />
            </Paper>
        </>
    )
}

export default ChildA;