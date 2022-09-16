import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <span className='logo'>Connect-ChatWing</span>
            <div className="user">
                <img src="https://thumbs.dreamstime.com/b/happy-indian-kid-15528264.jpg" alt="" />
                <span className='name'>Abhi</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar