import "../styles/auth.css";
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { store } from "../store/store";
import { addUser } from "../store/userReducer";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmError, setConfirmError] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState("Invalid Email!");
    const history = useHistory();
    
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    const exists = (email) => {
        const users = store.getState().userReducer;
        for( let j = 0; j < users.length; j ++) {
            if( users[j].email === email ) {
                return true;
            }
        }
        return false;
    }

    const handleSignUp = () => {
        if( !emailRegexp.test(email) || !email ) {
            setEmailError(true);
            setEmailErrorText("Invalid Email!")
            setEmail("");
        } else if( exists(email) ) {
            setEmailError(true);
            setEmailErrorText("User already exists!");
            setEmail("");
        } else {
            setEmailError(false);
            if( !password ) {
                setPasswordError(true);
                setPassword("");
            } else if( password !== confirmPassword ) {
                setPasswordError(false);
                setConfirmError(true);
                setConfirmPassword("");
            } else {
                const newUser = {
                    email: email,
                    password: password
                }
                store.dispatch(addUser(newUser));
                history.push("/login");
            }
        }          
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleCPChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    return(
        <div className = "login-container">
            <div className = "login-header">
                Sign Up
            </div>
            <div className = "login-input">
                <TextField type = "email" error = {emailError} value = {email} onChange = {(e) => handleEmailChange(e)} label = {emailError ? `${emailErrorText}` : "Email"} variant = "outlined" fullWidth />
            </div>
            <div className = "login-input">
                <TextField type = "password" error = {passwordError} value = {password} onChange = {(e) => handlePasswordChange(e)} label = {passwordError ? "Invalid Password!" : "Password"} variant = "outlined" fullWidth />
            </div>
            <div className = "login-input">
                <TextField type = "password" error = {confirmError} value = {confirmPassword} onChange = {(e) => handleCPChange(e)} label = {confirmError ? "Passwords do not match!" : "Confirm Password"} variant = "outlined" fullWidth />
            </div>
            <div className = "login-button-container">
                <input onClick = {() => handleSignUp()} className = "login-button" type = "button" value = "Sign Up" />
            </div>
            <div className = "login-already">
                Existing User? <Link style = {{textDecoration: "none", fontWeight: "bold"}} to = "/login">Log In</Link>
            </div>
        </div>
    );
}

export default SignUp;
