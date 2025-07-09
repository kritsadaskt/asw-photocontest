import React, { useEffect, useState } from "react";
import 'animate.css'

function BackTotopComp() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [goTop, setGoTop] = useState('hidden');

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)

    if(scrollPosition > 500) {
      return setGoTop('animate__slideInUp')
    } else {
      return setGoTop('hidden')
    }
  }

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })

  //console.log(scrollPosition);

  return (
    <button className={ "animate__animated animate__faster fixed bottom-4 right-6 z-10 p-4 rounded-full bg-[#e8501d] shadow-lg " + goTop} onClick={handleScrollUp}>
      <svg width='20' height='20' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
    </button>
  )
}

export default BackTotopComp;