import { createSelector } from "reselect";

const usersListSelector = (state) => {
  return state.users.usersList;
}

export const filterTextSelector = (state) => {
  return state.users.filterText;
}

export const filteredUsersListSelector = createSelector(
  [usersListSelector, filterTextSelector],
  (allUsersList, filterText) => {
    return allUsersList.filter(
      (user) => user.name
        .toUpperCase()
        .includes(filterText.toUpperCase())
    );
  }
)
