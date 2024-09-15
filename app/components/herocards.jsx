'use client';
import { ArrowUpRightIcon, FaceSmileIcon, HeartIcon } from "@heroicons/react/20/solid";
import Button from "./button";



const HeroCards = () => {
    return (
        <article className="hidden sm:grid xl:grid-cols-5 sm:grid-cols-4 sm:gap-1 sm:m-10 ">
            <div className="text-white animate-fadeInLeft">
               <Description className={'bg-emerald-900 rounded-xl sm:pt-4 px-2 pb-1 sm:h-auto xl:h-80 flex flex-col justify-between gap-2 mb-4 '}>
                    <h3 className="text-base sm:text-2xl sm:font-bold">65%</h3>
                    <p className="sm:text-center">18 thousand people died. Thousand Injured, Houses and 
                        Buildings Destroyed. Turkey-Syria Grieves
                    </p>
                    <Button 
                        text={'Donate now'}
                        icon={<ArrowUpRightIcon className=" w-4"/>}
                        style={'flex items-center bg-teal-600 rounded-3xl text-xs sm:text-sm mx-auto my-4 py-2 px-2'}
                    />
                </Description>
                 
               
                <Description className={"flex items-center p-2 bg-gray-900  rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"}>       
                    <FaceSmileIcon className="w-12 mr-auto"/>
                    <h4 className="mr-auto text-center">Let them be heard</h4>
                </Description>
                    
                
            </div>
            <Description className={'bg-[#0f766e] flex flex-col justify-between rounded-xl gap-20 pt-2 pl-2 h-auto w-auto text-white translate-y-4 transition-all ease-in-out delay-200 duration-200 hover:scale-100 hover:-translate-y-12 animate-fadeInDown'}>
                        <h3 className="text-xl font-bold">Health</h3>
                        <p className=" text-center mb-2">
                            Life skills for 2,597 Children in South Africa
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam euismod volutpat.
                        </p>
            </Description>
            <Description className={'bg-[#a3e635] rounded-xl hidden xl:block xl:translate-y-72 h-28 ease-in-out delay-700 hover:-translate-y-4 duration-700  flex flex-col animate-slideup'}>
                <p className="text-center pt-12"> 5000+ People donate</p>
                
                <Button 
                    text={'Join community'}
                    icon={<ArrowUpRightIcon className="w-4 text-white bg-gray-900 rounded-full"/>}
                    style={'flex items-center gap-4 bg-gray-400 py-2 px-1 rounded-xl mb-2 mx-auto text-xs'}
                />
            </Description>
            <Description className={'bg-[#0d9488] flex flex-col justify-between rounded-xl pl-3 pt-3 h-auto translate-y-4 text-white animate-fadeInDown'}>
                <h3 className="mt-2 text-xl font-bold">Education</h3>
                <p className="mb-2 text-center">Sponsor food, education to orphans India</p>
            </Description>
            <div className="flex flex-col justify-between animate-fadeInRight">
               <Description className={'bg-lime-500 rounded-xl py-4 sm:h-60 xl:h-3/4 flex flex-col justify-between '}>
                    <span className="text-center mx-2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
                    </span>
                    <Button
                        text={'Explow now'}
                        icon={<ArrowUpRightIcon className="w-4 bg-gray-300 rounded-full"/>}
                        style={'flex items-center mx-auto rounded-xl px-3 py-1 bg-lime-300'}
                    />
               </Description>
                <Description className={'flex bg-lime-950 text-lime-400 rounded-xl p-3 gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 '}>
                    <HeartIcon className="w-12"/>
                    <p className="text-center">Your home for help</p>
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