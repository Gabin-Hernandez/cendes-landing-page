'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { statistics } from '@/lib/constants';

export default function ProblemSection() {
    return (
        <section id="problem" className="section-cendes bg-white">
            <div className="container-cendes">
                <AnimatedSection>
                    <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
                        El Problema que Enfrentamos
                    </h2>
                    <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
                        La violencia sexual infantil es una realidad que debemos prevenir
                    </p>
                </AnimatedSection>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {statistics.map((stat, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-white to-cyan-50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                {/* Decorative gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Content */}
                                <div className="relative z-10 text-center">
                                    {/* Number with gradient */}
                                    <div className="mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl">
                                        {stat.number}
                                    </div>

                                    {/* Divider line */}
                                    <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />

                                    {/* Description */}
                                    <p className="text-base font-semibold leading-relaxed text-gray-700 md:text-lg">
                                        {stat.text}
                                    </p>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 blur-2xl transition-all duration-300 group-hover:scale-150" />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
