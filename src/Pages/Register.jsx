import React from 'react'
import Add from '../img/addAvatar.png'

function Register() {
    return (
        <div className='FormContainer'>
            <div className="formWrapper">
                <span className="logo">Connect-chatwing</span>
                <span className="logo-title">Register</span>

                <form>
                    <input type="text" placeholder='Enter name' />
                    <input type="email" placeholder='Enter email' />
                    <input type="password" placeholder='Password' />
                    <input style={{ display: "none" }} type="file" id='file' />

                    <label htmlFor="file"></label>
                    <img src={Add} alt=""className='img-add'/>
                    <span className='avatar-add'>Add an Avatar</span>
                    <button>SignUp</button>
                </form>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    )
}

export default Register