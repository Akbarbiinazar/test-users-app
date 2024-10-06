
import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PUBLIC_API, 
    credentials: 'include',
});

export const baseApi = createApi({
    reducerPath: '', 
    baseQuery: baseQuery,
    tagTypes: ['users'], 
    endpoints: () => ({}),
});
