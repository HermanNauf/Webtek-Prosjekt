const initialState = {
    items: [],
  };
  
  function dataReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_ITEM":
        return {
          ...state,
          items: action.items
        };
  

  
      default:
        return state;
    }
  }
  
  export default dataReducer;
  