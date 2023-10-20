import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [responsiveMenu, setresponsiveMenu] = useState(true)
  function toggleMenu() {
    setresponsiveMenu(!responsiveMenu)
  }
 
  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 2;
      setIsSticky(window.scrollY >= halfScreen);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`Navbar ${isSticky ? 'sticky' : ''}`}>
      <div className='sub-navbar1'>
          <div className='logo'>GPT-3</div>
          
          <div className={responsiveMenu ? 'list-container' : 'list-container_active'}>
              <ul className='unordered-list'>
                  <li>Home</li>
                  <li>What is GPT-3</li>
                  <li>Open Ai</li> 
                  <li>Case Studies</li>
                  <li>Library</li>
              </ul>
        </div>
        </div> 
          
      <div className='sub-navbar2'>
          <div className='sub_sub-navBar2'>
              <span className='sign-in'>sign in</span>
              <span className='sign-up'>sign up</span>
        </div>
        <div className='close-option' onClick={toggleMenu}>
        ☰
        </div>
        </div>
          
    </div>
  )
}
