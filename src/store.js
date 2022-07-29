import { createStore } from "redux";
import usersListReducer from "./users/usersList.reducer.js";

const store = createStore(usersListReducer);

export default store;