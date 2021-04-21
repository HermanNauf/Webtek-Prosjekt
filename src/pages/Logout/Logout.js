import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../actions/actions";

export default function Logout() {
    const dispatch = useDispatch();
    let history = useHistory();

    function handleLogout() {
        dispatch(setUser({}));
        history.push("/");

        return "Signing out..."
    }


    return (
        handleLogout()
    );
}