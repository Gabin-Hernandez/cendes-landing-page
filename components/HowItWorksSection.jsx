'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { howItWorksSteps } from '@/lib/constants';
import { GraduationCap, Users, Theater, BookOpen, Award } from 'lucide-react';

export default function HowItWorksSection() {
    const iconMap = {
        GraduationCap,
        Users,
        Theater,
        BookOpen,
        Award,
    };

    return (
        <section id="how-it-works" className="section-cendes bg-white">
            <div className="container-cendes">
                <AnimatedSection>
                    <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
                        ¿Cómo Funciona?
                    </h2>
                    <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
                        Un proceso simple y efectivo en 5 pasos
                    </p>
                </AnimatedSection>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-highlight)]" />

                        {/* Steps */}
                        <div className="relative grid grid-cols-5 gap-4">
                            {howItWorksSteps.map((step, index) => {
                                const Icon = iconMap[step.icon];
                                return (
                                    <AnimatedSection key={index} delay={index * 0.15}>
                                        <div className="flex flex-col items-center">
                                            {/* Icon Circle */}
                                            <div className="group relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                                                <Icon className="h-12 w-12 text-white" />

                                                {/* Step Number Badge */}
                                                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[var(--color-primary)] shadow-lg ring-2 ring-white">
                                                    {index + 1}
                                                </div>

                                                {/* Pulse Effect */}
                                                <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-20 group-hover:animate-ping" />
                                            </div>

                                            {/* Content */}
                                            <div className="text-center">
                                                <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="lg:hidden">
                    <div className="relative space-y-8">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-highlight)]" />

                        {/* Steps */}
                        {howItWorksSteps.map((step, index) => {
                            const Icon = iconMap[step.icon];
                            return (
                                <AnimatedSection key={index} delay={index * 0.1}>
                                    <div className="relative flex items-start gap-6 pl-2">
                                        {/* Icon Circle */}
                                        <div className="group relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-lg transition-all duration-300 hover:scale-110">
                                            <Icon className="h-6 w-6 text-white" />

                                            {/* Step Number Badge */}
                                            <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[var(--color-primary)] shadow ring-2 ring-white">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1 rounded-2xl bg-gradient-to-br from-purple-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                                            <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
                                            <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
