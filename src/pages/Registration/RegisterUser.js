import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [usernameMessage, setUsernameMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");

    const [validUsername, setValidUsername] = React.useState(false);
    const [validPassword, setValidPassword] = React.useState(false);

    const history = useHistory();

    const checkUsername = (input) => {
        if (input.length > 0) {
            setValidUsername(input);
        }
    }

    const checkPasswordMatch = (input) => {
        if (password === input) {
            setPasswordMessage("");
            setValidPassword(true);
        } else {
            setPasswordMessage("Passwords do not match.");
            setValidPassword(false);
        }
    }
    const handleRegistrationError = (status) => {
        switch (status) {
            case 400:
                alert("Error: Empty fields. \nPlease try again.");
                break;
            case 409:
                setUsernameMessage("Username taken.");
                break;
            default:
                alert("Something bad happened dureing registration. \nPlease try again.");
        }
    }

    const handleRegistration = (event) => {
        event.preventDefault();

        const newUser = {
            username: username,
            password: password
        }

        axios({
            method: "post",
            url: "http://localhost:8080/api/user/register",
            data: newUser
        }).then((response) => {
            console.log(response.data);
            history.push("/");
        }).catch(error => {
            console.log(error);
            handleRegistrationError(error.response.status);
        })
    }

    return (
        <form
            style={{maxWidth: 400, width: "100%", margin: "30px auto"}}
            onSubmit={handleRegistration}
        >
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setUsernameMessage("");
                        checkUsername(e.target.value);
                    }}
                    value={username}
                    pattern="[A-Za-z0-9]"
                    type="text"
                    className="form-control"
                />
                {usernameMessage}
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordMessage("");
                    }}
                    value={password}
                    type="password"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                    onChange={(e) => {
                        setPasswordMessage("");
                        checkPasswordMatch(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                />
                {passwordMessage}
            </div>
            <button type="submit" className="btn btn-primary" disabled={!validUsername || !validPassword}>
                Register
            </button>
        </form>
    );
}