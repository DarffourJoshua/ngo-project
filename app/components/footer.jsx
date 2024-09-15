'use client';

import { Facebook, LinkedIn, Twitter } from "./socialMediaIcons";
import Button from "./button";
import {ArrowUpRightIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="
            bg-emerald-900 p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10
            text-center rounded-lg text-white
        ">
            <Button
                text="Donate now"
                style="bg-[#6ee7b7] hover:bg-[#059669] flex rounded-md items-center  sm:ml-4 justify-center text-s p-2 sm:px-4 text-xs sm:text-sm mb-3"
                icon={<ArrowUpRightIcon
                    className="w-4 h-4 ml-6 bg-lime-500 rounded-full hover:bg-lime-700"
                />}
            />
            <div className="flex justify-between items-start text-xs md:text-sm md:items-start md:gap-3 p-1 sm:p-2 mb-2">
                <p>&copy;2024<span className="hidden sm:inline">, WorldLab NGO</span></p>
                <Link href={'#'} >
                    Privacy Policy
                </Link>
                <Link href={'#'} className="mr-auto">Contact Us</Link>
                {/* <Link href='http://t.me/thePresiding'>
                    Contact Us
                </Link> */}
                
                    <Twitter />
                    <LinkedIn />
                    <Facebook />
                
            </div>
            <div className="flex flex-col items-center gap-2 text-xs md:text-sm">
                {/* <span>For more information, contact us on +233 26 978 3902</span> */}
                <p>Please subscribe to our latest news and events</p>
                <input type="email" placeholder="Enter your email address" 
                className="w-50 sm:w-80 p-1 rounded"
                />
                <Button
                    text="Subscribe"
                    style="bg-[#0d9488] hover:bg-[#115e59] border border-teal-500 hover:border-slate-100 flex rounded-md items-center ml-4 justify-center p-2"
                />

                   
            </div>

        </footer>
    );
}

export default Footer;