import React, {useState, useEffect, useRef} from 'react';
import TypingText from './TypingText';
function MainNav({}) {
  const navBar = useRef(null);
  const [lastName, setLastName] = useState('Pardo');
  const [firstName, setFirstName] = useState('Sarah');
  const [eraseAnimed, setEraseAnimed] = useState(false);
  const [typingAnimed, setTypingAnimed] = useState(true);
  const [isVisible, setIsVisibel] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const writingDelay = 200;

  const logoClipRef = useRef(null);
  const logoClipSpanRef = useRef(null);
  const mainNavMobile = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      //Show main nav when the projects section is on top of the screen 
      if(window.scrollY > 80){
        setIsVisibel(true);
      }else{
        setIsVisibel(false);
      }  
    };    
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

    // Add event listeners for wheel and touchmove events
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });

    // Cleanup the event listeners when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
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

  const handleNavButtonClick = () => {
    const nav = mainNavMobile.current;
    if (nav) {
      nav.classList.toggle('show', !isMobileNavOpen);
      setIsMobileNavOpen(prevState => !prevState);
    }
  };

  return (<>
    <nav ref={navBar} id="main-nav" className='fixed top-0 right-0 left-0 z-10 w-full h-[80px] flex items-center lg:px-[80px] px-[25px]'>
      <div className='flex-1 nav-logo'>
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
        <li><a href='/projects'>projets</a></li>
      </ul>
      <div className='w.fit lg:hidden' onClick={handleNavButtonClick}>
        <i className="icon-open-nav bi bi-bar-chart-fill"></i>  
      </div>
    </nav>
    <nav ref={mainNavMobile} id="main-nav-mobile" className='lg:hidden'>
      <ul className="flex flex-col p-0">
        <li className="flex-1 bg-red-700 pl-[25px]"><a href="/about">A propos</a></li>
        <li className="flex-1 bg-red-600"><a href="/projects">Projets</a></li>
        <li className="flex-1 bg-red-500"></li>
        <li className="flex-1 bg-red-400"></li>
        <li className="flex-1 bg-red-300"></li>
        <li className="flex-1 bg-red-200"></li>
        <li className="flex-1 bg-red-100"></li>
        <li className="flex-1 bg-red-50"></li>
      </ul>
    </nav>
  </>);
}

export default MainNav;
