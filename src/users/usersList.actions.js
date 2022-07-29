export const SET = 'USERS_LIST/SET_FILTER_TEXT';

export const setFilterText = (str) => {
  return {
    type: SET,
    payload: {
      str,
    }
  }
}