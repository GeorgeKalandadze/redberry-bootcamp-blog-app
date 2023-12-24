import React, { useRef, useState } from 'react'

const HorizontalScroll = ({children, className}) => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleScrollStart = (e) => {
      // e.preventDefault(); // Prevent text selection on scroll start
      setIsDragging(true);
      setShowScrollIndicator(true);
      setStartX(e.pageX || e.touches[0].pageX);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleScrollMove = (e) => {
      // e.preventDefault(); // Prevent text selection while scrolling
      if (isDragging && startX !== null) {
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 1.5;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
      }
    };

    const handleScrollEnd = (e) => {
      // e.preventDefault(); // Prevent text selection on scroll end
      setIsDragging(false);
      setShowScrollIndicator(false);
      setStartX(null);
    };


  return (
    <div
      className={className}
      ref={scrollContainerRef}
      onMouseDown={handleScrollStart}
      onMouseMove={handleScrollMove}
      onMouseUp={handleScrollEnd}
      onMouseLeave={handleScrollEnd}
      onTouchStart={handleScrollStart}
      onTouchMove={handleScrollMove}
      onTouchEnd={handleScrollEnd}
      style={{ userSelect: isDragging ? "none" : "auto" }}
    >
      {children}
    </div>
  );
}

export default HorizontalScroll