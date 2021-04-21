const initialState = {
    items: [],
    cartList:[],
  };
  
  function dataReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_ITEM":
        return {
          ...state,
          items: action.items
        };
        case "SET_CART":
        return {
          ...state,
          cartList: action.items
        }
  

  
      default:
        return state;
    }
  }
  
  export default dataReducer;
  