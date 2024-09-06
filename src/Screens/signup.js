import React from 'react';
import '../Components/signup.css'; // Import the CSS for styling
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate()
    let [email, setemail] = React.useState("")
    let [password1, setpassword1] = React.useState("")
    let [password2, setpassword2] = React.useState("")
    let [firstname, setfirstname] = React.useState("")
    let [username, setusername] = React.useState("")
    let [lastname, setlastname] = React.useState("")
    let [phone, setphone] = React.useState("")
    let [address, setaddress] = React.useState("")


    let [loading, setloading] = React.useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()

        if (!loading) {
            if (password1 !== password2) {
                return toast.error('Password do not match', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }

            try {
                setloading(true)
                await createUserWithEmailAndPassword(auth, email, password1)
                let user = auth.currentUser;
                if (user) {
                    await setDoc(doc(db, "users", user.uid), {
                        displayName: username,
                        email: email,
                        role: "user",
                        uid: user.uid,
                        firstname: firstname,
                        lastname: lastname,
                        phone: phone,
                        address: address
                    })
                }
                toast.success('Account created successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setloading(false)
            } catch (error) {
                if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                    toast.error('User already exists', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
                setloading(false)
            }
        }
    }
    return (
        <div className="signup-container">
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <ToastContainer />
            <div className="signup-box">
                <h2>Register Account</h2>
                <form onSubmit={handleRegister} >
                    <div className="input-row">
                        <input onChange={(e) => {
                            setfirstname(e.target.value)
                        }}  type="text" placeholder="First Name" required />
                        <input onChange={(e) => {
                            setlastname(e.target.value)
                        }}  type="text" placeholder="Last Name" required />
                    </div>
                    <div className="input-row">
                        <input onChange={(e) => {
                            setusername(e.target.value)
                        }}  type="text" placeholder="Username" required />
                        <input onChange={(e) => {
                            setemail(e.target.value)
                        }} type="email" placeholder="Email" required />
                    </div>

                    <div className="input-row">
                        <input onChange={(e) => {
                            setphone(e.target.value)
                        }}  type="text" placeholder="Phone Number" required />
                        <input onChange={(e) => {
                            setaddress(e.target.value)
                        }}  type="text" placeholder="Address" required />
                    </div>
                    <div className="input-row">
                        <input onChange={(e) => {
                            setpassword1(e.target.value)
                        }} type="password" placeholder="Password" required />
                        <input onChange={(e) => {
                            setpassword2(e.target.value)
                        }} type="password" placeholder="Confirm Password" required />
                    </div>
                    <button style={{
                        opacity: loading ? 0.3 : 1
                    }} type="submit">Sign Up</button>
                    <p className="login-link">
                        Do you have an account? <span onClick={() => navigate("/login")} style={{
                            color: "#ff2d4d",
                            cursor: "pointer"
                        }}>Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;