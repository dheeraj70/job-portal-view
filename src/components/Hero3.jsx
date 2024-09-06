import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Hero3 = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div className='hero hero3'>
        <div className="hero3-l">
            <div className="hero3-ls">
            <p className='m0' style={{fontSize:'2.5rem', fontStyle: 'italic', fontWeight: '700'}} >Download</p>
            <img style={{height: !isTabletOrMobile?'5rem':'3rem'}} className='hero3-logo' src="logo.svg" alt="logo" />
            <p className='m0' style={{fontSize:'3rem', fontStyle: 'italic', fontWeight: '700'}}>App now</p>
            <p className='m0 hero3-dwnld-tag' style={{fontSize: !isTabletOrMobile?'1.5rem':'1rem', fontWeight: '500', textAlign: 'center'}}>Endless possibilities in the palm of your hand</p>
       
            </div>
 </div>
        <div className="hero3-r">
            <img className='hero3-img' src="/assets/download.png" alt="" />
        </div>
    </div>
  )
}
