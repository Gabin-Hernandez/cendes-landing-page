'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { programs } from '@/lib/constants';

export default function ProgramsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll carousel
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % programs.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextProgram = () => {
        setCurrentIndex((prev) => (prev + 1) % programs.length);
    };

    const prevProgram = () => {
        setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
    };

    // Get visible cards (current, next, and previous)
    const getVisibleCards = () => {
        const cards = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + programs.length) % programs.length;
            cards.push({ ...programs[index], position: i });
        }
        return cards;
    };

    return (
        <section id="programs" className="section-cendes bg-gradient-to-br from-purple-50 to-cyan-50 overflow-hidden">
            <div className="container-cendes">
                <AnimatedSection>
                    <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
                        Nuestros Programas
                    </h2>
                    <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
                        5 programas especializados por edad y temática
                    </p>
                </AnimatedSection>

                {/* Carousel Container */}
                <div
                    className="relative py-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Cards with 3D perspective */}
                    <div className="relative mx-auto h-[500px] md:h-[450px]" style={{ perspective: '2000px' }}>
                        <AnimatePresence mode="popLayout">
                            {getVisibleCards().map((program, idx) => {
                                const position = program.position;

                                // Calculate rotation and position for 3D carousel effect
                                const rotateY = position * 35; // Degrees of rotation
                                const translateX = position * 60; // Percentage movement
                                const translateZ = position === 0 ? 0 : -200; // Depth

                                return (
                                    <motion.div
                                        key={`${program.id}-${currentIndex}`}
                                        initial={{
                                            rotateY: position === 1 ? 35 : position === -1 ? -35 : 0,
                                            x: `${translateX}%`,
                                            z: translateZ,
                                            scale: position === 0 ? 1 : 0.8,
                                            opacity: position === 0 ? 1 : 0.4,
                                        }}
                                        animate={{
                                            rotateY: rotateY,
                                            x: `${translateX}%`,
                                            z: translateZ,
                                            scale: position === 0 ? 1 : 0.8,
                                            opacity: position === 0 ? 1 : 0.4,
                                        }}
                                        exit={{
                                            rotateY: position === -1 ? -70 : 70,
                                            x: position === -1 ? '-100%' : '100%',
                                            opacity: 0,
                                            scale: 0.6,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.32, 0.72, 0, 1], // Custom cubic-bezier for smooth easing
                                        }}
                                        className="absolute left-1/2 top-0 w-full max-w-xl -translate-x-1/2"
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            zIndex: position === 0 ? 20 : 10 - Math.abs(position),
                                            pointerEvents: position === 0 ? 'auto' : 'none',
                                        }}
                                    >
                                        <Card {...program} />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute left-0 right-0 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between px-4">
                        <button
                            onClick={prevProgram}
                            className="rounded-full bg-white p-4 shadow-xl transition-all hover:scale-110 hover:bg-[var(--color-primary)] hover:text-white"
                            aria-label="Programa anterior"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            onClick={nextProgram}
                            className="rounded-full bg-white p-4 shadow-xl transition-all hover:scale-110 hover:bg-[var(--color-primary)] hover:text-white"
                            aria-label="Siguiente programa"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="mt-8 flex justify-center gap-2">
                    {programs.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 rounded-full transition-all ${index === currentIndex
                                ? 'w-8 bg-[var(--color-primary)]'
                                : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Ir a programa ${index + 1}`}
                        />
                    ))}
                </div>

                <p className="mt-8 text-center text-lg text-gray-600">
                    No importa dónde esté tu escuela o cuántos alumnos tengas.
                    Tenemos opciones para TODA la República Mexicana.
                </p>

                <div className="mt-12 text-center">
                    <Button variant="primary" size="large" href="/registro">
                        Descubre qué programa es para tu escuela
                    </Button>
                </div>
            </div>
        </section>
    );
}
