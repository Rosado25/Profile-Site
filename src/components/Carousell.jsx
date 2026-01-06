import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ArcProjectsCarousel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'Coastline',
            description: 'Projeto de fotografia costeira',
            tags: ['Fotografia', 'Natureza']
        },
        {
            id: 2,
            title: 'Palm Trees',
            description: 'Série fotográfica tropical',
            tags: ['Fotografia', 'Tropical']
        },
        {
            id: 3,
            title: 'Bridge',
            description: 'Arquitetura estrutural',
            tags: ['Arquitetura', 'Engenharia']
        },
        {
            id: 4,
            title: 'Desk Setup',
            description: 'Workspace minimalista',
            tags: ['Design', 'Workspace']
        },
        {
            id: 5,
            title: 'Waterfall',
            description: 'Paisagens naturais',
            tags: ['Natureza', 'Paisagem']
        },
        {
            id: 6,
            title: 'Mountain',
            description: 'Aventuras em altitude',
            tags: ['Natureza', 'Aventura']
        },
        {
            id: 7,
            title: 'Urban',
            description: 'Fotografia urbana',
            tags: ['Cidade', 'Arquitetura']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const handleScroll = (e) => {
        const container = e.target;
        setScrollPosition(container.scrollLeft);
    };

    const getCardStyle = (index) => {
        const container = containerRef.current;
        if (!container) return {};

        const cardWidth = 320;
        const containerCenter = container.scrollLeft + container.offsetWidth / 2;
        const cardCenter = index * (cardWidth + 32) + cardWidth / 2;
        const distanceFromCenter = (cardCenter - containerCenter) / container.offsetWidth;

        const translateY = -Math.abs(distanceFromCenter) * 300 + 132;
        const scale = 1 - Math.abs(distanceFromCenter) * 0.3;
        const rotateY = distanceFromCenter * -15;

        return {
            transform: `translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
            transition: 'transform 0.3s ease-out',
        };
    };

    return (
        <div className="w-full min-h-screen">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <motion.h2
                    variants={cardVariants}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-16"
                >
                    Projets
                </motion.h2>

                <div className="relative w-full overflow-visible py-40">
                    <div style={{ perspective: '2000px' }}>
                        <motion.div
                            ref={containerRef}
                            onScroll={handleScroll}
                            variants={containerVariants}
                            className="flex gap-8 overflow-x-auto overflow-y-visible px-8 scrollbar-hide scroll-smooth min-h-[600px]"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="shrink-0 w-80 h-96 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
                                    style={{
                                        ...getCardStyle(index),
                                        background: 'rgba(39, 31, 54, 0.45)',
                                        backdropFilter: 'blur(20px) saturate(200%)',
                                        WebkitBackdropFilter: 'blur(20px) saturate(200%)',
                                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(82, 39, 255, 0.2)';
                                        e.currentTarget.style.borderColor = 'rgba(82, 39, 255, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }}
                                >
                                    <div className="relative h-48 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white opacity-15">
                                            {project.title.charAt(0)}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30"></div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-sm rounded-full transition-all duration-300"
                                                    style={{
                                                        background: 'rgba(82, 39, 255, 0.15)',
                                                        color: 'rgba(200, 180, 255, 0.9)',
                                                        border: '1px solid rgba(82, 39, 255, 0.3)'
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <style jsx>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                    </div>
                </div>

                <motion.div
                    variants={cardVariants}
                    className="text-center text-gray-400 text-sm mt-8"
                >
                    Faites glisser pour naviguer entre les projets
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ArcProjectsCarousel;