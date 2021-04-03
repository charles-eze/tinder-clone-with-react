import React from 'react';
import Feedback from './Feedback';
import Footer from './Footer';


function Home() {
    return (
        <div className=' select-none'>
            <div className='bg-hero-pattern fixed bg-cover min-w-full min-h-full z-0'>
                <div className=' bg-opacity-40 bg-black -mt-14 bg-gradient-to-t h-screen from-transparent via-transparent to-black z-0'></div>
                <div className='bg-opacity-40 bg-black h-14'></div>
            </div>
            <div className='relative top-72'>
                <div className='flex flex-col z-50  text-white items-center justify-center w-full'>
                    <div className='mb-11 flex tracking-wider'>  
                        <p className='text-8xl font-bold '>Swipe Right
                        </p>
                        <span className='font-normal text-7xl mt-2 -ml-2'>®</span>
                    </div>
                    <buttton
                        className='font-medium tracking-wider px-12 py-3.5 mb-36 rounded-3xl cursor-pointer hover:bg-red-400 focus:outline-none border border-transparent'
                        style={{background: '#fd5068',}}>
                        CREATE ACCOUNT
                    </buttton>
                    <p className='flex text-white items-end font-normal text-xs justify-end w-full mt-1 mb-4 mr-11 '>All photos are of models and used for illustrative purposes only</p>
                </div>
                <div className='relative bg-white pl-16 pr-14'>                        
                    <Feedback />
                </div>
                <div className='bg-white px-16'>
                    <Footer />
                </div>
            </div>     
        </div>
    )
}

export default Home;
