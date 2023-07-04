import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/images/Fall.png', alt: 'Image 1' },
    { src: '/images/Spring.png', alt: 'Image 2' },
    { src: '/images/Start.png', alt: 'Image 3' },
    { src: '/images/Winter.png', alt: 'Image 4' },
    { src: '/images/best.svg', alt: 'Image 5' },
  ];

  useEffect(() => {
    // Function to show the next slide
    const showNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Start the slideshow
    const interval = setInterval(showNextSlide, 2000); // Change slide every 2 seconds (2000 milliseconds)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-md-4">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.alt}
          style={{ marginRight: '15px',width:'200%', display: index === currentSlide ? 'inline-block' : 'none' }}
        />
      ))}
      <div style={{  marginTop: '10px' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: index === currentSlide ? '#717171' : '#bbb',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
    </div>
    </div>
  );
};

export default Slideshow;
