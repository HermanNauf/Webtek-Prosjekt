import React from "react";

import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {setUser} from "../../actions/actions";

import axios from "axios";

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    let history = useHistory();

    const dispatch = useDispatch();

    function handleLogin(event) {
        event.preventDefault();

        const loginUser = {
            username: username,
            password: password
        };

        axios({
            method: "post",
            url: "http://localhost:8080/api/user/login",
            data: loginUser
        }).then((response) => {
            dispatch(setUser(response.data));
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <form
            style={{maxWidth: 400, width: "100%", margin: "30px auto"}}
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
                {username}
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="form-control"
                />
                {password}
            </div>
            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    );
}