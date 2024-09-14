'use client';
import { ArrowUpRightIcon, FaceSmileIcon, HeartIcon } from "@heroicons/react/20/solid";
import Button from "./button";



const HeroCards = () => {
    return (
        <article className="hidden sm:grid sm:grid-cols-5 sm:gap-4 sm:m-10">
            <div className=" text-white">
               <Description className={'bg-emerald-900 rounded-xl pt-8 px-2 pb-1 h-64 flex flex-col justify-between mb-4'}>
                    <h3 className="text-base sm:text-2xl sm:font-bold">65%</h3>
                    <p>18 thousand people died. Thousand Injured, Houses and 
                        Buildings Destroyed. Turkey-Syria Grieves
                    </p>
                    <Button 
                        text={'Donate now'}
                        icon={<ArrowUpRightIcon className="w-8"/>}
                        style={'flex bg-teal-600 rounded-3xl gap-2 mx-auto my-4 px-2'}
                    />
                </Description>
                 
               
                <Description className={"flex items-center p-2 bg-gray-900  rounded-2xl"}>       
                    <FaceSmileIcon className="w-12 mr-auto"/>
                    <h4 className="mr-auto">Let them be heard</h4>
                </Description>
                    
                
            </div>
            <Description className={'bg-[#0f766e] rounded-xl pt-2 pl-2 h-80 text-white translate-y-4'}>
                        <h3 className="text-xl font-bold">Health</h3>
                        <p className="sm:translate-y-40 px-2 text-center">
                            Life skills for 2,597 Children in South Africa
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam euismod volutpat.
                        </p>
            </Description>
            <Description className={'bg-[#fcf4ff] rounded-xl sm:translate-y-56 h-28 p-4'}>
                <p className="text-center py-2"> 5000+ People donate</p>
                
                <Button 
                    text={'Join community'}
                    icon={<ArrowUpRightIcon className="w-4 text-white bg-gray-900 rounded-full"/>}
                    style={'flex items-center gap-4 bg-gray-400 py-2 px-1 rounded-xl mx-auto'}
                />
            </Description>
            <Description className={'bg-[#fff4f4] rounded-xl pl-3 pt-3 h-80 translate-y-4'}>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="translate-y-32">Sponsor food, <br/>education to <br/>orphans India</p>
            </Description>
            <div>
               <Description className={'bg-lime-500 rounded-xl py-4 h-56'}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                    </span>
                    <Button
                        text={'Explow now'}
                        icon={<ArrowUpRightIcon className="w-4 bg-gray-300 rounded-full"/>}
                        style={'flex items-center mx-auto rounded-xl px-3 py-1 bg-lime-300'}
                    />
               </Description>
                <Description className={'flex bg-lime-950 text-lime-400 rounded-xl p-3 gap-2 translate-y-8'}>
                    <HeartIcon className="w-12"/>
                    <p>Your home for help</p>
                </Description>
            </div>
        </article>
    )
}

export default HeroCards;

const Description = ({children, className}) => {
    return(
        <div className={className}>
            {children}
        </div>
    )
}