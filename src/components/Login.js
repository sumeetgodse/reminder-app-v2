import "../styles/auth.css";
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { store } from "../store/store";
import { changeLoggedIndex } from "../store/userReducer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const history = useHistory();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        const users = store.getState().userReducer;
        let i;
        for( i = 0; i < users.length; i ++) {
            if( users[i].email === email ) {
                setEmailError(false);
                if( users[i].password === password ) {
                    store.dispatch(changeLoggedIndex(i));
                    history.push("/");
                } else {
                    setPasswordError(true);
                }
                break;
            }
        }
        if( i === users.length ) {
            setEmailError(true);
            setEmail("");
        }
        setPassword("");
    }

    return(
        <div data-testid = "login" className = "login-container">
            <div className = "login-header">
                Log In
            </div>
            <div className = "login-input">
                <TextField error = {emailError} value = {email} onChange = {(e) => handleEmailChange(e)} label = {emailError ? "Invalid Email!" : "Email"} variant = "outlined" fullWidth />
            </div>
            <div className = "login-input">
                <TextField type = "password" error = {passwordError} value = {password} onChange = {(e) => handlePasswordChange(e)} label = {passwordError ? "Invalid Password!" : "Password"} variant = "outlined" fullWidth />
            </div>
            <div className = "login-button-container">
                <input onClick = {handleLogin} className = "login-button" type = "button" value = "Log In" />
            </div>
            <div className = "login-already">
                New User? <Link style = {{textDecoration: "none", fontWeight: "bold"}} to = "/signup">Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;
