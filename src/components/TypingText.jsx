import React, { useState, useEffect } from 'react';

const TypingText = ({ text, delay, wait = 0, onFinish, isAnimate = true, erase = false}) => {
  const [currentText, setCurrentText] = useState(
    erase ? text : ""
  );
  const [currentIndex, setCurrentIndex] = useState(
    erase ? text.length  : 0
  );
  const [isWaiting, setIsWaiting] = useState(true);

  const writeText = (text, delay, onFinish) =>{
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onFinish) {
      onFinish();
    }
  }
  const eraseText = (text) => {
    if(currentIndex > 0){
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (currentIndex < 0 && onFinish) {
      onFinish();
    }
  }

  useEffect(() => {
    if (isAnimate){
      if (isWaiting) {
        //console.log(`wait : ${text} : ${wait}`);
        const waiter = setTimeout(() => {
          setIsWaiting(false);
        }, wait);
  
        return () => clearTimeout(waiter);
      } else {
        if(erase){
          eraseText(text, delay, onFinish);
        }else{
          writeText(text, delay, onFinish);
        }
      }
    }else{
      setCurrentText(text);
    }

  }, [currentIndex, delay, text, wait, isWaiting, onFinish]);

  return <>{currentText}</>;
};

export default TypingText;
