



reducer

const initialState = {
    username: null,
};

export  const userReducer(state = initialState, action)=> {
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

export const changeUserName = (name) => {
    return {
     type: "CHANGE_USERNAME",
     payload: name
    }
   }
   