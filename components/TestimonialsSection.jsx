'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { testimonials } from '@/lib/constants';

export default function TestimonialsSection() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section-cendes bg-[var(--color-background-dark)]">
            <div className="container-cendes">
                <AnimatedSection>
                    <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Lo que dicen las escuelas que ya son protectoras
                    </h2>
                    <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-white/80 md:text-xl">
                        Testimonios reales de directores escolares
                    </p>
                </AnimatedSection>

                {/* Video Placeholder */}
                <AnimatedSection>
                    <div className="mx-auto mb-12 max-w-4xl">
                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
                            <video
                                controls
                                className="h-full w-full object-cover"
                                poster="/images/testimonial-poster.jpg"
                            >
                                <source src="/videos/testimonials.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Testimonial Carousel */}
                <div className="relative">
                    <motion.div
                        key={currentTestimonialIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-3xl"
                    >
                        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:p-12">
                            <div className="mb-6 text-6xl text-[var(--color-accent)]">"</div>
                            <p className="mb-6 text-xl italic leading-relaxed text-white md:text-2xl">
                                {testimonials[currentTestimonialIndex].quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]" />
                                <div>
                                    <p className="font-bold text-white">
                                        {testimonials[currentTestimonialIndex].name}
                                    </p>
                                    <p className="text-sm text-white/80">
                                        {testimonials[currentTestimonialIndex].school}
                                    </p>
                                    <p className="text-sm text-white/60">
                                        {testimonials[currentTestimonialIndex].location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button
                            onClick={prevTestimonial}
                            className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
                            aria-label="Testimonio anterior"
                        >
                            <ChevronLeft className="h-6 w-6 text-white" />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonialIndex(index)}
                                    className={`h-3 w-3 rounded-full transition-all ${index === currentTestimonialIndex
                                            ? 'w-8 bg-white'
                                            : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    aria-label={`Ir a testimonio ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
                            aria-label="Siguiente testimonio"
                        >
                            <ChevronRight className="h-6 w-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
