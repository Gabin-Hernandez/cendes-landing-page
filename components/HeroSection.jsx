'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/Button';

export default function HeroSection() {
    return (
        <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-12 md:pt-8">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                    poster="/images/hero-cendes.jpg"
                >
                    <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Hero Content */}
            <div className="container-cendes relative z-10 px-4 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Campaign Badge */}
                    <div className="mb-6 inline-block">
                        <span className="rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-6 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm border border-white/20 md:text-base">
                            Campaña Nacional 2026
                        </span>
                    </div>

                    <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        Protege a tu comunidad escolar<br />
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            a través del arte
                        </span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl lg:text-2xl">
                        Prevención profesional de violencia sexual, bullying y acoso
                        para niñas, niños y adolescentes
                    </p>
                    <Button variant="large" size="xlarge" href="/registro">
                        Descubre qué programa es para tu escuela
                    </Button>
                    {/* Benefits */}
                    <div className="mx-auto m-10 flex max-w-3xl flex-wrap items-center justify-center gap-4">
                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20">
                            <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-medium text-white md:text-base">Solo 2 minutos</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20">
                            <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-medium text-white md:text-base">Sin compromiso</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20">
                            <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-medium text-white md:text-base">Propuesta personalizada</span>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8"
                >
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                        Reconocidos y apoyados por:
                    </p>
                    <div className="flex flex-wrap items-center gap-8">
                        <img src="/images/spinna_logo.png" alt="SIPINNA" className="h-28 object-contain opacity-90" />
                        <img src="/images/SNDIF_Logo_(2018).svg" alt="DIF Nacional" className="h-28 object-contain opacity-90" />
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown className="h-8 w-8 text-white/60" />
                </motion.div>
            </div>
        </section>
    );
}
