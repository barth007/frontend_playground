import React, {useState} from 'react'
import { useEffect } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0);
    const [isHovered, setIsHover] = useState(false);

    const nextSlide=()=>{
        setSlide( slide === data.length -1 ? 0 : slide + 1);

    }
    const previousSlide=()=>{
        setSlide(slide === 0 ? data.length -1 : slide - 1);
        
    }
    // useEffect to run once there is change
    useEffect(()=>{
        let intervalId;
        if (!isHovered){
             intervalId = setInterval(
                ()=>{
                    nextSlide();
        
                }, 3000
            ); 

        }

        
        return ()=> clearInterval(intervalId);
    }, [slide, isHovered]);

    const handleMouseEnter = ()=>{
        setIsHover(true);
    };
    const handleMouseLeave = ()=>{
        setIsHover(false);
    };

  return (
    
    <div className='Carousel' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <BsArrowLeftCircleFill className='arrow arrow-left'onClick={previousSlide}/>
        {data.map((item, index)=>{
            return(<img 
                src={item.src} 
                alt={item.alt} key={index} 
                className={slide === index ? "slide": "slide-hidden"}
                style={{ transition: 'opacity 0.5s', opacity: slide === index ? 1 : 0 }}
                />)
        })}
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
        <span className='indicators'>
            {data.map((_, index)=>{
                return(<button key={index} onClick={()=> setSlide(index)} className={slide === index? "indicator": "indicator-inactive"}></button>)
            })}
        </span>
      <style jsx>{`
      .Carousel{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 400px;
        width: 600px;
        transition: all 0.7s ease;
      }
      .Carousel:hover .arrow{
        display: block;
        transform: scale(1.1);
        
      }
      .slide{
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;
      }
      .arrow{
        display: none;
        position: absolute;
        width: 2rem;
        height: 2rem;
        color: white; 
        filter: drop-shadow(0px 0px 5px #555);
      }
      .arrow:hover{
        cursor: pointer;
      }
      .arrow-left{
        left: 1rem;
      }
      .arrow-right{
        right: 1rem;

      }
      .indicators{
        display: flex;
        position: absolute;
        bottom: 1rem;
      }
      .indicator{
        background-color: white;
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 100%;
        border: none;
        outline: none;
        box-shadow: 0px 0px 5px #555;
        margin: 0 0.2rem;
        cursor: pointer;
      }
      .slide-hidden{
        display: none;
      }
      .indicator-inactive{
        background-color: grey;
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 100%;
        border: none;
        outline: none;
        box-shadow: 0px 0px 5px #555;
        margin: 0 0.2rem;
        cursor: pointer;
      }
      `}</style>
    </div>
  )
}

export default Carousel
