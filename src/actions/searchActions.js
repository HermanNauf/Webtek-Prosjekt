export function setSearch(search) {
    return function (dispatch) {
        dispatch({
            type: "SET_SEARCH",
            search: search
        });
    }
}