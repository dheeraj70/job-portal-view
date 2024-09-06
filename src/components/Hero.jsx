import React from "react";
import "./Hero.css";
import { useMediaQuery } from 'react-responsive';

export const Hero = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div className="hero hero1">
      <div className="hero-left">
        <p className="hero-head">Search your dream job here</p>
        <p className="hero-tag">
          Discover your next opportunity and the people who can help you get
          there.
        </p>
        <div className="hero-query">
          <div className="hero-query-l">
            <img
              className="hero-query-inp-img"
              src="/assets/experience.png"
              alt="Job"
            />
            <input className="hero-query-inp" type="text" placeholder="Enter job title, skills"/>
          </div>
          <div className="hero-query-vr"></div>
          <div className="hero-query-m">
            <img
              className="hero-query-inp-img"
              src="/assets/location.png"
              alt="Job"
            />
            <input className="hero-query-inp" type="text" placeholder="Enter location (Zip, City, State)"/>
          </div>
          <div className="hero-query-vr"></div>
          <div className="hero-query-r">
            <button className="hero-query-search">Search</button>
          </div>
        </div>
        <p className="hero-tag">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, a.
        </p>
      </div>
      {!isTabletOrMobile&&<div className="hero-right">
        <img src="/hero-pic.jpg" alt="TLD Jobs" className="hero-pic" />
      </div>}
    </div>
  );
};
