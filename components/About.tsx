import React from 'react'

export default function About() {
  return (
    <section className='min-h-screen flex flex-col items-start justify-center gap-2'>
      <div>
        <h1 className='text-4xl font-bold'>about</h1>
      </div>

      <div className='border-2 border-black p-2 flex flex-col items-start justify-between gap-2'>
        <div className='border-2 border-black w-full p-2'>
          <h1 className='text-xl md:text-6xl font-medium'>get to know me better.</h1>
        </div>

        <div className='border-2 border-black flex items-center justify-between w-full'>
          <div className='p-2 border-r-2 border-black w-full'>
            <h2 className='text-2xl font-medium'>passion steven</h2>
          </div>
          <div className='p-2 w-full'>
            <h2 className='text-2xl font-medium'>software developer</h2>
          </div>
        </div>

        <div className='border-2 border-black p-2'>
          <p className='text-md'>I am a dedicated and ambitious student at the Collage of Business and Education pursuing a degree in Information Technology. With a strong passion for technology and software development, I have embarked on a journey to expand my knowledge and skills in the world of IT.
            My journey began with a fascination for coding, particularly in JavaScript, and has since evolved into a deep-seated interest in problem-solving and software development. I am committed to continuous learning, always seeking new challenges and opportunities to further hone my expertise.
          </p>

          <ul className='mt-4 font-semibold text-sm md:text-lg list-disc list-inside'>
            <li>👋 IT student at Collage of Business and Education</li>
            <li>😛 im a very curious person</li>
            <li>🐊 Committed to continuous learning and growth</li>
            <li>🏌️‍♂️ Received first diploma certificate in 2023</li>
          </ul>
        </div>
      </div>
    </section>
  );
}