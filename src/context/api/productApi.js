import { api } from "./index";

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        // Get request
        getProducts: build.query({
            query: (params) => ({
                url: "/products/search",
                params,
            }),
            providesTags: ["Product"],
        }),
        createProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
        getProduct: build.query({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            providesTags: ["Product"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useCreateProductMutation,
    useGetProductQuery,
} = productApi;
