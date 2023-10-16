import Image from "next/image";
import Link from "next/link";
import Btn from '@/components/reused/Btn'


type Project = {
    id: number;
    title: string;
    source: string;
    url: string;
    github: string;
    type: string;
    desc: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: 'Tambuli',
        source: '/images/pro01.png',
        url: 'https://agent-henna.vercel.app/',
        github: 'https://github.com/passion-steven28/new',
        type: 'agent website',
        desc: 'this website i created using next js which is the frame work of react and im also using tailwinds css in styling.',
    },
    {
        id: 2,
        title: 'polaroid',
        source: '/images/pro01.png',
        url: 'https://agent-henna.vercel.app/',
        github: 'https://github.com/passion-steven28/new',
        type: 'E-commerce',
        desc: 'Project about the product in the product store and the product description',
    },
    {
        id: 3,
        title: 'polaroid',
        source: '/images/pro01.png',
        url: 'https://agent-henna.vercel.app/',
        github: 'https://github.com/passion-steven28/new',
        type: 'E-commerce',
        desc: 'Project about the product in the product store and the product description',
    },
    {
        id: 4,
        title: 'polaroid',
        source: '/images/pro01.png',
        url: 'https://agent-henna.vercel.app/',
        github: 'https://github.com/passion-steven28/new',
        type: 'E-commerce',
        desc: 'Project about the product in the product store and the product description',
    },
];

export default function ProjectComp() {
    return (
        <div className=' min-h-screen flex flex-col items-start justify-center gap-2 my-10'>
            {projects.map((project) => (
                <div key={project.id} className='my-8 w-full'>
                    <div>
                        <h1 className='text-4xl font-bold'>0{project.id}.</h1>
                    </div>

                    <div className='border-2 border-black flex flex-col items-start justify-between gap-2 overflow-hidden'>
                        <div className='border-b-2 border-black w-full p-2 flex justify-between items-center'>
                            <h1 className='text-2xl md:text-6xl font-medium'>{project.title}.</h1>
                            <div className="flex justify-between gap-2">
                                <Link href={project.url}> <Btn label="visit" className="custom-button" /></Link>
                                <Link href={project.github}><Btn label="code" className="custom-button" /></Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center overflow-hidden border-b-2 border-black w-full">
                            <Image src={project.source} width={900} height={900} alt="image" className=" object-cover w-full h-full hover:scale-[1.05] transition-all ease-in-out cursor-pointer" />
                        </div>

                        <div className="flex items-center justify-between gap-2 p-2 w-full">
                            <h1 className="text-xl md:text-2xl font-medium w-full">{project.type}</h1>
                            <p className="text-sm md:text-2xl font-lg w-full">{project.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
