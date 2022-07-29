import React from "react";
import { connect } from 'react-redux';
import User from "./User.jsx";
import Filter from "../Filter.jsx";
import { filteredUsersListSelector, filterTextSelector } from "./usersList.selectors.js";
import { setFilterText } from "./usersList.actions.js";
import "./usersList.scss";

class UsersList extends React.Component {
  render() {
    const { users, onChange } = this.props;
    const { usersList, filterText } = users;
    return (
      <div>
        <Filter
          filterText={filterText}
          onChange={onChange}
          count={usersList.length}
        />

        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: {
      usersList: filteredUsersListSelector(state),
      filterText: filterTextSelector(state)
    }
  }
}

const mapDispatch = {
  onChange: setFilterText
}

export default connect(mapState, mapDispatch)(UsersList);


