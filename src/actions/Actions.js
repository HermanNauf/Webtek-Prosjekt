export function setItems(items) {
    return function (dispatch) {
        dispatch({
            type: "SET_ITEM",
            items: items
        });
    };
}

export function setUser(user) {
    return function (dispatch) {
        dispatch({
            type: "SET_USER",
            user: user
        });
    };
}

export function setCartItems(cartList) {
    return function (dispatch) {
        dispatch({
            type: "SET_CART",
            cartList: cartList
        });
    };
}

  