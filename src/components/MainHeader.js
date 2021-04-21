import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import image from '../images/Tinder-small-logo.jpg';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function MainHeader({ backButton, chatScreen, homeButton }) {
    const history = useHistory();
    return (
    <>
        <div className='md:hidden flex justify-between border-b border-solid border-gray-100 items-center'>
            {backButton ? (
            <IconButton 
                onClick={() => history.replace(backButton)}
                className='focus:outline-none'>  
                <ArrowBackIosIcon 
                    className='text-2xl m-1.5'/>
            </IconButton>
            ) : (
            <IconButton 
                onClick={() => history.replace(homeButton)}
                className='focus:outline-none'>
                <HomeIcon
                className='text-2xl m-1.5' />
            </IconButton>
            )}
            
            <Link to='/app'>
                <img
                    className='w-9 py-1.5'
                    src={image}
                    alt='Tinder Logo' />
            </Link>
            <Link to='/chat'>
                <IconButton className='focus:outline-none'>
                    <ForumIcon 
                        className='text-2xl m-1.5' />
                </IconButton>
            </Link>  
        </div>
        <div className={chatScreen ? 'hidden md:flex justify-between border-b border-solid border-gray-100 items-center' : 'hidden'}>
            {chatScreen ? (
            <IconButton 
                onClick={() => history.replace(chatScreen)}
                className='focus:outline-none'>  
                <ArrowBackIosIcon 
                    className='text-2xl m-1.5'/>
            </IconButton>
            ) : (
            <IconButton className='focus:outline-none'>
                <PersonIcon 
                className='text-2xl m-1.5' />
            </IconButton>
            )}
            
            <Link to='/app'>
                <img
                    className='w-9 py-1.5'
                    src={image}
                    alt='Tinder Logo' />
            </Link>
            <Link to='/app'>
                <IconButton className='focus:outline-none'>
                    <ForumIcon 
                        className='text-2xl m-1.5' />
                </IconButton>
            </Link>  
        </div>
    </>
    )
}

export default MainHeader;
