'use client';
import imgSrc from "./imageURLs";
import CardWithImg from "./cardwithImg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Team = () => {
const teamImg = imgSrc.slice(-4);
    const teamNames = ["John Doe", "Jane Doe", "John Smith", "Jane Smith"];
    const aboutMember = ['CEO', 'COO', 'CTO', 'CFO'];
    return (
        <section className="flex flex-col items-center gap-2 py-2">
            <h2 className="text-xl font-bold text-center mb-1">Meet Our Team</h2>
            <p className="text-center text-xs md:text-base max-w-xl mb-1">
                We are a team of dedicated individuals passionate about providing free education to children in rural areas.
            </p>
            <article className="hidden sm:grid sm:grid-cols-4 ">
                {teamImg.map((item, index) => (
                        <CardWithImg
                            key={index}
                            title={teamNames[index]}
                            figcaption={aboutMember[index]}
                            src={item.src}
                            divStyle="w-40 h-50 p-4"
                            imgStyle={
                                {   objectFit:"cover", 
                                    marginLeft:"auto", 
                                    marginRight:"auto", 
                                    width:'100%', 
                                    height:'100%',
                                    borderRadius: '0.4rem',
                                }
                            }
                            w={item.w}
                            h={item.h}
                        />
                    ))}
            </article>

            <Carousel 
                showArrows={false} 
                showThumbs={false}
                showStatus={false}
                axis="vertical" 
                className="sm:hidden"
            >
                {teamImg.map((item, index) => (
                    <CardWithImg
                    key={index}
                    title={teamNames[index]}
                    figcaption={aboutMember[index]}
                    src={item.src}
                    divStyle="w-40 h-50 p-4"
                    imgStyle={
                        {   objectFit:"cover", 
                            marginLeft:"auto", 
                            marginRight:"auto", 
                            width:'100%', 
                            height:'100%',
                            borderRadius: '0.4rem',
                        }
                    }
                    w={item.w}
                    h={item.h}
                    />
                ))}
            </Carousel>
        </section>
    );
};

export default Team;