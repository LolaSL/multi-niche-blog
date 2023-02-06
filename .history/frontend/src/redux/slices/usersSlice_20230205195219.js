import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getReq } from "fetch-wrapper"

// create slice

const name = 'users';
const username = null;
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const userActions = { ...slice.actions, ...extraActions };
export const usersReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        users: {}
    }
}

function createExtraActions() {
    const baseUrl = "http://localhost:9000/api/v1/users"

    return {
        getAll: getAll()
    };

    function getAll() {
        return createAsyncThunk(
            `${name}/getAll`,
            async () => await getReq.get(baseUrl)
        );
    }
}

function createExtraReducers() {
    return {
        ...getAll()
    };

    function getAll() {
        var { pending, fulfilled, rejected } = extraActions.getAll;
        return {
            [pending]: (state) => {
                state.users = { loading: true };
            },
            [fulfilled]: (state, action) => {
                state.users = action.payload;
            },
            [rejected]: (state, action) => {
                state.users = { error: action.error };
            }
        };
    }
}

export  const userReducer(state = initialState, action) {
    switch (action.type) {
      case "CHANGE_USERNAME":
        return {
          ...state,
          username: action.payload,
        }
      default:
        return state
    }
  }
  