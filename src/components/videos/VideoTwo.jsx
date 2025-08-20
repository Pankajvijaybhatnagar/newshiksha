import React, { useState, useEffect } from "react";

export const VideoTwo = () => {
  return (
    <div 
      className="video-two-container"
      style={{
        padding: '20px 0',
        backgroundColor: '#f5f5f5'
      }}
    >
      <div 
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        <div 
          className="split-layout"
          style={{
            display: 'flex',
            flexWrap:'wrap',
            gridTemplateColumns: '2fr 1fr',
            gap: '30px',
            alignItems: 'start'
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

  return (
    <div 
      className="slider-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        maxWidth:'730px'
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
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
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
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
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
                  padding: '2rem'
                }}
              >
                <h2 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  {slide.title}
                </h2>
                <p 
                  style={{
                    fontSize: '1.2rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    marginBottom: '2rem'
                  }}
                >
                  {slide.subtitle}
                </p>
                
                <button 
                  style={{
                    backgroundColor: '#dc3545',
                    border: 'none',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    fontSize: '16px',
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
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ‹
        </button>
        
        <button 
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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
          marginTop: '15px',
          gap: '8px'
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: currentSlide === index ? '#dc3545' : '#ccc',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

const NoticeBar = () => {
  const notices = [
    "🎓 2nd Edition of शिक्षा महाकुंभ 2.0 is going to held at Kurukshetra University on December 16-17, 2024",
    "📢शिक्षा महाकुंभ-2024 (द्वितीय संस्करण) 23 एवं 24 नवम्बर 2024,गीता निकेतन आवासीय विद्यालय, कुरुक्षेत्र",
    "🏆A Grand Start to Shiksha Mahakumbh 2.0: Baton Ceremony Successfully Concluded Kurukshetra, November 20, 2024",
    
  ];

  return (
    <div 
      className="notice-container"
      style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        height: '400px',
        maxWidth:'400px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0'
      }}
    >
      {/* Header */}
      <div 
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          borderBottom: '2px solid #dc3545',
          paddingBottom: '10px'
        }}
      >
        <h3 
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#333',
            margin: '0'
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
          overflowX: 'hidden'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {notices.map((notice, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '6px',
                padding: '15px',
                fontSize: '14px',
                lineHeight: '1.4',
                color: '#333',
                transition: 'background-color 0.3s',
                cursor: 'pointer'
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
          marginTop: '15px',
          paddingTop: '10px',
          borderTop: '1px solid #e0e0e0',
          fontSize: '12px',
          color: '#666'
        }}
      >
        Scroll to see more updates
      </div>
    </div>
  );
};