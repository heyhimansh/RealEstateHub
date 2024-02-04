import React, { useEffect } from 'react';
import { motion ,useAnimation} from 'framer-motion';

const ImgMotion = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.v-left');
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        controls.start({ y: 0, opacity: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const controls = useAnimation();

  return (
    <div className="v-left" style={{ overflow: 'hidden', height: '100vh' }}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={controls}
        exit={{ y: '100%', opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        style={{ display: 'flex', alignItems: 'center', height: '100%' }}
      >
        <div className="image-container">
          <img src="./lgg.png" alt="" style={{ width: '100%', height: 'auto' }} />
        </div>
      </motion.div>
    </div>
  );
};

export default ImgMotion;
