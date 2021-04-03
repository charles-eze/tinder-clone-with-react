import React from 'react';
import { FaApple, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

function Footer() {
    return (
        <footer className='px-5'>
            <div className='grid grid-cols-5 mb-3 text-gray-900 cursor-pointer'>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-bold pb-4'>SAFETY</h2>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Community Guidelines</a>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Safety Tips</a>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>{'Safety & Policy'}</a>
                    <a  className='pb-2 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Security</a>
                </div>
                <div className='flex flex-col '>
                    <h2 className='text-xl font-bold pb-4'>LEGAL</h2>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Privacy</a>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Terms</a>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Cookie Policy</a>
                    <a  className='pb-2 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Intellectual Property</a>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-bold pb-4'>CAREERS</h2>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Careers Portal</a>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Tech Blog</a>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-bold pb-4'>SOCIAL</h2>
                    <div className='flex text-2xl'>
                        <FaInstagram className='mr-4 hover:text-red-500' />
                        <SiTiktok className='mr-4 hover:text-red-500'/>
                        <FaYoutube className='mr-4 hover:text-red-500'/>
                        <FaTwitter className='mr-4 hover:text-red-500'/>
                        <FaFacebookF className='hover:text-red-500' />             
                    </div>
                </div>
                <div className='flex flex-col'>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Press Room</a>                  
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Contact</a>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Subscription Tiers</a>
                    <a  className='pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Support</a>
                    <a  className='pb-2 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Promo Code</a>
                </div>
            </div>
            <div className='border-b border-gray-300 w-full mb-4 '></div>
            <section>
                <div className='text-gray-900 flex items-center mb-4 '>
                    <h2 className='text-xl font-bold pr-3'>GET THE APP!</h2>
                    <button className='rounded-3xl mr-3 py-2.5 px-8 focus:outline-none border border-gray-300'> 
                        <FaApple 
                            className='text-3xl text-gray-400' /> </button>
                    <button className='rounded-3xl mr-3 py-2.5 px-4  focus:outline-none border border-gray-300'>
                        <img 
                            className='h-7 w-16'
                            src='https://tinder.com/static/build/m/2fa244bb439bc1acae27b16d5ee604e0.svg'
                                alt='Androif icon' /> </button>
                </div>
                <p className='mb-3 text-sm leading-snug text-gray-700'>{"Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks."}</p>
                <p className='mb-3 text-sm leading-snug text-gray-700 '>{"There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between."}</p>
            </section>
            <div className='border-b border-gray-200 w-full mb-4'></div>
            <section>
                <div>
                    <a href='https://github.com/charles-eze/tinder-clone-with-react'>Safety Tips</a>
                    <a href='https://github.com/charles-eze/tinder-clone-with-react'>Terms</a>
                    <a href='https://github.com/charles-eze/tinder-clone-with-react'>Cookie Policy</a>
                    <a href='https://github.com/charles-eze/tinder-clone-with-react'>Privacy Settings</a>
                    
                </div>
                <div>
                    <p>hi</p>
                </div>
            </section>         
        </footer>
    )
}

export default Footer;
