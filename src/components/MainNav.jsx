import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import TypingText from './TypingText';
function MainNav({isVisible}) {
  const navigate = useNavigate();
  const navBar = useRef(null);
  const [lastName, setLastName] = useState('Pardo');
  const [firstName, setFirstName] = useState('Sarah');
  const [eraseAnimed, setEraseAnimed] = useState(false);
  const [typingAnimed, setTypingAnimed] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const writingDelay = 200;

  const logoClipRef = useRef(null);
  const logoClipSpanRef = useRef(null);
  const mainNavMobile = useRef(null);

  useEffect(() => {  
    if(navBar){
      if (isVisible) {
        navBar.current.classList.add("isvisible");
      } else {
        navBar.current.classList.remove("isvisible");
      }
    }

    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
  }, [isMobileNavOpen, isVisible]);

  const handleTypingFinish = () => {
    setTypingAnimed(false);
    setTimeout(() => {
      if(logoClipRef.current) {
        logoClipRef.current.classList.add('shrink');
      }
      setTimeout(() => {
        //setFirstName("");
        setLastName("P");
      }, 1400);
    }, writingDelay * 5);
      
  };

  const handleNavLogoButtonClick = () => {
    console.log("toto")
    navigate(`/`);
  };

  const handleNavButtonClick = () => {
    const nav = mainNavMobile.current;
    if (nav) {
      nav.classList.toggle('show', !isMobileNavOpen);
      setIsMobileNavOpen(prevState => !prevState);
    }
  };

  return (<>
    <nav ref={navBar} id="main-nav" className='fixed top-0 right-0 left-0 z-20 w-full h-[80px] flex items-center lg:px-[80px] px-[25px]'>
      <div className='flex-1 nav-logo' onClick={handleNavLogoButtonClick}>
        <h3 className='nav-logo-text w-fit relative'>
          <div className='nav-logo-clip bg-transparent py-[6px]'>
            <span className='text-nowrap pl-[10px] text-transparent'>
              <TypingText text={lastName} delay={writingDelay}  key={lastName} isAnimate={typingAnimed}/>
            </span>
            <span className='text-nowrap my-[6px] pl-[10px] pr-[10px] text-transparent'>
              <TypingText text={firstName} wait={writingDelay * (lastName.length + 1)} delay={writingDelay} key={firstName} isAnimate={typingAnimed}/>
            </span>
          </div>
          <div ref={logoClipRef} className='nav-logo-clip py-[6px] absolute top-0 left-0 z-10'>
            <span className='text-nowrap pl-[10px] text-white'>
              <TypingText text={lastName} delay={writingDelay}  key={lastName} isAnimate={typingAnimed}/>
            </span>
            <span ref={logoClipSpanRef} className=' text-nowrap pl-[10px] pr-[10px] text-white'>
              <TypingText text={firstName} wait={writingDelay * (lastName.length + 1)} delay={writingDelay} key={firstName} isAnimate={typingAnimed} onFinish={handleTypingFinish}/>
            </span>
          </div>
        </h3>
      </div>
      <ul className='lg:flex hidden w-fit flex flex-row space-x-[20px]'>
        <li><a href='/about'>A propos</a></li>
        <li><a href='/ariane'>Ariane</a></li>
      </ul>
      <div className='w.fit lg:hidden' onClick={handleNavButtonClick}>
        <i className="icon-open-nav bi bi-bar-chart-fill"></i>  
      </div>
    </nav>
    <nav ref={mainNavMobile} id="main-nav-mobile" className='lg:hidden'>
      <ul className="flex flex-col p-0">
        <li className="flex-1 bg-accent-700 pl-[25px]"><a href="/about">A propos</a></li>
        <li className="flex-1 bg-accent-600 pl-[25px]"><a href="/ariane">Ariane</a></li>
        <li className="flex-1 bg-accent-500"></li>
        <li className="flex-1 bg-accent-400"></li>
        <li className="flex-1 bg-accent-300"></li>
        <li className="flex-1 bg-accent-200"></li>
        <li className="flex-1 bg-accent-100"></li>
        <li className="flex-1 bg-accent-50"></li>
      </ul>
    </nav>
  </>);
}

export default MainNav;
