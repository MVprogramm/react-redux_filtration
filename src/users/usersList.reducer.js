import users from "./users.js";
import { SET } from "./usersList.actions.js";

const initialState = {
  users: {
    filterText: '',
    usersList: users
  }
}

const usersListReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET :
      return {
        users: {
          usersList: users,
          filterText: action.payload.str
        } 
      }
    default:
      return state;
  }
}

export default usersListReducer;