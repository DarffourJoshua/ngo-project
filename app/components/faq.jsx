
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
        <artcile className='bg-lime-400'>
            <h3 className="text-md font-bold text-center">Frequently asked questions</h3>
            <p className="text-center">Everything to you know</p>
            {faq.map((item, index) => {
                    return (
                        <div className="pl-4" key={index}>
                            <h4 className="inline-block ">
                                {item.question}
                            </h4>
                            {toggle[index] ?    
                                <MinusCircleIcon onClick={() => handleClick(index)} className="w-3 h-3 inline ml-auto"/> :
                                <PlusCircleIcon onClick={() => handleClick(index)} className="w-3 h-3 inline ml-auto"/>
                            }
                            <p>{toggle[index] && item.answer}</p>
                        </div>
                    );
            })}
            
        </artcile>
    );
}

export default FAQ;