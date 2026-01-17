'use client';

import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import { Theater, Shield } from 'lucide-react';

export default function OptionsSection() {
    return (
        <section id="options" className="section-cendes bg-gradient-to-br from-gray-50 to-white">
            <div className="container-cendes">
                <AnimatedSection>
                    <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
                        Opciones para tu escuela
                    </h2>
                    <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
                        Opciones para tu escuela, sin importar dónde estés
                    </p>
                </AnimatedSection>

                <div className="grid gap-8 lg:grid-cols-2">
                    <AnimatedSection direction="left">
                        <div className="h-full rounded-2xl border-4 border-[var(--color-primary)] bg-white p-8 shadow-xl transition-transform hover:scale-105 md:p-10">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="rounded-full bg-[var(--color-primary)] p-4">
                                    <Theater className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold md:text-3xl">CDMX</h3>
                            </div>
                            <h4 className="mb-4 text-xl font-semibold text-[var(--color-primary)]">
                                ¿Tu escuela está en CDMX?
                            </h4>
                            <ul className="mb-8 space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--color-primary)]">✓</span>
                                    <span>Teatro en tu escuela</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--color-primary)]">✓</span>
                                    <span>Monólogo en tu escuela (desde SIN COSTO*)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--color-primary)]">✓</span>
                                    <span>Teatro en el teatro</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--color-primary)]">✓</span>
                                    <span>Monólogo en el teatro</span>
                                </li>
                            </ul>
                            <Button variant="primary" size="large" href="/registro" className="w-full">
                                Solicitar información
                            </Button>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right">
                        <div className="h-full rounded-2xl border-4 border-[var(--color-accent)] bg-white p-8 shadow-xl transition-transform hover:scale-105 md:p-10">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="rounded-full bg-[var(--color-accent)] p-4">
                                    <Shield className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold md:text-3xl">Nacional</h3>
                            </div>
                            <h4 className="mb-4 text-xl font-semibold text-[var(--color-accent)]">
                                ¿Tu escuela está en otro estado?
                            </h4>
                            <ul className="mb-8 space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--color-accent)]">✓</span>
                                    <span>Cine educativo (muy accesible)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--color-accent)]">✓</span>
                                    <span>Formatos presenciales con viáticos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--color-accent)]">✓</span>
                                    <span>Mismo impacto, adaptado a tu ubicación</span>
                                </li>
                            </ul>
                            <Button variant="accent" size="large" href="/registro" className="w-full">
                                Solicitar información
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
                <p className="mt-8 text-center text-lg text-gray-600">
                    Descubre exactamente qué opciones aplican para TU escuela
                    en nuestro registro personalizado.
                </p>
            </div>
        </section>
    );
}
