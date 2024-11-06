import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const faqs = [
        { 
            question: "Pergunta 1",
            answer: "Resposta 1"
        },
        { 
            question: "Pergunta 2",
            answer: "Resposta 2"
        },
        { 
            question: "Pergunta 3",
            answer: "Resposta 3"
        },
        { 
            question: "Pergunta 4",
            answer: "Resposta 4"
        }
    ];

    // Estado para armazenar qual FAQ está expandida
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Função para alternar o estado expandido da FAQ
    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="faq-container container">
            <h2>Perguntas Frequentes</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div 
                            className="faq-question" 
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                        </div>
                        {expandedIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
