import React from 'react';
import Message from './Message';

const Messages = () => {
    return (
        <div className='items-center '>
            <Message
                name='Toriana Choco'
                message='Hey baby, are you there?'
                profilePic='https://i.pinimg.com/originals/c6/b2/78/c6b2782a1469c2dbead2940563ed33e6.jpg'
                timestamp='5 seconds ago' />
            <Message
                name='Victoria Gabby'
                message="Haha, you're an awesome developer 💕?"
                profilePic='https://i.pinimg.com/736x/c2/7e/c0/c27ec02aa9f57b89ea07ff00365ad03f.jpg'
                timestamp='30 minutes ago' />
            <Message
                name='James Mandem'
                message='Hello, can you help me get a frontend job 🙏?'
                profilePic='https://s10.favim.com/orig/170905/boy-hot-boy-tumblr-boy-Favim.com-5227060.jpeg'
                timestamp='1 hr ago' />
        </div>
    )
}

export default Messages;
