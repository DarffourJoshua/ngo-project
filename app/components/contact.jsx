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
               <article className="flex mx-2 justify-around flex-col sm:flex-row">
               <div className="flex  items-center gap-4">
                    <Link href={'#'}>
                        <CiMail/>
                    </Link>
                    <p className="ml-auto">worldlab@mail.ngo</p>
                </div>
              
                <div className="flex items-center gap-4">
                    <Link href={'#'}>
                        <FaPhoneAlt/>
                    </Link>
                    <p className="ml-auto">+233269783902</p>
                </div>
              
                <div className="flex items-center gap-4">
                    <Link href={'#'}>
                        <SiGooglemaps/>
                    </Link>
                    <p className="ml-auto">Opp SIC</p>
                </div>
               </article>
            <Form/>
            
        </section>
    );
}

export default Contact;


