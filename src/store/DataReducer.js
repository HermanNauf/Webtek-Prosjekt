const initialState = {
    items: [],
    user: {},
    cartList: [],
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
        case "SET_CART":
            return {
                ...state,
                cartList: action.cartList
            }
        default:
            return state;
    }
}

export default dataReducer;
  