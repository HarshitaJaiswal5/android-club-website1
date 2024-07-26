import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FastMarquee from 'react-fast-marquee';

const ScrollingImages = (props) => {
  const [scrollSpeed, setScrollSpeed] = useState(40); // Initial scroll speed

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll speed based on scroll direction
      const newScrollSpeed = 40 + (window.scrollY * 0.05); // Example adjustment based on scrollY
      setScrollSpeed(newScrollSpeed);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Using FastMarquee from react-fast-marquee */}
      <FastMarquee
        gradient={false}
        autoFill={true}
        direction={props.direction}
        speed={scrollSpeed} // Dynamically adjust speed based on scroll
        className={`py-3 bg-green-950 ${props.margin}`}
      >
        {/* Example images */}
        <motion.img className='h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/unStop.avif' alt='image' />
        <motion.img className='h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/coding-ninja-logo.jpeg' alt='image' />
        <motion.img className='h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/dainikbhaskar.png' alt='image' />
        <motion.img className='h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/notion.jpg' alt='image' />
        <motion.img className='h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/give_my_certificate.png' alt='image' />
        <motion.img className='h-16 mr-10 w-36 rounded-md' src='AboutPage_Assets/hackerarth-696x348.webp' alt='image' />
      </FastMarquee>
    </>
  );
};

export default ScrollingImages;
