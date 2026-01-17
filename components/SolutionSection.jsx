'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { Theater, Users } from 'lucide-react';

export default function SolutionSection() {
    return (
        <section id="solution" className="section-cendes bg-[var(--color-background-lavender)]">
            <div className="container-cendes">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                    {/* Left Column: Text Content */}
                    <AnimatedSection direction="left">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                            ¿Qué es CENDES?
                        </h2>
                        <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                            CENDES es el Centro Nacional de prevención y fortalecimiento ante
                            la violencia sexual <span className="font-bold text-[var(--color-primary)]">infantil y adolescente</span> a través del arte.
                        </p>
                        <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                            Durante 10 años hemos llevado teatro, monólogo y cine
                            profesional a más de 2,000 escuelas en México y España,
                            alcanzando a más de 100,000 personas.
                        </p>
                        <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
                            No damos "pláticas aburridas". Creamos experiencias artísticas
                            que tocan el corazón y abren conversaciones reales entre
                            estudiantes, familias y docentes.
                        </p>

                        {/* Two Column Features */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Arte Profesional */}
                            <div className="flex flex-col items-start gap-3">
                                <div className="rounded-full bg-[var(--color-primary)] p-3">
                                    <Theater className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">Arte Profesional</h3>
                                    <p className="text-gray-700">
                                        Obras escritas y dirigidas por especialistas.
                                        No es teatro escolar, es teatro de calidad
                                        con mensaje de protección.
                                    </p>
                                </div>
                            </div>

                            {/* Toda la Comunidad */}
                            <div className="flex flex-col items-start gap-3">
                                <div className="rounded-full bg-[var(--color-accent)] p-3">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">Toda la Comunidad</h3>
                                    <p className="text-gray-700">
                                        Capacitamos a docentes, familias y estudiantes.
                                        Porque la prevención se construye entre todos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Column: Image */}
                    <AnimatedSection direction="right">
                        <div className="relative h-full">
                            <img
                                src="/images/cendes.jpg"
                                alt="Equipo CENDES"
                                className="h-full w-full rounded-2xl object-cover shadow-2xl"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
