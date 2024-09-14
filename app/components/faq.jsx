'use client';
import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";

const faq = [
    {
        question: "What is the purpose of WorldLab NGO?",
        answer: "WorldLab NGO is a non-profit organization that aims to provide free education to children in rural areas."
    },
    {
        question: "How can I donate to WorldLab NGO?",
        answer: "You can donate to WorldLab NGO by clicking on the 'Donate now' button on our website."
    },
    {
        question: "How can I volunteer for WorldLab NGO?",
        answer: "You can volunteer for WorldLab NGO by filling out the volunteer form on our website."
    },
    {
        question: "How can I contact WorldLab NGO?",
        answer: "You can contact WorldLab NGO by subscribing to our newsletter or by sending us an email at wordlab@email.org",
    }
];

const FAQ = () => {
    const [toggle, setToggle] = useState(Array(faq.length).fill(false));

    const handleClick = (index) => setToggle(prevtoggle => {
        const newToggle = [...prevtoggle];
        newToggle[index] = !newToggle[index];
        return newToggle;
    });
    return (
        <article className='bg-gray-300 text-black my-4 rounded-lg py-4'>
            <h2 className="text-xl font-bold text-center">Frequently asked questions</h2>
            <p className="text-center">Everything to you know</p>
            {faq.map((item, index) => {
                    return (
                        <div className="p-4" key={index}>
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-sm md:text-lg">
                                    {item.question}
                                </h4>
                                <span className="">
                                    {toggle[index] ?    
                                        <MinusCircleIcon onClick={() => handleClick(index)} className="w-3 h-3 ml-auto"/> :
                                        <PlusCircleIcon onClick={() => handleClick(index)} className="w-3 h-3  ml-auto items-start"/>
                                    }
                                </span>
                            </div>
                            <p className="my-1 text-xs md:text-sm">{toggle[index] && item.answer}</p>
                        </div>
                    );
            })}
            
        </article>
    );
}

export default FAQ;