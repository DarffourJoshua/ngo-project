'use client';
import imgSrc from "./imageURLs";
import CardWithImg from "./cardwithImg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const ProjectOne = () => {
    const projectImg = imgSrc.slice(0, 3);
    const projectTitle = [
        <h3 key={'head'} className="font-bold text-center" >Support Kids</h3>, 
        <h3 key={'head'} className="font-bold text-center">Promote Education</h3>, 
        <h3 key={'head'} className="font-bold text-center">Stop Child labour</h3>
    ];
    const projectDescription = [
        <p key={'desc'} className="text-center">Support kids in need of <br/>education and basic necessities</p>,
        <p key={'desc'} className="text-center">Promote education in rural areas<br/> and provide scholarships</p>,
        <p key={'desc'} className="text-center">Stop child labour and provide <br/>free education to children</p>
    ];
    return (
        <section id='about'className=" flex flex-col gap-2 bg-lime-300 rounded mx-4 md:mx-12 p-8">
            <h2 className="text-base sm:text-2xl font-bold text-center">
                What is our mission?
            </h2>
            
            <article className="hidden sm:flex sm:justify-around mt-8  ">
                {
                    projectImg.map((item, index) => {
                        return ( // Make sure to return JSX here
                            <CardWithImg
                                key={index}
                                title={projectTitle[index]}
                                figcaption={projectDescription[index]}
                                src={item.src}
                                divStyle=""
                                imgStyle={
                                    {   objectFit:"cover", 
                                        marginLeft:"5rem", 
                                        // marginRight:"1rem",
                                        width:'50%', 
                                        height:'70%',
                                        borderRadius: '80%',
                                    }
                                }
                                w={item.w}
                                h={item.h}
                            />
                        );
                    })
                }
            </article>
            <Carousel 
                showArrows={false} 
                showThumbs={false}
                showStatus={false}
                className="sm:hidden"
            >
            {
                    projectImg.map((item, index) => {
                        return ( // Make sure to return JSX here
                            <CardWithImg
                                key={index}
                                title={projectTitle[index]}
                                figcaption={projectDescription[index]}
                                src={item.src}
                                divStyle="w-40 h-50 p-1"
                                imgStyle={
                                    {   objectFit:"cover", 
                                        marginLeft:"auto", 
                                        marginRight:"auto", 
                                        width:'40%', 
                                        height:'60%',
                                        borderRadius: '100%',
                                    }
                                }
                                w={item.w}
                                h={item.h}
                            />
                        );
                    })
                }
            </Carousel>
        </section>
    );
}

export default ProjectOne;
