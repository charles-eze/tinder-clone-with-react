import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

function Feedback() {
    const Container = styled.li`
    
    overflow: hidden;

    `;

    const CarouselUI = ({ children }) => <Container>{children}</Container>;
    const Carousel = makeCarousel(CarouselUI);

        return (
        <Carousel defaultWait={1000}>
            <ul className='flex'>
                <Slide right>
                    <li className='h-2/6 w-96 border border-gray-300 rounded-md m-3 shadow-xl'>
                        <figure>
                            <figcaption>{'Shannon & Julian'}</figcaption>
                            <hr></hr>
                            <blockquote className='p-7'>
                                I was feeling lonely back in my hometown because most of my friends had started romantic relationships 
                                while I was abroad. We both decided to download Tinder and see what happened. Without the app we may 
                                have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other 
                                couples together around the world. I will forever be grateful.
                            </blockquote>
                        </figure>
                    </li> 
                </Slide>
                <Slide right>
                    <li className='h-2/6 w-96 border border-gray-300 rounded-md m-3 shadow-xl'>
                        <figure>
                            <figcaption>{'Shannon & Julian'}</figcaption>
                            <hr></hr>
                            <blockquote className='p-7'>
                                I was feeling lonely back in my hometown because most of my friends had started romantic relationships 
                                while I was abroad. We both decided to download Tinder and see what happened. Without the app we may 
                                have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other 
                                couples together around the world. I will forever be grateful.
                            </blockquote>
                        </figure>
                    </li>
                </Slide>
                <Slide right> 
                    <li className='h-2/6 w-96 border border-gray-300 rounded-md m-3 shadow-xl'>
                        <figure>
                            <figcaption>{'Shannon & Julian'}</figcaption>
                            <hr></hr>
                            <blockquote className='p-7'>
                                I was feeling lonely back in my hometown because most of my friends had started romantic relationships 
                                while I was abroad. We both decided to download Tinder and see what happened. Without the app we may 
                                have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other 
                                couples together around the world. I will forever be grateful.
                            </blockquote>
                        </figure>
                    </li> 
                </Slide>
                <li className='h-2/6 w-96 border border-gray-300 rounded-md m-3 shadow-xl'>
                    <figure>
                        <figcaption>{'Shannon & Julian'}</figcaption>
                        <hr></hr>
                        <blockquote className='p-7'>
                            I was feeling lonely back in my hometown because most of my friends had started romantic relationships 
                            while I was abroad. We both decided to download Tinder and see what happened. Without the app we may 
                            have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other 
                            couples together around the world. I will forever be grateful.
                        </blockquote>
                    </figure>
                </li> 
                <li className='h-2/6 w-96 border border-gray-300 rounded-md m-3 shadow-xl'>
                    <figure>
                        <figcaption>{'Shannon & Julian'}</figcaption>
                        <hr></hr>
                        <blockquote className='p-7'>
                            I was feeling lonely back in my hometown because most of my friends had started romantic relationships 
                            while I was abroad. We both decided to download Tinder and see what happened. Without the app we may 
                            have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other 
                            couples together around the world. I will forever be grateful.
                        </blockquote>
                    </figure>
                </li> 
               
            </ul>
        </Carousel>
    )
}

export default Feedback;
