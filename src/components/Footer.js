import React from 'react';
import { FaApple, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

function Footer() {
    return (
        <footer className='xl:px-5 md:px-3 px-2 tracking-wider font-normal '>
            <div className='grid md:grid-cols-5 grid-cols-3 gap-3.5 mb-3 text-gray-900 cursor-default'>
                <div className='flex flex-col'>
                    <h2 className='md:text-xl text-lg font-bold pb-4'>SAFETY</h2>
                    <a  className='hidden xs:block md:hidden lg:block xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Community Guidelines</a>
                    <a  className='xs:hidden md:block lg:hidden text-xs md:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Community</a>
                    <a  className='xs:hidden md:block lg:hidden md:text-sm text-xs pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Guidelines</a>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Safety Tips</a>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>{'Safety & Policy'}</a>
                    <a  className='text-xs xs:text-sm pb-8 md:pb-2 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Security</a>
                </div>
                <div className='flex flex-col '>
                    <h2 className='xs:text-xl text-lg font-bold pb-4'>LEGAL</h2>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Privacy</a>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Terms</a>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Cookie Policy</a>
                    <a  className='hidden xs:block md:hidden lg:block text-sm pb-2 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Intellectual Property</a>
                    <a  className='xs:hidden md:block lg:hidden md:text-sm text-xs pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Intellectual</a>
                    <a  className='xs:hidden md:block lg:hidden md:text-sm text-xs pb-8 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Property</a>
                </div>
                <div className='flex flex-col'>
                    <h2 className='xs:text-xl text-lg font-bold pb-4'>CAREERS</h2>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Careers Portal</a>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Tech Blog</a>
                </div>
                <div className='flex flex-col'>
                    <h2 className='xs:text-xl text-lg font-bold md:pb-4 pb-3.5'>SOCIAL</h2>
                    <div className='text-2xl hidden xl:flex'>
                        <FaInstagram className='mr-4 hover:text-red-500' />
                        <SiTiktok className='mr-4 hover:text-red-500'/>
                        <FaYoutube className='mr-4 hover:text-red-500'/>
                        <FaTwitter className='mr-4 hover:text-red-500'/>
                        <FaFacebookF className='hover:text-red-500' />             
                    </div>
                    <div className='xs:hidden flex text-2xl mb-3.5'>
                        <FaInstagram className='mr-4 hover:text-red-500' />
                        <SiTiktok className='mr-4 hover:text-red-500'/>
                    </div>
                    <div className='xs:hidden flex text-2xl mb-3.5'>
                        <FaYoutube className='mr-4 hover:text-red-500'/>
                        <FaTwitter className='mr-4 hover:text-red-500'/>
                    </div>
                    <div className='hidden xl:hidden xs:flex text-2xl mb-3.5'>
                        <FaInstagram className='mr-4 hover:text-red-500' />
                        <SiTiktok className='mr-4 hover:text-red-500'/>
                        <FaYoutube className='mr-4 hover:text-red-500'/>
                        <FaTwitter className='mr-4 hover:text-red-500'/>
                    </div>
                    <div className='xl:hidden flex text-2xl mb-3.5'>
                      <FaFacebookF className='hover:text-red-500' />  
                    </div>
                </div>
                <div className='flex flex-col'>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Press Room</a>                  
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Contact</a>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Subscription Tiers</a>
                    <a  className='text-xs xs:text-sm pb-3 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Support</a>
                    <a  className='text-xs xs:text-sm pb-2 hover:text-red-500'
                        href='https://github.com/charles-eze/tinder-clone-with-react'>Promo Code</a>
                </div>
            </div>
            <div className='border-b border-gray-300 w-full mb-4 '></div>
            <section>
                <div className='text-gray-900 flex items-center mb-4 '>
                    <h2 className='text-xl font-bold pr-3'>GET THE APP!</h2>
                    <button className='hidden md:block rounded-3xl mr-3 py-2.5 px-8 focus:outline-none border border-gray-300'> 
                        <FaApple 
                            className='text-3xl text-gray-400' /> </button>
                    <button className='rounded-3xl mr-3 py-2.5 px-4  focus:outline-none border border-gray-300'>
                        <img 
                            className='h-7 w-16'
                            src='https://tinder.com/static/build/m/2fa244bb439bc1acae27b16d5ee604e0.svg'
                                alt='Android icon' /> </button>
                </div>
                <p className='mb-3 text-xs xs:text-sm leading-snug text-gray-700'>{"Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks."}</p>
                <p className='mb-3 text-xs xs:text-sm leading-snug text-gray-700 '>{"There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between."}</p>
            </section>
            <div className='border-b border-gray-300 w-full mb-5'></div>
            <section className='flex flex-col lg:flex-row items-center lg:justify-between text-gray-900 pb-11'>
                <div className='flex pb-2 lg:p-0 xs:text-sm'
                    style={{fontSize: 10}} >
                    <p className='pr-2'>
                        <a className='hover:text-red-500 pr-2' href='https://github.com/charles-eze/tinder-clone-with-react'>Safety Tips</a>
                    {'/'}
                    </p>
                    <p className='pr-2'>
                        <a className='hover:text-red-500 pr-2' href='https://github.com/charles-eze/tinder-clone-with-react'>Terms</a>
                    {'/'}
                    </p>
                    <p className='pr-2'>
                        <a className='hover:text-red-500 pr-2' href='https://github.com/charles-eze/tinder-clone-with-react'>Cookie Policy</a>
                    {'/'}
                    </p>
                    <a className='hover:text-red-500' href='https://github.com/charles-eze/tinder-clone-with-react'>Privacy Settings</a>
                    
                </div>
                <div className='xs:text-sm'
                    style={{fontSize: 10}}>
                    <p>© {new Date().getFullYear()} Tinder Clone, Developed by Charles Eze.</p>
                </div>
            </section>         
        </footer>
    )
}

export default Footer;
