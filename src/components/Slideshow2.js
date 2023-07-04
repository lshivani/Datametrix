import React, { useState, useEffect } from 'react';

const Slideshow2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/images/raven.png', alt: 'Image 1' },
    { src: '/images/intel.png', alt: 'Image 2' },
    { src: '/images/linkedin.png', alt: 'Image 3' },
    { src: '/images/imerit.png', alt: 'Image 4' },
    { src: '/images/sartorius.png', alt: 'Image 5' },
    { src: '/images/wipro.png', alt: 'Image 6' },
    { src: '/images/toyoto.png', alt: 'Image 7' },
    { src: '/images/tcs.png', alt: 'Image 8' },
    { src: '/images/standard.png', alt: 'Image 9' },
    { src: '/images/rombit.png', alt: 'Image 10' },
    { src: '/images/fyusion.png', alt: 'Image 11' },
    { src: '/images/cloudfactory.png', alt: 'Image 12' },
    { src: '/images/asensus.png', alt: 'Image 13' },
    { src: '/images/vimeo.png', alt: 'Image 14' },
  ];

  useEffect(() => {
    // Function to show the next slide
    const showNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length + 1));
    };

    // Start the slideshow
    const interval = setInterval(showNextSlide, 2000); // Change slide every 2 seconds (2000 milliseconds)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const slideStyle = {
    display: 'flex',
    transition: 'transform 1s cyclic', // Add a 1-second transition to create a smooth scroll effect
    transform: `translateX(-${currentSlide * (100 / (slides.length + 1))}%)`, // Use translateX to move the slides horizontally
  };
  const imgStyle = {
    flex: '0 0 30px',
    height:'40px',
    width: `${100 / (slides.length + 1)}%`,
    margin: '0 10px',     
  };

  return (
    <div className="row" style={{ overflow: 'hidden' }}>
        <center style={{color:'grey'}}><h5>TRUSTED BY INDUSTRY LEADERS</h5></center><br/><br/>
      <div style={slideStyle}>
        {/* Loop through the slides and clone the first slide */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            style={imgStyle}
          />
        ))}
        {/* Clone the first slide and append it at the end for cyclic scroll */}
        <img
          src={slides[0].src}
          alt={slides[0].alt}
          style={imgStyle}
        />
      </div>
    </div>
  );
};

export default Slideshow2;
