import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import faqCover from "../../pictures/faq.png";
import faqMark from "../../pictures/faq-mark.svg";

const faqs = [
    { heading: "Vivamus dictum est ac nulla varius sagittis?", content: "Nullam varius ligula non lacus faucibus, id varius neque eleifend. Aliquam pretium dolor vel urna rhoncus, fermentum porttitor" },
    { heading: "Duis fringilla purus egestas dolor scelerisque?", content: "Nullam varius ligula non lacus faucibus, id varius neque eleifend. Aliquam pretium dolor vel urna rhoncus, fermentum porttitor" },
    { heading: "Sed eget mi ac lacus aliquet mattis?", content: "Nullam varius ligula non lacus faucibus, id varius neque eleifend. Aliquam pretium dolor vel urna rhoncus, fermentum porttitor" },
    { heading: "In ultricies orci et consectetur aliquet?", content: "Nullam varius ligula non lacus faucibus, id varius neque eleifend. Aliquam pretium dolor vel urna rhoncus, fermentum porttitor" },
    { heading: "Donec dignissim ligula dapibus, tincidunt?", content: "Nullam varius ligula non lacus faucibus, id varius neque eleifend. Aliquam pretium dolor vel urna rhoncus, fermentum porttitor" },
]

function FAQs () {

    const [selected, setSelected] = useState(0);

    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full grid grid-cols-2 gap-3">
                <div className="relative min-h-[400px]" style={{ background: `url(${faqCover})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="absolute bottom-0 left-0">
                        <img src={faqMark} />
                    </div>
                </div>
                <div className="p-16 flex justify-center items-center">
                    <div className="w-full">
                        <div className="font-bold text-3xl">
                            <p>Gyakran ismételt</p>
                            <p className="text-blue">kérdések</p>
                        </div>
                        <div className="my-8">
                            {
                                faqs.map((faq, index) => {
                                    const isSelected = selected === index;
                                    return (
                                        <div className="w-full border-b">
                                            <div className="cursor-pointer" onClick={() => setSelected(selected === index ? undefined : index)}>
                                                <p className={"py-4 font-bold " + (isSelected ? "text-orange" : "")}>
                                                    {faq.heading}
                                                    {
                                                        isSelected ?
                                                        <span className="float-right text-3xl font-bold text-blue">-</span> :
                                                        <span className="float-right text-3xl font-bold text-orange">+</span>
                                                    }
                                                </p>
                                            </div>
                                            {
                                                isSelected &&
                                                <div className="text-lightgrey py-4">
                                                    {faq.content}
                                                </div>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default FAQs;
