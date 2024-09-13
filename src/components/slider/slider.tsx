import React, { useState, useEffect } from "react";
import styles from "./slider.module.scss";

interface SliderProps {
  slides: React.ReactNode[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null); // To track touch start X position

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle keyboard navigation (left and right arrow keys)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slides.length]);

  // Handle touch start (finger down)
  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setTouchStartX(touch.clientX); // Record the X position when the touch starts
  };

  // Handle touch end (finger up)
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const touchDeltaX = touchStartX - touchEndX;

    // Swipe detection (threshold can be adjusted for sensitivity)
    if (touchDeltaX > 50) {
      nextSlide(); // Swiped left
    } else if (touchDeltaX < -50) {
      prevSlide(); // Swiped right
    }

    // Reset touch start X position
    setTouchStartX(null);
  };

  return (
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart} // Attach touch start event
      onTouchEnd={handleTouchEnd} // Attach touch end event
    >
      {/* Slide Container */}
      <div
        className={styles.slidesContainer}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide}
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
