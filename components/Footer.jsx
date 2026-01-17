'use client';

import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { programs } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-background-dark)] py-16 text-white">
            <div className="container-cendes">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Info */}
                    <div>
                        {/* CENDES Logo */}
                        <div className="mb-4">
                            <img
                                src="/images/CENDES.svg"
                                alt="CENDES"
                                className="h-12 w-auto md:h-14"
                            />
                        </div>
                        <p className="mb-4 text-white/80">
                            Centro Nacional de Prevención y
                            Fortalecimiento ante la Violencia
                            Sexual Infantil y Adolescente <br />
                            "Donde el arte se convierte en protección"
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/fundacioncendes"
                                className="transition-colors hover:text-[var(--color-accent)]"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/fundacioncendes"
                                className="transition-colors hover:text-[var(--color-accent)]"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Programs */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Programas</h3>
                        <ul className="space-y-2">
                            {programs.map((program) => (
                                <li key={program.id}>
                                    <a href="/registro" className="text-white/80 transition-colors hover:text-white">
                                        {program.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Phone className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                                <div>
                                    <p className="text-white/80">55 2788 2274</p>
                                    <a
                                        href="https://wa.me/525527882274"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-[var(--color-accent)] hover:underline"
                                    >
                                        WhatsApp directo
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                                <a href="mailto:carolina.lopez@cendes.com.mx" className="text-white/80 hover:text-white">
                                    carolina.lopez@cendes.com.mx
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                                <p className="text-white/80">Ciudad de México, México</p>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-white/80 transition-colors hover:text-white">
                                    Aviso de Privacidad
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/80 transition-colors hover:text-white">
                                    Términos y Condiciones
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-white/80 transition-colors hover:text-white">
                                    Preguntas Frecuentes
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center">
                    <p className="text-white/60">
                        © {new Date().getFullYear()} CENDES - Centro Nacional de Prevención y Fortalecimiento ante la Violencia Sexual Infantil y Adolescente. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
