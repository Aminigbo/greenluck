import React from 'react';
import '../Components/login.css'; // Import the CSS for styling
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    let navigate = useNavigate()
    let [email, setemail] = React.useState("")
    let [password, setpassword] = React.useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            console.log("Trying to reg.")
            await signInWithEmailAndPassword(auth, email, password)
            let user = auth.currentUser;
            navigate("/")
        } catch (error) { 
            alert(error.message)
            console.log(error.message)
        } 
    }


    
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login Account</h2>
                <form onSubmit={handleLogin} >
                    <div id="input-row">
                        <label>Email</label>
                        <input onChange={(e) => {
                            setemail(e.target.value)
                        }} type="email" placeholder="Email" />
                    </div>
                    <div id="input-row">
                        <label>Password</label>
                        <input onChange={(e) => {
                            setpassword(e.target.value)
                        }} type="password" placeholder="Password" />
                    </div>
                    <div className="forgot-password">
                        <a href="/">Forgot your password? <span>Reset</span></a>
                    </div> <br />
                    <button type="submit">Sign In</button>
                </form>
                <div className="register-link">
                    <span>Don't have an account? </span>
                    <span onClick={() => navigate("/register")} style={{
                        color: "#ff2d4d",
                        cursor: "pointer"
                    }}>Register</span>
                </div>
            </div>
        </div>
    );
}


export default Login;