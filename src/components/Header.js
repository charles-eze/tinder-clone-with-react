import React, { useState } from 'react';
import image from '../images/tinder_logo_white.png';
import PublicIcon from '@material-ui/icons/Public';
import LoginModal from './LoginModal';

function Header() {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className='absolute w-full flex justify-between select-none h-screen'>
            { showModal ? <div
                onClick={closeModal}
                className='fixed z-50 flex justify-center items-center bg-black bg-opacity-60 h-screen w-full transition-all '></div> : null}
                <div className={showModal ? 'z-10' : 'z-50'}>
                    <img
                        className='w-24 xs:w-28 md:w-36 md:mt-6 ml-4 mt-4 md:ml-7' 
                        src={image}
                        alt='Tinder logo' />
                </div>
                <div className={showModal ? 'absolute z-10 flex right-0 items-center top-0 md:mt-5 mt-3 capitalize md:uppercase tracking-tight md:tracking-wide' : 'absolute z-50 flex right-0 items-center top-0 md:mt-5 mt-3 capitalize md:uppercase tracking-tight md:tracking-wide'}>
                    <div 
                        className='text-white hover:text-pink-500 flex items-center cursor-pointer'>
                        <PublicIcon className='mr-1 md:mr-2'
                            style={{fontSize: 15}} />
                        <p className='font-normal mr-5 md:mr-10 xs:text-lg text-base'> english</p>
                    </div>
                    <button className='bg-white hidden md:block font-semibold px-6 py-2 mr-8 rounded-md focus:outline-none hover:text-white border border-transparent bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500'
                        style={{color: '#fd5068' }}
                        onClick={() => setShowModal(true)}>
                            LOG IN
                    </button>
                </div>
            </div>
            <div className='flex w-full justify-center fixed z-50'>
                <LoginModal showModal={showModal} closeModal={closeModal} />
            </div>
        </>
    )
}

export default Header;
