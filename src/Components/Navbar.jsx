import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { useContext } from 'react'
import { AuthContext } from '../Components/context/AuthContext'


function Navbar() {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className='navbar'>
            <span className='logo'>Chat-Wing</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span className='name'>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar