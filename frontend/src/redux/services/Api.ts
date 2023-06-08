
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/' }),

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
        query:({category,sort, search, numericFilters})=>({
          url: "products",
          method: 'GET',
          params: {search , sort ,category, numericFilters}
        }),
        providesTags: ['AllProducts']
       })
    })
    
})

export const {useGetAllProductsQuery, useGetSingleProductQuery} = api