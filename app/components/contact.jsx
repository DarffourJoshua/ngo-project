'use client';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";
import Form from "./forms";


const Contact = () => {
    // console.log(contactImg);
    return (
        <section id="contact" className="my-8">
                <h3 className="text-center text-lg sm:text-2xl font-bold mb-8">Find out more ongoing events</h3>
               <article className="flex mx-4 items-start justify-start flex-col sm:flex-row sm:justify-evenly">
               <div className="flex  items-center gap-4">
                    <Link href={'#'} className="">
                        <CiMail/>
                    </Link>
                    <p className="">worldlab@mail.ngo</p>
                </div>
              
                <div className="flex items-center gap-4">
                    <Link href={'#'}>
                        <FaPhoneAlt/>
                    </Link>
                    <p className="">+233269783902</p>
                </div>
              
                <div className="flex items-center gap-4">
                    <Link href={'#'}>
                        <SiGooglemaps/>
                    </Link>
                    <p className="">Opp SIC</p>
                </div>
               </article>
            <Form/>
            
        </section>
    );
}

export default Contact;


