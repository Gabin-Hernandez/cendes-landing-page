'use client';

import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import { faqs } from '@/lib/constants';

export default function FAQSection() {
    return (
        <section id="faq" className="section-cendes bg-white">
            <div className="container-cendes">
                <AnimatedSection>
                    <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
                        Preguntas Frecuentes
                    </h2>
                    <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
                        Resolvemos tus dudas
                    </p>
                </AnimatedSection>

                <div className="mx-auto max-w-4xl">
                    {faqs.map((faq, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <Accordion question={faq.question} answer={faq.answer} />
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="mt-12 text-center">
                    <p className="mb-6 text-lg text-gray-600">
                        ¿Tienes más preguntas? Estamos aquí para ayudarte
                    </p>
                    <Button variant="secondary" size="large" href="/registro">
                        Contactar a un asesor
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
}
