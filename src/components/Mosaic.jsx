import React, {useState, useEffect} from 'react';

function Mosaic({mosaicSize, styleName}){
  const square = Array.from({ length: mosaicSize * mosaicSize }, (_, i) => i + 1);
  const opacityValues = [50, 60, 70, 80];
  const [squareOpacities, setSquareOpacities] = useState(() => {
    return square.map((_, index) => {
      const opacityIndex = index % opacityValues.length;
      return opacityValues[opacityIndex] / 100;
    });
  });
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  useEffect(() => {
    const indexes = Array.from({ length: square.length }, (_, i) => i);
    shuffle(indexes);
    indexes.forEach((index, i) => {
      setTimeout(() => {
        setSquareOpacities(prev => {
          const newOpacities = [...prev];
          newOpacities[index] = 0;
          return newOpacities;
        });
      }, i * 150);
    });
  }, []);

  return <>
    <div className={`mosaic primary h-[150vw] w-[150vw] ${styleName ? styleName : ""}`}>
      <div className={`grid grid-flow-col grid-rows-6 gap-0`}>
      {square.map((num, index) => (
        <div 
          key={num}
          className="square"
          style={{ opacity: squareOpacities[index] }}
        />
      ))}
      </div>
    </div>
  </>
}

export default Mosaic