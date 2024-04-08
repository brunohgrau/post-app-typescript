import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../data/entities";

const protocol = "http";
const hostname = "localhost";
const port = 4600;

const baseUrl = "http://localhost:4600";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
