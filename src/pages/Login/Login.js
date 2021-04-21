import React from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../../actions/actions";

// TODO Switch for API-call
import {loginlist} from "../../lists/loginlist";

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    let history = useHistory();

    const dispatch = useDispatch();

    function handleLogin(event) {
        event.preventDefault();

        //Switch loginlist to backend-call for registered users
        let foundUser = loginlist.filter((user) =>
            user.username === username && user.password === password)[0];

        dispatch(setUser(foundUser));
        history.push("/");
    }

    return (
        <form
            style={{ maxWidth: 400, width: "100%", margin: "30px auto" }}
            onSubmit={handleLogin}
        >
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    );
}