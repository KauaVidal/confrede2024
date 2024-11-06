import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const faqs = [
        { 
            question: "Qual é o tema da Conferência REDE 2024?",
            answer: "O tema é Time Out, que significa descanso ou repouso. Vamos explorar o verdadeiro descanso que só encontramos em Cristo, em contraste com o foco que tivemos ao longo do ano em produtividade, graça e trabalho."
        },
        { 
            question: "Quando e onde vai acontecer a Conferência?",
            answer: "A data e o local exato podem ser confirmados na nossa programação oficial, disponível nas redes sociais da REDE ou diretamente na PIBVM. A conferência será realizada na igreja. Consulte o endereço clicando icon de localização no inicio da página."
        },
        { 
            question: "A Conferência REDE é aberta para convidados de outras igrejas?",
            answer: " Sim, todos são bem-vindos, especialmente jovens que têm interesse em aprender mais sobre Jesus e experimentar o amor dele."
        },
        { 
            question: "Como posso me inscrever?",
            answer: "A inscrição é realizada no botão Inscreva-se, disponível no inicio da página. Basta preencher o formulário com seus dados e aguardar a confirmação da inscrição."
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
