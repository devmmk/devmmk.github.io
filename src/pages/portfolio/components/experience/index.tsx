import { useState, useRef, useEffect } from 'react';
import BlobEffectCard from '@components/blob-effect-card';
import { experiences } from './constants';

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeImage = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3)); // Max zoom 3x
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5)); // Min zoom 0.5x
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      });
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && zoomLevel > 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <section className="py-16 sm:py-20 bg-[color:var(--bg-primary)]">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-[color:var(--text-primary)]">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <BlobEffectCard key={index} className="bg-[color:var(--bg-tertiary)]/80 backdrop-blur-sm rounded-lg p-6 transition-colors z-10 duration-300 border border-[color:var(--border-color)]/40 shadow-[0_4px_12px_var(--shadow-color)]">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                <div>
                  <div className="flex items-start gap-4 mb-2">
                    {experience.logo && (
                      <a
                        className="w-20"
                        target="_blank"
                        href={experience.company.linkedInProfile || '#'}
                      >
                        <img className="rounded-lg" src={experience.logo} alt={experience.company.name} />
                      </a>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[color:var(--text-primary)]">{experience.role}</h3>
                      <a
                        className="text-[color:var(--text-secondary)] hover:text-[color:var(--hover-primary)] transition-colors duration-300"
                        target="_blank"
                        href={experience.company.linkedInProfile || '#'}
                      >
                        {experience.company.name}
                      </a>
                      <p className="text-[color:var(--text-secondary)]">{experience.location}</p>
                    </div>
                  </div>
                </div>
                <span className="text-[color:var(--text-secondary)] mt-2 sm:mt-0">
                  {experience.period}
                </span>
              </div>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-[color:var(--text-primary)]">
                    <span className="mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Preview attachments section - moved below achievements */}
              {experience.attachments && experience.attachments.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-[color:var(--text-secondary)] mb-2">Project Overview:</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.attachments.map((attachment, idx) => (
                      <button
                        key={idx}
                        onClick={() => openImage(attachment.src)}
                        className="relative group"
                        title={attachment.title}
                      >
                        <img
                          src={attachment.src}
                          alt={attachment.title}
                          className="w-16 h-16 object-cover rounded border border-[color:var(--border-color)] cursor-pointer hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[color:var(--bg-primary)] bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center z-10">
                          <span className="text-[color:var(--text-primary)] text-xs">View</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </BlobEffectCard>
          ))}
        </div>

        {/* Image Preview Modal with zoom and pan functionality */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-[color:var(--bg-primary)] bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeImage}
          >
            <div
              className="relative w-full h-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative w-full h-full flex items-center justify-center"
              >
                <img
                  ref={imageRef}
                  src={selectedImage}
                  alt="Preview"
                  className="max-h-[80vh] object-contain rounded cursor-move"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                    transformOrigin: 'center center',
                    cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                  }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                />
                {/* Floating controls panel below the image - maintaining liquid glass effect */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-[color:var(--bg-tertiary)]/80 backdrop-blur-sm rounded-full px-4 py-2 z-[60] border border-[color:var(--border-color)]/50">
                  <button
                    className="text-[color:var(--text-primary)] bg-[color:var(--bg-primary)] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[color:var(--hover-primary)]"
                    onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                    title="Zoom In"
                  >
                    +
                  </button>
                  <button
                    className="text-[color:var(--text-primary)] bg-[color:var(--bg-primary)] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[color:var(--hover-primary)]"
                    onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                    title="Zoom Out"
                  >
                    -
                  </button>
                  <button
                    className="text-[color:var(--text-primary)] bg-[color:var(--bg-primary)] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[color:var(--hover-primary)]"
                    onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                    title="Reset Zoom"
                  >
                    ↻
                  </button>
                  <button
                    className="text-[color:var(--text-primary)] bg-[color:var(--bg-primary)] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[color:var(--hover-primary)] ml-2"
                    onClick={closeImage}
                    title="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;