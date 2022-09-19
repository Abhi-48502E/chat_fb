import React, { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";



const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            setErr(true);
        }
    };



    return (
        <div className='FormContainer'>
            <div className="formWrapper">
                <span className="logo">Connect-chatwing</span><br />
                <span className="logo-title">LOGIN</span>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Enter email' />
                    <input type="password" placeholder='Password' />

                    <button>SignUp</button>
                    {err && <span>Oops !Something went wrong</span>}
                </form>
                <p>Do you have an account? <Link to={"/register"}>Register</Link></p>
            </div>
            <Outlet />

        </div>
    )
}

export default Login