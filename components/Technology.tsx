import { FaReact } from 'react-icons/fa';
import { BsWordpress } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoTypescript, BiLogoFirebase, BiLogoVisualStudio, BiLogoPostgresql, BiLogoFigma, BiLogoTailwindCss } from 'react-icons/bi';

export default function Technology() {
    return (
        <section className='min-h-screen flex gap-2 justify-center flex-col'>
            <div>
                <h1 className='text-4xl font-bold'>Technology</h1>
            </div>

            <div className="grid border-2 border-black">
                <h1 className='text-xl md:text-6xl font-medium border-black border-b-2'>Technologies im Proficient With</h1>

                <div className='flex flex-wrap items-center justify-between gap-4 p-2'>
                    <div className='flex items-center justify-center flex-col last'>
                        <FaReact size={50} />
                        <span className='text-2xl font-medium'>React.js</span>
                    </div> 
                    <div className='flex items-center justify-center flex-col'>
                        <BiLogoTypescript size={50} />
                        <span className='text-2xl font-medium'>TypeScript</span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <BiLogoFirebase size={50} />
                        <span className='text-2xl font-medium'>Firebase</span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <BsWordpress size={50} />
                        <span className='text-2xl font-medium'>WordPress</span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <AiFillGithub size={50} />
                        <span className='text-2xl font-medium'>GitHub</span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <BiLogoVisualStudio size={50} />
                        <span className='text-2xl font-medium'>Visual Studio Code</span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <BiLogoPostgresql size={50} />
                        <span className='text-2xl font-medium'>postgresql</span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <BiLogoFigma size={50} />
                        <span className='text-2xl font-medium'>Figma</span>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <BiLogoTailwindCss size={50} />
                        <span className='text-2xl font-medium'>Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
