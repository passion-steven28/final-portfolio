import Image from "next/image"
import ProjectComp from "./reused/ProjectComp"


export default function Project(){
    return(
        <section className=' min-h-screen flex flex-col items-start justify-center gap-2 my-2 w-full0'>
            <div className=" w-full">
                <h1 className='text-4xl font-bold'>Project</h1>
            </div>

            <div className='border-2 border-black flex flex-col items-start justify-between gap-2 w-full'>
                <div className='border-b-2 border-black w-full p-2'>
                    <h1 className='text-xl md:text-6xl font-medium'>get to know me better.</h1>
                </div>

                <div className="flex items-center justify-center">
                    <Image src='/projectBg.jpeg' width={900} height={900} alt="image" className=" object-cover w-full" />
                </div>
            </div>

            <div>
                <ProjectComp />
            </div>
        </section>
    )
}