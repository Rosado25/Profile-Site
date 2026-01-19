import React, { useState, useRef } from 'react';

const ArcProjectsCarousel = ({ items }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);
    const animationFrameRef = useRef(null);

    const updateCardPositions = () => {
        if (containerRef.current) {
            containerRef.current.querySelectorAll('.card').forEach((card, index) => {
                const style = getCardStyle(index);
                card.style.transform = style.transform;
            });
        }
    };

    const handleScroll = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(updateCardPositions);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
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
        };
    };

    return (
        <div className="w-full">
            <div className="relative w-full overflow-visible py-40">
                <div style={{ perspective: '2000px' }}>
                    <div
                        ref={containerRef}
                        onScroll={handleScroll}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className="flex gap-8 overflow-x-auto overflow-y-visible px-8 min-h-[600px]"
                        style={{
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            cursor: 'grab',
                            userSelect: 'none',
                            scrollBehavior: isDragging ? 'auto' : 'smooth'
                        }}
                    >
                        {items.map((project, index) => (
                            <div
                                key={project.id}
                                className="card shrink-0 w-80 h-100 overflow-hidden cursor-pointer"
                                style={{
                                    ...getCardStyle(index),
                                    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                                }}
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