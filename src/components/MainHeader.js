import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import image from '../images/Tinder-small-logo.jpg';
import IconButton from '@material-ui/core/IconButton';

function MainHeader() {
    return (
        <div className='flex justify-between border-b border-solid border-gray-200 items-center'>
            <IconButton className='focus:outline-none'>
                 <PersonIcon 
                    className='text-3xl m-5' />
            </IconButton>
            <img
                className='w-11 py-5'
                src={image}
                alt='Tinder Logo' />
            <IconButton className='focus:outline-none'>
                <ForumIcon 
                    className='text-3xl m-5' />
            </IconButton>  
            

            
        </div>
    )
}

export default MainHeader;
