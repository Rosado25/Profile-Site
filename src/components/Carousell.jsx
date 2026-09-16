import { useCallback, useEffect, useRef } from 'react';

const ArcProjectsCarousel = ({ items }) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const animationFrameRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const updateCardPositions = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const center = container.scrollLeft + container.clientWidth / 2;

    cardRefs.current.forEach(card => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = (cardCenter - center) / Math.max(container.clientWidth, 1);
      const absDistance = Math.min(Math.abs(distance), 1.25);
      const translateY = 55 - absDistance * 250;
      const scale = Math.max(0.76, 1 - absDistance * 0.2);
      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotateY(${distance * -14}deg)`;
    });
  }, []);

  const scheduleUpdate = useCallback(() => {
    cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(updateCardPositions);
  }, [updateCardPositions]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(container);
    scheduleUpdate();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [items.length, scheduleUpdate]);

  const handlePointerDown = event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    const container = containerRef.current;
    if (!container) return;
    dragRef.current = { active: true, startX: event.clientX, scrollLeft: container.scrollLeft };
    container.setPointerCapture?.(event.pointerId);
    container.classList.add('is-dragging');
  };

  const handlePointerMove = event => {
    const container = containerRef.current;
    if (!container || !dragRef.current.active) return;
    const distance = event.clientX - dragRef.current.startX;
    if (Math.abs(distance) > 3) event.preventDefault();
    container.scrollLeft = dragRef.current.scrollLeft - distance;
  };

  const stopDragging = event => {
    const container = containerRef.current;
    if (container?.hasPointerCapture?.(event.pointerId)) container.releasePointerCapture(event.pointerId);
    dragRef.current.active = false;
    container?.classList.remove('is-dragging');
  };

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden">
        <div className="project-carousel-perspective">
          <div ref={containerRef} onScroll={scheduleUpdate} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={stopDragging} onPointerCancel={stopDragging} onPointerLeave={stopDragging} className="project-carousel" aria-label="Lista de projetos">
            {items.map((project, index) => (
              <article key={project.id} ref={element => { cardRefs.current[index] = element; }} className="card-proj project-carousel__card">
                <div className="card-image project-carousel__image">
                  <img alt={`Logo do projeto ${project.title}`} src={project.image} loading={index > 1 ? 'lazy' : 'eager'} decoding="async" />
                </div>
                <div className="project-carousel__content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-carousel__footer">
                    <div className="project-carousel__tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="projet-btn cursor-target">Projet</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcProjectsCarousel;
