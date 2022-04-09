import React from 'react';
import { Link } from 'react-router-dom';
import Common from './Share/Common';

const Contact = () => {
    return (
        <>
            <Common text="Contact Us" pra="One Step Above X Your Dream Event." img="https://scelebration.com/wp-content/uploads/elementor/thumbs/wedding-counseling2-p5h2gfh30kof2qlpe28c3kuqd52l9p0ey2dqgmekkg.jpg" />
            <section className='bg-bg-color px-5'>
                <div className='container  flex py-16'>
                    <div className='w-1/2'>
                        <h5 className='heading mb-4 text-6xl'>Contact Form</h5>
                        <form >
                            <label className='w-full ' htmlFor="name">Name</label>
                            <div className="flex gap-3  my-2">
                                <div className='w-1/2'>
                                    <input className='w-full border-2 py-2 px-5 focus:outline-none focus:border-sky-500' type="text" name="name" id="name" />
                                    <label htmlFor="lastName">First</label>
                                </div>

                                <div className='w-1/2'>
                                    <input className='w-full border-2 py-2 px-5 focus:outline-none focus:border-sky-500' type="text" name="lastName" id="lastName" />
                                    <label htmlFor="lastName">Last</label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input className='w-full border-2 py-2 px-5 focus:outline-none focus:border-sky-500 my-2' type="email" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="sms">Message</label>
                                <textarea className='w-full h-48 border-2 py-2 px-5 focus:outline-none focus:border-sky-500 mt-2' name="sms" id="sms" />
                            </div>
                        </form>
                    </div>
                    <div className='w-1/2 ml-8 space-y-5'>
                        <h1 className='heading text-6xl'>Every love story is beautiful, but yours should be unique.</h1>
                        <p className='font-semibold text-gray-500'>All we know at the start is that Scelebration takes every project seriously and creates a magic for the clients.</p>
                        <p className='sub-heading'>32 A, Dhuleshwar Garden, <br />
                            C-Scheme, Jaipur</p>
                        <p className='text-text-sub font-semibold text-xl'>+91 98294 44440 <br /> contact@scelebration.com</p>
                        <ul className='flex space-x-4 items-center mt-5 md:mt-0'>
                            <Link to='/'>
                                <i className='text-slate-50 fa-brands fa-instagram text-2xl w-10  h-10 bg-orange-400  rounded-full pt-2 text-center  transition-all  cursor-pointer'></i>
                            </Link>
                            <Link to='/'>
                                <i className='text-slate-50 fa-brands fa-facebook-f text-2xl w-10  h-10 bg-orange-400  rounded-full pt-2 text-center  transition-all  cursor-pointer'></i>
                            </Link>
                            <Link to='/'>
                                <i className='text-slate-50 fa-brands fa-twitter text-2xl w-10  h-10 bg-orange-400  rounded-full pt-2 text-center  transition-all  cursor-pointer'></i>
                            </Link>
                            <Link to='/'>
                                <i className='text-slate-50 fa-brands fa-pinterest text-2xl w-10  h-10 bg-orange-400  rounded-full pt-2 text-center  transition-all  cursor-pointer'></i>
                            </Link>
                        </ul>
                    </div>

                </div>
            </section>
            <section>
                
            </section>

        </>
    );
};

export default Contact;