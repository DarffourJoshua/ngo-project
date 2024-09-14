'use client';
import Image from "next/image";
import Button from "./button";
import imgSrc from "./imageURLs";

const Contact = () => {
    const contactImg = imgSrc.slice(-8, -4);
    // console.log(contactImg);
    return (
        <section id="contact" className="flex justify-center gap-20 items-start my-8">
               <div className="hidden md:block">
                    <Image 
                        src={contactImg[0].src} 
                        height={contactImg[0].h} 
                        width={contactImg[0].w} 
                        alt="contact"
                        className="rounded-lg mb-8"
                    />
                    <Image 
                        src={contactImg[1].src} 
                        height={contactImg[1].h} 
                        width={contactImg[1].w} 
                        alt="contact"
                        className="rounded-lg mt-8" 
                    />
               </div>
            
                <div className="text-center w-1/2 md:2/3">
                    <p >
                        Join our community for donating and be a part of a positive
                        change in the world. We are looking forward to hearing from you
                    </p>
                    <p className="mt-4">
                        With over a 100,000 members 
                    </p>
                    <Button 
                        style={"bg-gray-800 text-white text-xs rounded-2xl my-1 px-4 py-2"}
                        text={"Yes, I want to make an impact"}
                    />
                </div>
                <div className="hidden md:block">
                    <Image 
                        src={contactImg[2].src} 
                        height={contactImg[2].h} 
                        width={contactImg[1].w} 
                        alt="contact"
                        className="rounded-lg mb-8"
                    />
                    <Image 
                        src={contactImg[3].src} 
                        height={contactImg[3].h} 
                        width={contactImg[3].w} 
                        alt="contact"
                        className="rounded-lg mt-8"
                    />
                </div>
            
        </section>
    );
}

export default Contact;