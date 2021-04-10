import React from 'react';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { NavLink } from 'react-router-dom';
import Messages from './Messages';

const SideBar = () => {
    return (
        <div className='hidden md:flex absolute flex-col left-0  top-0 h-screen md:w-5/12 xl:w-3/12 border-r border-solid border border-gray-200 '>
            <div className='w-full flex items-center justify-between px-6'
                style={{background: '#fd5068', height: '70px'}}>
                <div className='flex items-center'>
                    <img 
                        className='h-10 w-10 rounded-full mr-4'
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mCyTdVerlZkBa4mPc5wDWUXmbGcIuxaN-1FJ1kJ8BS6rq7vrD1B4Rm33wgyRRTFccwQ&usqp=CAU'}
                            alt='user' />
                    <h1 className='text-gray-100 font-medium'
                        style={{fontSize: '22px'}}>My Profile</h1>   
                </div>
                <span className=' h-9 w-9 border-solid border-gray-50 border rounded-full flex items-center justify-center'>
                    <BusinessCenterIcon 
                        className='text-white' />
                </span>
            </div>
            <div className='flex py-3'> 
                <div>
                   <NavLink
                        to='/chat' 
                        className=' font-bold text-gray-800 mx-7' >
                            Messages
                    </NavLink>
                    <Messages />
                </div>
            </div>
        </div>

    )
}

export default SideBar;
