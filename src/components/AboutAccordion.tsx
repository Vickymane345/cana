import React, { useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

function AboutAccordion()
{
      const [open, setOpen] = useState<number | null>(null);

      const toggleAccordion = (index: number) => {
        setOpen(open === index ? null : index);
      };

      const faqs = [
        {
          question: "What is Trades Global FX?",
          answer:
            "Trades Global FX is a high-yield cryptocurrency investment platform that allows users to trade, invest, and grow their digital assets. Our platform provides users with easy-to-use tools to manage their crypto portfolios and earn substantial returns on their investments.",
        },
        {
          question: "How do I create an account?",
          answer:
            "To create an account, simply click the Sign Up button at the top right corner of the website. Fill in your details, complete the verification process, and you`re ready to start trading!",
        },
        {
          question:
            "What cryptocurrencies can I use for deposits and withdrawals?",
          answer:
            "We support a wide range of popular cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and more. Check the deposit section of your account for the full list of supported assets.",
        },
        {
          question: "Is there a minimum deposit required?",
          answer:
            "Yes, the minimum deposit amount depends on the cryptocurrency you choose. Please refer to the deposit page for specific details.",
        },
      ];
  return (
      <div>
            <section className="px-6 md:px-20 py-20 text-center">
                  <h2 className="text-4xl font-semibold mb-4">Have a question?</h2>
                  <p className="text-gray-400 mb-12">
                    Your questions answered — everything you need to know about Trades
                    Global FX.
                  </p>
          
                  <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-[#111526] rounded-2xl mb-4 p-6 text-left transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full flex justify-between items-center text-lg font-medium"
                        >
                          {faq.question}
                          {open === index ? <FaChevronDown /> : <FaChevronRight />}
                        </button>
                        {open === index && (
                          <p className="text-gray-400 mt-4">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
    </div>
  );
}

export default AboutAccordion
