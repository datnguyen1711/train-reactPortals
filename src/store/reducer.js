const initialState = {
  todos: [],
  todoInput: "",
  theme: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
  }
}
export { initialState };
export default reducer;
