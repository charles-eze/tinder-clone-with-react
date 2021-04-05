import React from 'react';
import Feedback from './Feedback';
import Footer from './Footer';
import LoginModal from './LoginModal';


function Home() {
    return (
        <div className=' select-none'>
            <div className='bg-hero-pattern fixed bg-cover min-w-full min-h-full z-0'>
                <div className=' bg-opacity-50 bg-black -mt-14 bg-gradient-to-t h-screen from-transparent via-transparent to-black z-0'></div>
                <div className='bg-opacity-50 bg-black h-14'></div>
            </div>
            <div className='h-screen relative'>
                <div className=' md:top-16 text-white absolute flex flex-col justify-center inset-0 items-center tracking-wide xs:tracking-wider'>
                    <div className='flex md:pb-11'>
                        <p className='text-4xl xs:text-6xl md:text-8xl font-bold italic md:not-italic'>Swipe Right</p>
                        <span className='font-normal text-2xl italic xs:text-4xl md:text-7xl md:mt-2 md:-ml-2'>®</span>
                    </div>
                    <buttton
                        className='font-medium hidden md:block tracking-wider px-12 py-3.5 rounded-3xl cursor-pointer hover:bg-red-400 focus:outline-none border border-transparent'
                        style={{background: '#fd5068',}}>
                        CREATE ACCOUNT
                    </buttton>
                    <LoginModal />
                    <div className='md:hidden absolute container bottom-0 z-50'>
                        <div className='px-7 flex flex-col w-full select-none'> {/* The buttons for the mobile view */}
                            <buttton
                                className='flex justify-center w-full text-sm font-medium text-black tracking-wide  py-3.5 mb-4 rounded-3xl bg-white focus:outline-none border border-transparent'>
                                CREATE ACCOUNT
                            </buttton>
                            <buttton
                                className='flex justify-center w-full text-sm font-medium tracking-wider  py-3.5 mb-4 rounded-3xl focus:outline-none border-2 border-white border-solid'>
                                LOG IN
                            </buttton>
                        </div>
                        <div className='px-28 w-full select-none mb-3 md:hidden'>
                            <buttton
                                className='flex justify-center w-full font-medium  tracking-wider py-2 mb-4 rounded-3xl focus:outline-none border border-transparent bg-white'>
                                <img 
                                className='h-7 w-16'
                                src='https://tinder.com/static/build/m/2fa244bb439bc1acae27b16d5ee604e0.svg'
                                    alt='Android icon' />
                            </buttton>
                        </div>
                        <p className='flex justify-center text-center text-gray-300 font-normal xs:text-xs w-full mt-1 mb-4 '
                            style={{fontSize: 11}} >All photos are of models and used for illustrative purposes only</p>
                    </div>
                     <p className='hidden absolute bottom-0 md:flex text-white items-end font-normal text-xs justify-end w-full mb-4 md:mr-11 '>All photos are of models and used for illustrative purposes only</p>
                </div>


            </div>
            <div className='relative bg-white pl-1.5 pr-1.5 xs:pl-3 xs:pr-3 md:pl-6 md:pr-5 xl:pl-16 xl:pr-14 pb-2 md:pb-4 '>                        
                <Feedback />
            </div>
            <div className='relative bg-white md:px-7 xl:px-16 px-2 -mt-4 '>
                <Footer />
            </div>  
        </div>
    )
}

export default Home;
