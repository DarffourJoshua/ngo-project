'use client';
import imgSrc from "./imageURLs";
import Card from "./card";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectTwo = () => {
    const projectTwoImg = imgSrc.slice(4, 10);
    const projectDesc = [
        <p key="desc1" className="text-center font-extrabold">
            Help Turkey and Syria <br/> 
            <span className='text-lime-500'>Earthquake Relief fund</span>
        </p>,
        <p key="desc2" className="text-center font-extrabold">Healthcare for children <br/> in 
            <span className='text-lime-500'> Africa</span>
        </p>,
        <p key="desc3" className="text-center font-extrabold">
            Flood in <span className='text-lime-500'>India</span>
        </p>,
        <p key="desc4" className="text-center font-extrabold">Help 
            <span className='text-lime-500'>Afghanistan</span>
        </p>,
        <p key="desc5" className="text-center font-extrabold">
            Help poor children <br/> in <span className='text-lime-500'>Pakistan</span>
        </p>,
        <p key="desc6" className="text-center font-extrabold"><span className='text-lime-500'>Child Labour</span> in world</p>
    ];
    
    const imgStyle = [
        'object-cover w-24 h-48 sm:w-4/5 sm:h-56 rounded-2xl grayscale',
        'object-cover w-28 h-48 sm:w-4/5 sm:h-40 rounded-2xl grayscale',
        'object-cover w-28 h-48 sm:w-4/5 sm:h-2/5 rounded-2xl grayscale',
        'object-cover w-28 h-48 sm:w-4/5 sm:h-2/5 rounded-2xl grayscale',
        'object-cover w-28 h-48 sm:w-4/5 sm:h-44 rounded-2xl grayscale',
        'object-cover w-28 h-48 sm:w-4/5 sm:h-60 rounded-2xl grayscale'
    ]

    const mainDivStyle = [
        'text-slate-100  md:translate-x-12',
        'text-slate-100 ',
        'text-slate-100 md:-translate-x-12 ',
        'text-slate-100 md:translate-y-4 md:translate-x-12 ',
        'text-slate-100 md:-translate-y-14 md:-translate-y-12',
        'text-slate-100  md:-translate-y-32 md:-translate-x-12 ',
    ]

    const minorDiv = 'font-bold text-center translate-y-8  md:-translate-y-full md:-translate-x-20';

    return (
        <section id="project" className="my-8 ">
            <h2 className="font-bold text-center text-bold sm:text-xl my-2">We appreciate your little help</h2>
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