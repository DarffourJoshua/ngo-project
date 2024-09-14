'use client';
import imgSrc from "./imageURLs";
import Card from "./card";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectTwo = () => {
    const projectTwoImg = imgSrc.slice(4, 10);
    const projectDesc = [
        <p key="desc1" className="text-center text-bold">
            Help Turkey and Syria <br/> 
            <span className='text-lime-500'>Earthquake Relief fund</span>
        </p>,
        <p key="desc2" className="text-center text-bold">Healthcare for children in <span className='text-lime-500'>Africa</span></p>,
        <p key="desc3" className="text-center text-bold">Flood in <span className='text-lime-500'>India</span></p>,
        <p key="desc4" className="text-center text-bold">Help <span className='text-lime-500'>Afghanistan</span></p>,
        <p key="desc5" className="text-center text-bold">Help poor children in <span className='text-lime-500'>Pakistan</span></p>,
        <p key="desc6" className="text-center text-bold"><span className='text-lime-500'>Child Labour</span> in world</p>
    ];
    
    const imgStyle = [
        'object-cover w-28 h-32 sm:w-72 sm:h-56 rounded-2xl grayscale',
        'object-cover w-28 h-32 sm:w-72 sm:h-40 rounded-2xl grayscale',
        'object-cover w-28 h-32 sm:w-72 sm:h-2/5 rounded-2xl grayscale',
        'object-cover w-28 h-32 sm:w-72 sm:h-2/5 rounded-2xl grayscale',
        'object-cover w-28 h-32 sm:w-72 sm:h-40 rounded-2xl grayscale',
        'object-cover w-28 h-32 sm:w-72 sm:h-56 rounded-2xl grayscale'
    ]

    const mainDivStyle = [
        'text-slate-100  sm:translate-x-20',
        'text-slate-100 ',
        'text-slate-100 sm:-translate-x-20 ',
        'text-slate-100 sm:translate-y-4 sm:translate-x-20',
        'text-slate-100 sm:-translate-y-14',
        'text-slate-100  sm:-translate-y-32 sm:-translate-x-20 ',
    ]

    const minorDiv = 'font-bold text-center -translate-y-full sm:-translate-x-10 md:-translate-x-20';

    return (
        <section id="project" className="my-8 ">
            <h2 className="font-bold ml-20 text-bold text-xl my-2">We appreciate your little help</h2>
            <article className="hidden sm:grid sm:grid-cols-3">
                {projectTwoImg.map((item, index) => {
                    return (
                            <Card 
                                key={index}
                                mainDev={mainDivStyle[index]}
                                minorDiv={minorDiv}
                                description={projectDesc[index]}
                                img={
                                    <Image 
                                        src={item.src}
                                        height={item.h}
                                        width={item.w}
                                        alt="project"
                                        className={imgStyle[index]}
                                    />
                                }
                            />
                    )
                })}
            </article>
            <Carousel 
                showArrows={false} 
                showThumbs={false} 
                
                showStatus={false}
                axis="horizontal"
                className="block sm:hidden"
            >
                {projectTwoImg.map((item, index) => {
                    return (
                            <Card 
                                key={index}
                                mainDev={mainDivStyle[index]}
                                description={projectDesc[index]}
                                img={
                                    <Image 
                                        src={item.src}
                                        height={item.h}
                                        width={item.w}
                                        alt="project"
                                        className={imgStyle[index]}
                                    />
                                }
                            />
                    )
                })}
            </Carousel>
        </section>
    );
}

export default ProjectTwo;