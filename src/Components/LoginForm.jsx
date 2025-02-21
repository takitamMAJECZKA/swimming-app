import { useState } from "react"


export default function LoginForm(){

    let [returnLogin, setReturnLogin] = useState(true) 
    if (returnLogin){
        return(
            <div id="loginFormContainer">
                <form>
                    <h2 id="loginHeader">LOGIN</h2>
                    <label>Username: <input type="text" id="username"/></label>
                    <label>Password: <input type="password" id="password"/></label>
                    <p id="loginError">Valid password or username.</p>
                    <p>You don't have an account yet? <span id="changeToRegister" onClick={()=>{setReturnLogin(false)}}>Register.</span></p>
                </form>
                <button id="loginBtn">Login</button>
            </div>
        )
    }else{
        return(
            <div id="registerFormContainer">
                <form>
                    <h2 id="registerHeader">REGISTER</h2>
                    <label>Username: <input type="text" id="username"/></label>
                    <label>E-mail: <input type="email" id="email"/></label>
                    <label>Password: <input type="password" id="password"/></label>
                    <p id="registerError">Account with that username or email already exists.</p>
                    <p>You already have an account? <span id="changeToLogin" onClick={()=>{setReturnLogin(true)}}>Login.</span></p>
                </form>
                <button id="registerBtn">Register</button>
            </div>
        )
    }
}