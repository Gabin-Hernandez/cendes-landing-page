'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20'
                : 'bg-transparent'
                }`}
        >
            <div className="container-cendes">
                <div className="flex items-center justify-center py-2 md:py-3">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src="/images/CENDES.svg"
                            alt="CENDES"
                            className="h-14 md:h-16"
                        />
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
