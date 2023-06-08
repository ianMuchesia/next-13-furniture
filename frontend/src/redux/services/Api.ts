
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
       getAllProducts: build.query({
        query:({category,sort, search})=>({
          url: "products",
          method: 'GET',
          params: {search , sort ,category}
        }),
        providesTags: ['AllProducts']
       })
    })
    
})

export const {useGetAllProductsQuery, useGetSingleProductQuery} = api