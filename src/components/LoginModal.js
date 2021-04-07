import React from 'react';
import image from '../images/Tinder-small-logo.jpg';
import { CgCloseO } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';
import { BsChatFill } from 'react-icons/bs';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';


function LoginModal({ showModal, closeModal }) {

   
    return (
        <div className='absolute z-50 select-none h-screen xl:w-1/3 md:w-8/12 w-full'
            style={{display : showModal ? 'block' : 'none'}}>
            <Zoom top>
                <div className='bg-white md:rounded-lg border mb-96 border-transparent md:mt-3.5  mx-auto'
                    style={{height: '96%'}}>
                    <div onClick={closeModal}
                        className='flex justify-end cursor-pointer text-3xl text-gray-300 mt-4 mr-4'>
                        <CgCloseO />
                    </div>
                    <div className='flex justify-center flex-col w-full text-gray-900 px-5 md:px-11'>
                        <div className='w-full justify-center flex '>
                            <img
                            className='w-10 '
                            src={image}
                            alt='Tinder Logo' />
                        </div>
                        <h2 className=' text-center my-5 text-2xl italic font-bold text-gray-800 tracking-wide '>CREATE ACCOUNT</h2>
                        <p className='xs:px-4 md:px-0 mb-5 text-sm'>{'By clicking Log In, you agree to our '}
                            <a  href='https://github.com/charles-eze/tinder-clone-with-react'
                                className='underline hover:no-underline'>Terms</a>{'. Learn how we process your data in our '}
                            <a  href='https://github.com/charles-eze/tinder-clone-with-react'
                                className='underline hover:no-underline'>Privacy Policy</a>{' and '} 
                            <a  href='https://github.com/charles-eze/tinder-clone-with-react'
                                className='underline hover:no-underline'>Cookie Policy</a>.</p>
                        <div className='xs:px-16 md:px-0 w-full flex flex-col'>
                            <Link to='/app'
                                className='flex mb-3 mx-0.5 py-3 items-center  text-gray-600 hover:text-gray-900 text-base font-semibold focus:outline-none border-2 border-gray-700 rounded-3xl'>
                                    <img 
                                        className='h-6 w-16 mr-7'
                                        src='https://tinder.com/static/build/m/143e05ff53bb18f3504332bca8beb85e.svg'
                                            alt='Android icon' /> LOG IN WITH GOOGLE</Link>
                            <button
                                className='flex mb-3 mx-0.5 py-3 items-center text-gray-600 hover:text-gray-900 text-base font-semibold focus:outline-none border-2 border-gray-700 rounded-3xl'>
                                    <img 
                                        className='h-6 w-16 mr-7'
                                        src='http://tinder.com/static/build/m/607412d0d342547e47e3935a57b79940.svg'
                                            alt='Android icon' /> LOG IN WITH FACEBOOK</button>
                            <button
                                className='flex mb-5 mx-0.5 py-3 items-center text-gray-600 hover:text-gray-900 text-base font-semibold focus:outline-none border-2 border-gray-700 rounded-3xl'>
                                    <BsChatFill 
                                    className='text-2xl ml-5 mr-7 text-gray-500 hover:text-gray-900' /> LOG IN WITH PHONE NUMBER</button>
                        </div>
                        <a  href='https://github.com/charles-eze/tinder-clone-with-react'
                            className='underline text-center text-sm mb-5'>Trouble Logging In?</a>
                        <div className='hidden md:block border-b border-gray-200 mb-5'></div>
                        <h2 className='hidden md:block text-center text-2xl italic mb-5 font-bold tracking-wide text-gray-800'>GET THE APP!</h2>
                        <div className='md:flex hidden '>
                            <button className='rounded-3xl ml-4 mr-5  py-2 px-4 flex justify-center w-full focus:outline-none border border-gray-300'>
                                <FaApple 
                                    className='text-3xl text-gray-400' />
                            </button>
                            <button className='rounded-3xl mr-5 py-2 px-4 w-full flex justify-center focus:outline-none border border-gray-300'>
                                <img 
                                    className='h-7 w-16'
                                    src='https://tinder.com/static/build/m/2fa244bb439bc1acae27b16d5ee604e0.svg'
                                        alt='Android icon' />
                            </button>
                        </div>

                    </div>
                </div>
                <div className='h-14 md:hidden bg-white absolute bottom-0  w-full'></div> 
            </Zoom>  
        </div>
    )
};

export default LoginModal;
