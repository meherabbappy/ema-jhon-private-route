import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import "./Login.css"

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);

        })
    }
    return (
        <div className = "login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" name="" id="" value = "submit"/>
                    <br />
                </form>
                <p>New To Ema Jhon Website? <br /> <Link to ="/register">Create Accout</Link></p>
                
                <div>--------Google Signup---------</div>
                <button onClick = {handleGoogleLogin} className = "btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;