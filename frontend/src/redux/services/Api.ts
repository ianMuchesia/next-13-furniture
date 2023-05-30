import SingleProduct from "@/app/product/page";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

    reducerPath: "apis",
    tagTypes: [
        "singleProduct",
        "AllProducts"
      ],
      endpoints: (build) => ({
        getSingleProduct: build.query({
          query: (id) => `products/${id}`,
          providesTags: ["singleProduct"],
        }),
        getAllProducts:build.query({
            query:()=>"products",
            providesTags:["AllProducts"]
        })
    })
    
})

export const {useGetAllProductsQuery, useGetSingleProductQuery} = api