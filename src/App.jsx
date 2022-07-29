import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import "./index.scss";

import users from "./users/users.js";
import UsersList from "./users/UsersList.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <UsersList users={users} />
    </Provider>
  );
};

export default App;
