import React from 'react'
import Cam from '../img/cam.png'
import More from '../img/more.png'
import Add from '../img/add.png'
import Messages from './Messages'
import Input from './Input'



function Chat() {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Abhi</span>
                <div className="chatIcons">
                    <img src={Cam} alt="cam-icon" />
                    <img src={Add} alt="add icon" />
                    <img src={More} alt="more icoon" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat