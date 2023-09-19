import React, { useState,useEffect } from 'react';
import { SliderData } from './SliderData';

const ImageSlider = ({ slides }) => {
  const [current,setCurrent] = useState(0);
  const length = slides.length;
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 2500);
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider' onClick={nextSlide} onMouseEnter={() => {
      setAutoPlay(false);
      clearTimeout(timeOut);
    }}
    onMouseLeave={() => {
      setAutoPlay(true);
    }}>
      {SliderData.map((slide, index) => {
        return (
          <>
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            onClick={prevSlide}
          >
        
            {index === current && (
                <>
                  <img src={slide.image} alt='travel' className='image' />
                  <div className='slide-content'>
                  <p className='slide-about'>{slide.about}</p>
                  <h1 className='slide-title'>
                    {slide.id === '1' ? (
                      <>
                        {slide.title.split(' ').map((word, index) => (
                          <span
                            key={index}
                            style={{
                              fontSize: index === 1 ? '1.2em' : 'inherit',
                            }}
                          >
                            {word}
                            {index === 2 && <br />} {/* Add line break after the first word */}
                          </span>
                        ))}
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>                  
                  <p className='slide-text' style={{marginRight:800}}>{slide.description}</p>
                  <div className='slide-button' style={{ borderRadius: "50px",color:'white', border:'1px solid white',width:300,textAlign:'center', padding: '10px 20px', margin: '20px'}}>
                    <p style={{margin:0}} >{slide.button}</p>
                  </div>
                  </div>

                </>
              
            )}
            
          </div>
          <div className="carousel_pagination">
          {SliderData.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
          </>
        );
      })}
    <div className="image-slider-overlay"></div>
      
    </section>
  );
};

export default ImageSlider;