import React from "react";

import {useDispatch} from "react-redux";
import {setUser} from "../../actions/Actions";

import axios from "axios";
import {useHistory} from "react-router-dom";

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loginError, setLoginError] = React.useState(false);
    const history = useHistory();

    const dispatch = useDispatch();

    const loginStatus = (status) => {
        switch (status) {
            case 200:
                setLoginError(false);
                break;
            case 404:
                setLoginError(true);
                break;
            default:
                setLoginError(false);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();

        const loginUser = {
            username: username,
            password: password
        };

        axios({
            method: "post",
            url: "http://158.38.101.212:8080/api/user/login",
            data: loginUser
        }).then((response) => {
            dispatch(setUser(response.data));
            history.push("/");
        }).catch(error => {
            console.log(error);
            loginStatus(error.response.status);
        })
    }

    return (
        <form style={{maxWidth: 400, width: "100%", margin: "30px auto"}} onSubmit={handleLogin}>
            <div className="mb-3">
                <h1>Login</h1>
                <label className="form-label">Username</label>
                <input
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setLoginError(false);
                    }}
                    value={username}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setLoginError(false);
                    }}
                    value={password}
                    type="password"
                    className="form-control"
                />
            </div>
            {/* Displays message on login error */}
            {loginError && <p>Invalid username or password.</p>}
            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>

    );
}