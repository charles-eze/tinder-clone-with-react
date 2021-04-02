import React from 'react';
import image from '../images/tinder_logo_white.png';
import PublicIcon from '@material-ui/icons/Public';

function Header() {
    return (
        <div className='absolute z-50 w-full flex justify-between items-center select-none'>
            <div>
                <img
                    className='w-36 mt-6 ml-7' 
                    src={image}
                    alt='Tinder logo' />
            </div>
            <div className='flex items-center mt-5 tracking-wide'>
                <div 
                    onHover={<p>Language</p>}
                    className='text-white hover:text-pink-500 flex items-center cursor-pointer'>
                    <PublicIcon className=' mr-2'
                        style={{fontSize: 15}} />
                    <p className='font-normal mr-10 text-base'> ENGLISH</p>
                </div>
                <button className='bg-white  font-semibold px-6 py-2 mr-8 rounded-md focus:outline-none hover:text-white border border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500'
                    style={{color: '#fd5068' }}>
                        LOG IN
                </button>

            </div>
        </div>
    )
}

export default Header;
