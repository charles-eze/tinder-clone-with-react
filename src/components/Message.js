import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Message = ({ name, message, profilePic, timestamp }) => {
    return (
        <Link to={`/chat/${name}`}>
        <div className='flex items-center justify-between px-4 py-5 border-b border-gray-50 border-solid h-20'>
            <Avatar className='mr-3'
                alt={name}
                src={profilePic} />
            <div className=''
                style={{flex: 1}}>
                <h2 className='font-semibold text-gray-900'>{name}</h2>
                <p className='text-gray-500 text-sm'>{message}</p>
            </div>
            <p className='text-xs text-gray-300'>{timestamp}</p>

            
        </div>
        </Link>
    );
};

export default Message;
