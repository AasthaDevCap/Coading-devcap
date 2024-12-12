import React from "react";
import { useSelector } from "react-redux";

export const ProductData=()=>  
    [
    {
        field: 'id',
        headerName: 'ID',
        width: 120,
        renderCell: (params) => params.row.id, // Simple return of the value for 'category'

    },
      {
        field: 'title',
        headerName: 'Title',
        width: 120,
        renderCell: (params) => params.row.title, // Simple return of the value for 'category'

    },
      {
        field: 'category',
        headerName: 'Category',
        width: 120,
        renderCell: (params) => params.row.category, // Simple return of the value for 'category'

    },
      {
        field: 'description',
        headerName: 'Description',
        width: 120,
        renderCell: (params) => params.row.description, // Simple return of the value for 'category'
    },
      {
        field: 'brand',
        headerName: 'Brand',
        width: 120,
        renderCell: (params) => params.row.brand, // Simple return of the value for 'category'

    },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 120,
        renderCell: (params) => params.row.meta.createdAt.toLocaleString(), // Simple return of the value for 'category'

    },
      {
        field: 'price',
        headerName: 'Price',
        width: 120,
        renderCell: (params) => params.row.price, // Simple return of the value for 'category'
    },
      {
        field: 'discountPercentage',
        headerName: 'Discount Percentage',
        width: 120,
        renderCell: (params) => params.row.discountPercentage, // Simple return of the value for 'category'

    },
      {
        field: 'rating',
        headerName: 'Rating',
        width: 120,
        renderCell: (params) => params.row.rating, // Simple return of the value for 'category'
    },
]