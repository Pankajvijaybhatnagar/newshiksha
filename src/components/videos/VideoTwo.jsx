import React, { useState, useEffect } from "react";

export const VideoTwo = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div 
      className="video-two-container"
      style={{
        padding: isMobile ? '15px 0' : '20px 0',
        backgroundColor: '#f5f5f5',
        minHeight: '55vh'
      }}
    >
      <div 
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 10px' : '0 20px',
          width: '100%'
        }}
      >
        <div 
          className="split-layout"
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '15px' : '30px',
            alignItems: 'stretch',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          {/* Left Side - Image Slider */}
          <ImageSlider />
          
          {/* Right Side - Notice Bar */}
          <NoticeBar />
        </div>
      </div>
    </div>
  );
};

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const slides = [
    {
      id: 1,
      image: "/img/niper3.jpeg",
      title: "Learn English Like Never Before",
      subtitle: "Master English with Expert Instructors"
    },
    {
      id: 2,
      image: "/img/pp3.jpg", 
      title: "Premium Learning Program",
      subtitle: "Unlock Advanced Features & Personalized Learning"
    },
    {
      id: 3,
      image: "/pics2025/abc1.jpeg",
      title: "Limited Time - 50% Off", 
      subtitle: "Don't Miss This Exclusive Opportunity"
    },
    {
      id: 4,
      image: "/pics2025/abc2.jpeg",
      title: "Limited Time - 50% Off", 
      subtitle: "Don't Miss This Exclusive Opportunity"
    },
    {
      id: 5,
      image: "/pics2025/abc3.jpeg",
      title: "Limited Time - 50% Off", 
      subtitle: "Don't Miss This Exclusive Opportunity"
    },
    {
      id: 6,
      image: "/pics2025/abc4.jpeg",
      title: "Limited Time - 50% Off", 
      subtitle: "Don't Miss This Exclusive Opportunity"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Responsive calculations
  const isMobile = windowWidth <= 480;
  const isSmallTablet = windowWidth > 480 && windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <div 
      className="slider-container"
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '200px' : isSmallTablet ? '250px' : isTablet ? '300px' : '400px',
        maxWidth: isMobile ? '100%' : isSmallTablet ? '100%' : isTablet ? '600px' : '750px',
        flex: isMobile ? 'none' : '2',
        margin: '0 auto'
      }}
    >
      {/* Main Slider */}
      <div 
        className="slider-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: isMobile ? '4px' : '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          backgroundColor: '#fff'
        }}
      >
        <div 
          className="slider-track"
          style={{
            display: 'flex',
            width: `${slides.length * 100}%`,
            height: '100%',
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
            transition: 'transform 0.5s ease'
          }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="slide-item"
              style={{
                width: `${100 / slides.length}%`,
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Responsive Image */}
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                  // Ensure images scale properly on all devices
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                onLoad={(e) => {
                  e.target.style.opacity = '1';
                }}
                onError={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                  e.target.alt = 'Image not available';
                }}
              />
              
              {/* Overlay - Hidden by default, can be shown on hover or made visible */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.4)',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  textAlign: 'center',
                  padding: isMobile ? '0.5rem' : isSmallTablet ? '1rem' : '2rem'
                }}
              >
                <h2 
                  style={{
                    fontSize: isMobile ? '1rem' : isSmallTablet ? '1.3rem' : isTablet ? '1.8rem' : '2.2rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: '1.2'
                  }}
                >
                  {slide.title}
                </h2>
                <p 
                  style={{
                    fontSize: isMobile ? '0.8rem' : isSmallTablet ? '0.9rem' : '1.1rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    marginBottom: isMobile ? '1rem' : '1.5rem',
                    lineHeight: '1.3'
                  }}
                >
                  {slide.subtitle}
                </p>
                
                <button 
                  style={{
                    backgroundColor: '#dc3545',
                    border: 'none',
                    color: 'white',
                    padding: isMobile ? '8px 16px' : '10px 20px',
                    borderRadius: '4px',
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0056b3';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#dc3545';
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: isMobile ? '5px' : '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: '50%',
            width: isMobile ? '30px' : '35px',
            height: isMobile ? '30px' : '35px',
            cursor: 'pointer',
            fontSize: isMobile ? '14px' : '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          ‹
        </button>
        
        <button 
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: isMobile ? '5px' : '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: '50%',
            width: isMobile ? '30px' : '35px',
            height: isMobile ? '30px' : '35px',
            cursor: 'pointer',
            fontSize: isMobile ? '14px' : '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: isMobile ? '10px' : '15px',
          gap: isMobile ? '4px' : '6px',
          flexWrap: 'wrap'
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: isMobile ? '8px' : '10px',
              height: isMobile ? '8px' : '10px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: currentSlide === index ? '#dc3545' : '#ccc',
              transition: 'background-color 0.3s',
              minWidth: isMobile ? '8px' : '10px',
              minHeight: isMobile ? '8px' : '10px'
            }}
          />
        ))}
      </div>
    </div>
  );
};

