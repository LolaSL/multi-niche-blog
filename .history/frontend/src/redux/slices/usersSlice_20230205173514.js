import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
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

// import { createSlice } from "@reduxjs/toolkit";
// import { getUsers, getUserById, deleteUser } from "../../apis/users.js";

// //Slice
// const slice = createSlice({
//     name: 'users',
//     initialState: {
//         users: []
//     },
//     reducers: {
//         UsersSuccess: (state, action) => {
//             state.users = action.payload;
//             state.isLoading = false;
//         },
//     },
// });
// export default slice.reducer;

// const { usersSuccess } = slice.actions;

// export const fetchUsers = () => async dispatch => {
//     try {
//         await getUsers().then((res) =>dispatch(usersSuccess(res.data)))
//     } catch (e) {
//         console.error(e.message);
//     }
// }