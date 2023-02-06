import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const usersSlice = createApi({
  reducerPath: 'userSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
  }),
})
export const { useGetPostsQuery } = apiSlice

// import axios from 'axios';
// axios.defaults.withCredentials = true;

// export async function getUsers(usersData) {
//     return await axios.get(
//       'http://localhost:9000/api/v1/users',
//       usersData
//     )
//   };
  
//   export async function getUserById(userData) {
//     return await axios.get(
//       'http://localhost:9000/api/v1/users/id',
//       userData
//     )
//   };
  
//   export async function deleteUserById(userData) {
//     return await axios.delete(
//       'http://localhost:9000/api/v1/users/id',
//       userData
//     )
//   };