'use client';

import { motion } from 'framer-motion';
import { Theater, Film, Mic, Users2, Sparkles } from 'lucide-react';

export default function Card({
    title,
    theme,
    ageRange,
    format,
    gradient = "from-purple-500 to-pink-500",
    className = ''
}) {
    // Determine icon based on format
    const getFormatIcons = (formatString) => {
        const icons = [];
        if (formatString.includes('Teatro')) icons.push({ Icon: Theater, label: 'Teatro' });
        if (formatString.includes('Cine')) icons.push({ Icon: Film, label: 'Cine' });
        if (formatString.includes('Monólogo')) icons.push({ Icon: Mic, label: 'Monólogo' });
        return icons;
    };

    const formatIcons = getFormatIcons(format);

    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-8 shadow-2xl hover:shadow-3xl ${className}`}
        >
            {/* Decorative background elements */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:scale-150" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

            {/* Sparkle icon in corner */}
            <div className="absolute right-6 top-6 opacity-20 transition-all duration-300 group-hover:opacity-40 group-hover:rotate-12">
                <Sparkles className="h-12 w-12 text-white" />
            </div>

            <div className="relative z-10">
                {/* Title with decorative line */}
                <div className="mb-6">
                    <h3 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                        {title}
                    </h3>
                    <div className="h-1 w-20 rounded-full bg-white/40" />
                </div>

                {/* Theme */}
                <div className="mb-6 rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/20">
                    <p className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Temática
                    </p>
                    <p className="text-lg font-medium text-white leading-relaxed">
                        {theme}
                    </p>
                </div>

                {/* Age Range */}
                <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                        <Users2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                            Edad
                        </p>
                        <p className="text-lg font-medium text-white">
                            {ageRange}
                        </p>
                    </div>
                </div>

                {/* Format Icons */}
                <div className="flex flex-wrap gap-3">
                    {formatIcons.map(({ Icon, label }, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/30"
                        >
                            <Icon className="h-5 w-5 text-white" />
                            <span className="text-sm font-semibold text-white">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
    );
}
