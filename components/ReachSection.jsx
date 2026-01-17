'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { Award, MapPin } from 'lucide-react';
import { recognitions } from '@/lib/constants';

export default function ReachSection() {
    // Locations in Mexico - adjusted to be within map borders
    const locations = [
        { name: 'CDMX', x: '60%', y: '62%' },
        { name: 'Guadalajara', x: '58%', y: '58%' },
        { name: 'Monterrey', x: '54%', y: '45%' },
        { name: 'Puebla', x: '56%', y: '62%' },
        { name: 'Querétaro', x: '48%', y: '58%' },
        { name: 'Mérida', x: '58%', y: '58%' },
        { name: 'Tijuana', x: '23%', y: '35%' },
        { name: 'Cancún', x: '52%', y: '55%' },
    ];

    return (
        <section id="reach" className="section-cendes bg-white">
            <div className="container-cendes">
                <AnimatedSection>
                    <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
                        Nuestro Alcance
                    </h2>
                    <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
                        10 años protegiendo infancias en México y el mundo
                    </p>
                </AnimatedSection>

                {/* Impact Numbers - 3 Columns */}
                <AnimatedSection>
                    <div className="mb-16 grid gap-6 md:grid-cols-3">
                        {/* Column 1: Schools */}
                        <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 text-center shadow-lg transition-transform hover:scale-105">
                            <div className="mb-2 text-5xl font-bold text-[var(--color-primary)] md:text-6xl">
                                +2,000
                            </div>
                            <div className="text-lg font-semibold text-gray-700">
                                Escuelas alcanzadas
                            </div>
                        </div>

                        {/* Column 2: People */}
                        <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 text-center shadow-lg transition-transform hover:scale-105">
                            <div className="mb-2 text-5xl font-bold text-[var(--color-accent)] md:text-6xl">
                                +100,000
                            </div>
                            <div className="text-lg font-semibold text-gray-700">
                                Personas impactadas
                            </div>
                        </div>

                        {/* Column 3: Locations */}
                        <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 p-8 text-center shadow-lg transition-transform hover:scale-105">
                            <div className="mb-2 text-5xl font-bold text-[var(--color-highlight)] md:text-6xl">
                                5 estados
                            </div>
                            <div className="text-lg font-semibold text-gray-700">
                                + CDMX + España
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Interactive Map */}
                    <AnimatedSection direction="left">
                        <div className="relative rounded-2xl bg-gradient-to-br from-purple-50 to-cyan-50 p-8 shadow-xl">
                            <h3 className="mb-6 text-center text-2xl font-bold">
                                Presencia en México
                            </h3>

                            {/* Mexico Map SVG Outline */}
                            <div className="relative mx-auto aspect-[4/3] max-w-lg">
                                <img
                                    src="/images/mexico-map.svg"
                                    alt="Mapa de México"
                                    className="w-full h-full object-contain"
                                />

                                {/* Location pins overlaid on map */}
                                {locations.map((location, index) => (
                                    <div
                                        key={index}
                                        className="absolute"
                                        style={{
                                            left: location.x,
                                            top: location.y,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        {/* Outer pulse circle */}
                                        <div
                                            className="absolute inset-0 h-6 w-6 rounded-full bg-[var(--color-primary)] opacity-20 animate-ping"
                                            style={{ animationDelay: `${index * 0.2}s` }}
                                        />
                                        {/* Inner solid circle */}
                                        <div className="relative h-3 w-3 rounded-full bg-[var(--color-primary)] shadow-lg cursor-pointer transition-transform hover:scale-150" />
                                    </div>
                                ))}

                                {/* Legend */}
                                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                                    <div className="h-3 w-3 rounded-full bg-[var(--color-primary)]"></div>
                                    <span>Ciudades atendidas</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Recognitions */}
                    <AnimatedSection direction="right">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold md:text-3xl">Reconocimientos Oficiales</h3>
                            <ul className="space-y-4">
                                {recognitions.map((recognition, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Award className="h-6 w-6 flex-shrink-0 text-[var(--color-highlight)]" />
                                        <span className="text-lg text-gray-700">{recognition}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Additional Info */}
                            <div className="mt-8 rounded-xl bg-gradient-to-r from-purple-100 to-cyan-100 p-6">
                                <p className="text-center text-lg font-semibold text-gray-800">
                                    Llevando prevención de calidad a toda la República Mexicana y más allá
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div >
        </section >
    );
}
