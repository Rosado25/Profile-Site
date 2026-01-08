import React, { useState, useRef } from 'react';

const ArcProjectsCarousel = ({ items }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);

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
        <div className="w-full">
            <div className="relative w-full overflow-visible py-40">
                <div style={{ perspective: '2000px' }}>
                    <div
                        ref={containerRef}
                        onScroll={handleScroll}
                        className="flex gap-8 overflow-x-auto overflow-y-visible px-8 scroll-smooth min-h-[600px]"
                        style={{
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {items.map((project, index) => (
                            <div
                                key={project.id}
                                className="card shrink-0 w-80 h-100 overflow-hidden cursor-pointer"
                                style={getCardStyle(index)}
                            >
                                <div
                                    className="relative overflow-hidden bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] h-48 rounded-2xl"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white opacity-15">
                                        {project.title.charAt(0)}
                                    </div>
                                </div>
                                <br />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="inline-block px-4 py-2 text-sm leading-normal rounded-2xl bg-[rgba(82,39,255,0.15)] text-[rgba(200,180,255,0.9)] border border-[rgba(82,39,255,0.3)] before:content-['\00a0'] after:content-['\00a0']"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArcProjectsCarousel;