'use client'
import Image from 'next/image'
import Btn from '@/components/reused/Btn'
import { FaYoutubeSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';



export const Hero = () => {
    return (
        <section className='px-4 md:px-10 min-h-screen flex items-center justify-center flex-col relative'>
            <div className='flex items-center justify-between w-full gap-4 flex-col-reverse md:flex-row'>
                <div className='flex flex-col gap-2 w-ful'>
                    <h1 className='text-lg md:text-2xl font-medium'>hi! my name is passion steven</h1>
                    <TypeAnimation
                        sequence={[
                            'passionate developer', 1000,
                            'Turning Lines of Code into Impactful Solutions', 1000,
                            'Exploring the World of Software', 1000,
                            'Unveiling the World of Web and Apps', 1000,
                            'Your Ideas, My Code, Endless Possibilities', 1000
                        ]}
                        style={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                        }}
                        repeat={Infinity}
                    />
                    <h2 className='text-xl md:text-3xl font-medium'>im a software developer and UX/UI designer</h2>
                    <div className='mt-4'>
                        <a
                            href="/files/try.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl md:text-2xl font-mono bg-black text-white p-2 px-3 rounded-full active:scale-[0.9] custom-button"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                <div className='w-[40%] flex items-center justify-center'>
                    <Image src='/images/my-profile.jpg' width={300} height={300} alt='profile' />
                </div>
            </div>

            <div className='absolute bottom-10 w-full'>
                <div className='flex items-center justify-between gap-2 w-full'>
                    <hr className='w-full border-2 border-black' />
                    <ul className='flex items-center justify-between gap-2'>
                        <li><FaGithubSquare size={30} /></li>
                        <li><FaLinkedin size={30} /></li>
                        <li><FaYoutubeSquare size={30} /></li>
                    </ul>
                    <hr className='w-full border-2 border-black' />
                </div>
            </div>
        </section>
    )
}