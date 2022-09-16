import React from 'react'

function Search() {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Search for users..' />
            </div>
            <div className="userChat">
                <img src="https://thumbs.dreamstime.com/b/happy-indian-kid-15528264.jpg" alt="" />
                <div className="userChatInfo">
                    <span>Abhi</span>
                </div>
            </div>
        </div>
    )
}

export default Search