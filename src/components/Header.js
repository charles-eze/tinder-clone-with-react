import React from 'react';
import image from '../images/tinder_logo_white.png';
import PublicIcon from '@material-ui/icons/Public';

function Header() {
    return (
        <div className='absolute z-50 w-full flex justify-between items-center select-none'>
            <div>
                <img
                    className='w-24 xs:w-28 md:w-36 md:mt-6 ml-4 mt-4 md:ml-7' 
                    src={image}
                    alt='Tinder logo' />
            </div>
            <div className='flex items-center md:mt-5 mt-3 capitalize md:uppercase tracking-tight md:tracking-wide'>
                <div 
                    className='text-white hover:text-pink-500 flex items-center cursor-pointer'>
                    <PublicIcon className='mr-1 md:mr-2'
                        style={{fontSize: 15}} />
                    <p className='font-normal mr-5 md:mr-10 xs:text-lg text-base'> english</p>
                </div>
                <button className='bg-white hidden md:block font-semibold px-6 py-2 mr-8 rounded-md focus:outline-none hover:text-white border border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500'
                    style={{color: '#fd5068' }}>
                        LOG IN
                </button>

            </div>
        </div>
    )
}

export default Header;
