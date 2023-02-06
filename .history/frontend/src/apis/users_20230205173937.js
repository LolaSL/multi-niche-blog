import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const usersSlice = createApi({
  reducerPath: 'userSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000/api/v1/users',
  }),
  tagTypes: ['Get'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/users',
    }),
  }),
})
export const { useGetPostsQuery } = usersSlice;

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