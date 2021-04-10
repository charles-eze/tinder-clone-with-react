import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';

const SwipeButtons = () => {
    return (
        <div className='fixed flex w-full md:justify-center justify-evenly md:bottom-14'
                style={{bottom: '8vw'}}>
            <IconButton className='focus:outline-none bg-white mr-2 xl:p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                style={{boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)', padding: '2vw', color: '#f5b748'}}>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='focus:outline-none bg-white mr-2 xl:p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                style={{boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)', padding: '2vw', color: '#ec5e6f'}}>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='focus:outline-none bg-white mr-2 xl:p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                style={{boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)', padding: '2vw', color: '#62b4f9'}}>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='focus:outline-none bg-white mr-2 xl:p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                style={{boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)', padding: '2vw', color: '#76e2b3'}}>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='focus:outline-none bg-white mr-2 xl:p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                style={{boxShadow: '0px 10px 53px 0px rgba(0, 0, 0, 0.3)', padding: '2vw', color: '#7c48c3'}}>
                <FlashOnIcon fontSize='large' />
            </IconButton>
 
        </div>
    )
}

export default SwipeButtons;
