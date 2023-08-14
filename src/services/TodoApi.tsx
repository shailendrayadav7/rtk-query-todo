import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos', // The API endpoint to fetch todos
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
