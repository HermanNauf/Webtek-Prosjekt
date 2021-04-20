export function setItems(items) {
    return function (dispatch) {
      dispatch({
        type: "SET_ITEM",
        items: items
      });
    };
  }
  