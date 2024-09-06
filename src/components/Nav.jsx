import React, { useState, useRef, useEffect } from 'react';
import './Nav.css';

export const Nav = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navRef = useRef(null);
    const indicatorRef = useRef(null);

    useEffect(() => {
        const navLinks = navRef.current.querySelectorAll('.nav-link');
        const selectedLink = navLinks[selectedIndex];

        const width = selectedLink.offsetWidth;
        const left = selectedLink.offsetLeft;

        indicatorRef.current.style.width = `${width}px`;
        indicatorRef.current.style.left = `${left}px`;
    }, [selectedIndex]);

    return (
        <nav className='nav-bar'>
            <div className="nav-left">
            <img className='nav-logo-img' src="/logo.svg" alt="TLD" />
            <div className="nav-links" ref={navRef}>
                <div className="nav-hr-selected" ref={indicatorRef}></div>
                <button style={{fontWeight: selectedIndex===0?'600':'400'}} className="nav-link" onClick={() => setSelectedIndex(0)}>Home</button>
                <button style={{fontWeight: selectedIndex===1?'600':'400'}} className="nav-link" onClick={() => setSelectedIndex(1)}>Find</button>
                <button style={{fontWeight: selectedIndex===2?'600':'400'}} className="nav-link" onClick={() => setSelectedIndex(2)}>Create</button>
                <button style={{fontWeight: selectedIndex===3?'600':'400'}} className="nav-link" onClick={() => setSelectedIndex(3)}>Promoter</button>
            </div>
            </div>
            
            <button className="nav-profile">
                <img className='nav-profile-img' src="/profile.jpg" alt="Profile" />
            </button>
            <div className="nav-hr"></div>
        </nav>
    );
}
