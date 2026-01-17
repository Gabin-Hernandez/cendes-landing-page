'use client';

import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import { Heart, Shield, Users, Mail, Phone } from 'lucide-react';

export default function FinalCTASection() {
    return (
        <section id="final-cta" className="section-cendes bg-gradient-to-r from-[var(--color-primary)] via-purple-600 to-[var(--color-accent)]">
            <div className="container-cendes text-center">
                <AnimatedSection>
                    <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                        Tu comunidad escolar<br />
                        merece estar protegida
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90 md:text-2xl">
                        Más de 2,000 escuelas ya lo hicieron. <br />El momento es ahora.
                    </p>
                    <Button variant="large" size="xlarge" href="/registro">
                        Descubre qué programa es para tu escuela
                    </Button>
                </AnimatedSection>

                <AnimatedSection delay={0.3} className="mt-16">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                            <Heart className="mx-auto mb-4 h-12 w-12 text-white" />
                            <h3 className="mb-2 text-2xl font-bold text-white">2 minutos</h3>
                        </div>
                        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                            <Shield className="mx-auto mb-4 h-12 w-12 text-white" />
                            <h3 className="mb-2 text-2xl font-bold text-white">Sin compromiso</h3>
                        </div>
                        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                            <Users className="mx-auto mb-4 h-12 w-12 text-white" />
                            <h3 className="mb-2 text-2xl font-bold text-white">Respuesta en 24 horas</h3>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Alternative Contact Section */}
                <AnimatedSection delay={0.5} className="mt-16">
                    <div className="mx-auto max-w-2xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:p-10">
                        <h3 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
                            ¿Prefieres hablar directamente?
                        </h3>
                        <div className="space-y-4 text-center">
                            <div className="flex items-center justify-center gap-3">
                                <Mail className="h-6 w-6 text-[var(--color-accent)]" />
                                <a
                                    href="mailto:carolina.lopez@cendes.org"
                                    className="text-lg text-white transition-colors hover:text-[var(--color-accent)] md:text-xl"
                                >
                                    carolina.lopez@cendes.org
                                </a>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <Phone className="h-6 w-6 text-[var(--color-accent)]" />
                                <a
                                    href="tel:+525527882274"
                                    className="text-lg text-white transition-colors hover:text-[var(--color-accent)] md:text-xl"
                                >
                                    55 2788 2274
                                </a>
                            </div>
                            <div className="pt-4">
                                <a
                                    href="https://wa.me/525527882274"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-3 font-semibold text-white transition-all hover:bg-green-600 hover:scale-105"
                                >
                                    💬 WhatsApp directo
                                </a>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
