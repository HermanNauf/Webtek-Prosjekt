const initialState = {
    items: [],
    user: {}
  };
  
  function dataReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_ITEM":
        return {
          ...state,
          items: action.items
        };
      case "SET_USER":
        return {
          ...state,
          user: action.user
        };
  

  
      default:
        return state;
    }
  }
  
  export default dataReducer;
  