import React from 'react'
import Add from '../img/addAvatar.png'

function Login() {
    return (
        <div className='FormContainer'>
            <div className="formWrapper">
                <span className="logo">Connect-chatwing</span><br />
                <span className="logo-title">Register</span>

                <form>
                    <input type="email" placeholder='Enter email' />
                    <input type="password" placeholder='Password' />

                    <button>SignUp</button>
                </form>
                <p>Do you have an account? Register</p>
            </div>
        </div>
    )
}

export default Login