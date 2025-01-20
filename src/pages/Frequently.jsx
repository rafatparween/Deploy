import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-[20px] font-sans font-medium text-gray-700"
                onClick={toggleDropdown}
            >
                <span>{question}</span>
                <span>{isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
            </button>
            {isOpen && (
                <p className="mt-2 text-gray-600 text-[16px]">
                    {answer}
                </p>
            )}
        </div>
    );
};

const Frequently = () => {
    const faqData = [
        {
            question: "Do I need to provide any materials for my service?",
            answer: "For most device installation services, you need to provide any necessary cables and accessories. This includes items like USB cables, power cords, or specific setup items depending on the device.",
        },
        {
            question: "Can my device be installed in a tight space?",
            answer: "Yes, as long as there is enough room for proper ventilation and easy access to the device. Ensure the space is stable and allows for effective cooling and maintenance access.",
        },
        {
            question: "How can I hide wires after my installation?",
            answer: "We offer cable management solutions to neatly organize and conceal wires, ensuring a clean and clutter-free setup for any device.",
        },
        {
            question: "Can you install my device on any type of surface?",
            answer: "Devices can be installed on most flat surfaces, such as desks, shelves, or tables, provided the surface is stable and suitable for the device.",
        },
        {
            question: "What type of device do I need?",
            answer: "The type of device you need depends on your specific requirements. Whether it's a printer, computer, mobile device, or another type, visit our website to find the best options for you.",
        },
        {
            question: "What's included in Hewlett Hub Solutions' installation service?",
            answer: "Our service includes installation, configuration, setup of necessary connections, and a basic functionality test to ensure everything is working as expected.",
        },
        {
            question: "Where should I place my device after installation?",
            answer: "Place your device in a location that allows for easy access and is near necessary connections and power sources. Ensure the placement supports good ventilation and accessibility.",
        },
        {
            question: "How much does it cost to get a device installed with Hewlett Hub Solutions?",
            answer: "Installation services start at $30, with costs varying based on the complexity of the setup and additional requirements. Check our website for detailed pricing based on your specific device.",
        },
        {
            question: "How do I find an installation service near me?",
            answer: "We offer installation services nationwide. Contact us or visit our website to schedule an appointment with a technician in your area.",
        },
        {
            question: "How often should I service my device?",
            answer: "Regular servicing depends on the type of device and usage. For heavy use, we recommend servicing every 6-12 months to maintain performance and prevent issues.",
        }
    ];

    return (
        <>
            <div className="max-w-4xl mx-auto p-4">
                <h2 className="text-[34px] font-sans font-bold text-center mb-6">Frequently Asked Questions</h2>
                {faqData.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </>

    );
};

export default Frequently;
