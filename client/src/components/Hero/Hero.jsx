import "./Hero.css";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import SearchBar from "../SearchBar/SearchBar";

const images = ["./r1.png", "./r2.png", "./r3.png"]; // Add more image URLs as needed



const Hero = () => {
  // const images = ['r1.png', 'r2.png', 'r3.png'];
 

 const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    // Function to update the current image every 4 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);
    // 4000 ms is time after image id is changed

    // Cleanup 
    return () => clearInterval(intervalId);
  }, []);



  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1}}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Uncover <br />
              Your Next
              <br /> Investment
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          {/* <SearchBar/> */}
          <div>---------------------------------------</div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
                 
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={18} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>


        {/* right side */}
        
        {/* // side move effect  */}
        <div className="flexCenter hero-right">
          <motion.div
            key={currentImage}
            initial={{ x: '7rem', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-7rem', opacity: 0 }}
            transition={{
              duration: 2, // Adjust the duration as needed
              ease: "easeInOut", // Use a different easing function if desired
            }}
            className="image-container"
          >
            <img src={images[currentImage]} alt={`houses-${currentImage}`} />
          </motion.div>
        </div>

        {/* // fade in out effect */}
        {/* <div className="flexCenter hero-right">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{
              duration: 2, // Adjust the duration as needed
              ease: "easeInOut", // Use a different easing function if desired
            }}
            className="image-container"
          >
            <img src={images[currentImage]} alt={`houses-${currentImage}`} />
          </motion.div>
        </div> */}
      </div>
      <br/>
      
    </section>

  );
};

export default Hero;
