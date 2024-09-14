'use client';
import Button from "./button";
import { FaPlay } from "react-icons/fa";
import HeroCards from "./herocards";

const Hero = () => {
    return (
        <section id='hero' className="sm:h-full">
            <article className="text-center flex flex-col items-center mx-auto w-2/3  my-4">
                <h1 className="sm:text-3xl text-xl font-black">Great future are built with a small charity</h1>
                <p className="sm:text-lg">The world&apos;s largest social fundraising platform, optimized for your charity in a more easy way</p>
                <div className="flex flex-col sm:flex-row sm:gap-2 justify-between sm:items-start items-center my-2">
                    <Button 
                        text={'Donate now'}
                        style={'w-36 sm:px-4 py-1 bg-teal-900 rounded-3xl text-white mb-2 sm:mb-4'}
                    />
                    <Button
                        icon={<FaPlay />}
                        text={'Watch video'}
                        style={'flex flex-row-reverse gap-1 items-center px-4 py-1 font-black rounded-3xl bg-gray-300'}
                    />
                </div>
            </article>
           <HeroCards />
        </section>
    )
}

export default Hero;