'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_z0a58ga', 'template_bw5m3lb', form.current, 'NzNXcYVjwUERRuA4F')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <section className=' min-h-screen flex flex-col items-start justify-center gap-2' id='contact'>
            <div>
                <h1 className='text-4xl font-bold'>about</h1>
            </div>

            <div className='flex items-start justify-between gap-2 flex-col md:flex-row'>
                <div>
                    <h1 className='text-3xl md:text-6xl font-semibold'>lets create something great <span>together</span></h1>
                </div>

                <div className='md:w-9/12'>
                    <form ref={form} onSubmit={sendEmail} className='border-2 border-black p-4 shadow02 flex items-start justify-between gap-2 flex-col w-full'>
                        <div className='flex items-center justify-between gap-4 space-y-4 w-full'>
                            <label className='text-2xl font-medium uppercase' htmlFor="name">Name:</label>
                            <input type="text" className=' outline-none border-2 border-black px-2 focus:border-blue-600 transition-all ease-in-out rounded w-full' name="user_name" />
                        </div>
                        <div className='flex items-center justify-between gap-4 space-y-4 w-full'>
                            <label className='text-2xl font-medium uppercase' htmlFor="email">Email:</label>
                            <input type="email" className=' outline-none border-2 border-black px-2 focus:border-blue-600 transition-all ease-in-out rounded w-full' name="user_email" />
                        </div>
                        <div className='w-full'>
                            <textarea name="message" id="message" placeholder="say HI!" className=' outline-none border-2 border-black font-medium w-full p-4 rounded'></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Send" className='text-2xl font-mono bg-black text-white p-2 px-3 rounded-full active:scale-[0.9] custom-button' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
