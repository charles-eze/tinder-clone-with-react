import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

const MessageScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Toriana Choco',
            image: 'https://i.pinimg.com/originals/c6/b2/78/c6b2782a1469c2dbead2940563ed33e6.jpg',
            message: 'Hello, thanks for adding me.',
        },
        {
            name: 'Toriana Choco',
            image: 'https://i.pinimg.com/originals/c6/b2/78/c6b2782a1469c2dbead2940563ed33e6.jpg',
            message: 'No response?',
        },
        {
            message: 'Sorry, I am at work now.',
        },
        {
            name: 'Toriana Choco',
            image: 'https://i.pinimg.com/originals/c6/b2/78/c6b2782a1469c2dbead2940563ed33e6.jpg',
            message: 'Hey baby, are you there?',
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    };
    
    return (
        <div className=''>
            <p className='text-center text-xs xs:text-base text-gray-600 p-5'>YOU MATCHED WITH TORIANA CHOCO ON 7/04/21</p>
            {messages.map(message => (
                message.name ? (
                <div 
                    className='flex items-center p-5'
                    key={message.message}>
                    <Avatar 
                    className=''
                    alt={message.name}
                    src={message.image} />
                    <p className='ml-2.5 py-2.5 px-3.5 rounded-3xl text-gray-600 text-sm'
                       style={{background: 'lightgray'}} >{message.message}</p>
                </div>
                ) : (
                <div className='relative flex items-center p-5 '>
                    <p className='ml-auto py-2.5 pl-3.5 pr-5 rounded-3xl text-white text-sm'
                        style={{background: '#29b3cd', maxWidth: '80vw'}}>
                        {message.message}
                    </p>
                </div> 
                )
            ))}
            <div className='h-14 flex'>
                <form className='flex  bottom-0 fixed w-full border-t border-solid border-gray-200'>
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        style={{flex: 1}}
                        className='p-2.5 focus:outline-none'
                        type='text'
                        placeholder='Type a message...' />
                    <button 
                        onClick={handleSend}
                        type='submit'
                        className='border-none w-16 h-14 right-0 bg-white font-bold focus:outline-none'
                        style={{color: '#fe3d71'}}>SEND</button>
                </form>
            </div>
        
            
        </div>
    )
}

export default MessageScreen;
