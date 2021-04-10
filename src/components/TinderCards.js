import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../firebase';
import SwipeButtons from './SwipeButtons';

function TinderCards() {
    const [tinderUsers, setTinderUsers] = useState([]);

    useEffect(() => {

      const unsubscribe = database.collection('tinderUsers')
      .onSnapshot(snapshot => (
          setTinderUsers(snapshot.docs.map(doc => doc.data()))
      ));
      return () => {
          unsubscribe();  //    unsubscribe unmounts the component after it gets rendered to avoid re-rendering.
      };  
    }, []);

    return (
        <div className='flex items-center md:absolute md:right-56 lg:right-72 xl:left-80 flex-col'>
            <div className='flex justify-center md:mt-4'>
            {tinderUsers.map(tinderUser => (
                <TinderCard
                    className='absolute'
                    key={tinderUser.name}
                    preventSwipe={['up', 'down']}>
                    <div 
                        style={{backgroundImage: `url(${tinderUser.url})`, width: '92vw', maxWidth: '95vw', height: '75vh'}}
                        className='card relative p-5 rounded-xl bg-center bg-cover shadow-lg md:w-96 flex'>
                        <h3 className='absolute bottom-2.5 font-semibold text-lg text-white'>{tinderUser.name}</h3>
                    </div>

                </TinderCard>
            ))}
                <div className='hidden md:flex items-center md:right-0 justify-center '>
                    <SwipeButtons /> 
                </div>
           </div>
           
             
        </div>
    )
}

export default TinderCards;