const NoticeBar = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const notices = [
    "🎓 2nd Edition of शिक्षा महाकुंभ 2.0 is going to held at Kurukshetra University on December 16-17, 2024",
    "📢शिक्षा महाकुंभ-2024 (द्वितीय संस्करण) 23 एवं 24 नवम्बर 2024,गीता निकेतन आवासीय विद्यालय, कुरुक्षेत्र",
    "🏆A Grand Start to Shiksha Mahakumbh 2.0: Baton Ceremony Successfully Concluded Kurukshetra, November 20, 2024",
  ];

  const isMobile = windowWidth <= 480;
  const isSmallTablet = windowWidth > 480 && windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <div 
      className="notice-container"
      style={{
        backgroundColor: '#fff',
        borderRadius: isMobile ? '4px' : '8px',
        padding: isMobile ? '12px' : isSmallTablet ? '15px' : '20px',
        height: isMobile ? '250px' : isSmallTablet ? '280px' : isTablet ? '320px' : '400px',
        maxWidth: isMobile ? '100%' : isSmallTablet ? '100%' : isTablet ? '400px' : '420px',
        width: '100%',
        flex: isMobile ? 'none' : '1',
        minWidth: isMobile ? '100%' : '280px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        border: '1px solid #e0e0e0',
        margin: '0 auto'
      }}
    >
      {/* Header */}
      <div 
        style={{
          textAlign: 'center',
          marginBottom: isMobile ? '10px' : '15px',
          borderBottom: '2px solid #dc3545',
          paddingBottom: '8px'
        }}
      >
        <h3 
          style={{
            fontSize: isMobile ? '1rem' : isSmallTablet ? '1.1rem' : '1.3rem',
            fontWeight: 'bold',
            color: '#333',
            margin: '0',
            lineHeight: '1.2'
          }}
        >
          📢 Latest Updates
        </h3>
      </div>

      {/* Scrollable Notice Content */}
      <div 
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          scrollbarWidth: 'thin',
          scrollbarColor: '#dc3545 #f1f1f1',
          // Webkit scrollbar for better mobile support
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '8px' : '10px'
          }}
        >
          {notices.map((notice, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                padding: isMobile ? '10px' : '12px',
                fontSize: isMobile ? '12px' : isSmallTablet ? '13px' : '14px',
                lineHeight: '1.4',
                color: '#333',
                transition: 'background-color 0.3s',
                cursor: 'pointer',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e9ecef';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
              }}
            >
              {notice}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div 
        style={{
          textAlign: 'center',
          marginTop: isMobile ? '8px' : '12px',
          paddingTop: '8px',
          borderTop: '1px solid #e0e0e0',
          fontSize: isMobile ? '10px' : '11px',
          color: '#666'
        }}
      >
        Scroll to see more updates
      </div>
    </div>
  );
};