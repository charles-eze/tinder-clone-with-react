import React from 'react';
import SideBar from './SideBar';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function MainApp() {
    return (
        <div className='h-screen w-full'>
            <SideBar />
            <TinderCards />
            <div className='md:hidden'>
                <SwipeButtons  />
            </div>
                  
        </div>
    )
}

export default MainApp;
