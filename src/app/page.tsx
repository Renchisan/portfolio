'use client';

import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Projects from '../components/Projects';
import React from 'react';


const LandingPage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [_showInfo, setShowInfo] = useState(false);
  const [_showNav, setShowNav] = useState(false);
  const [_showProjects, setShowProjects] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'home' | 'projects' | 'contact'>('projects');

  useEffect(() => {
    const loaderDuration = 5500;

    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
      setShowInfo(true);
      setTimeout(() => setShowNav(true), 300);
      setTimeout(() => setShowProjects(true), 600);
    }, loaderDuration);

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black font-mono overflow-hidden">
      {showLoader && <Loader />}

      {!showLoader && (
        <>
          {/* Info Panel */}
          <div
            className={`fixed z-20 border border-black transform transition-all duration-700 ease-out px-6 py-4  ${
              selectedTab === 'contact'
                ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90%] opacity-0 pointer-events-none' 
                : 'left-12 top-12 right-12 bottom-12 opacity-100 pointer-events-none'
            }`}
          >

            <div className='px-2 py-2'>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-300 via-black to-gray-300 bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
              MONDO
            </h1>
            <p className="text-sm text-gray-600">inspiring designer and developer</p>
            </div>
          </div>



          {/* Navigation */}
          <div className="fixed z-10 top-5 left-12 text-left flex space-x-4"
          >
            {['home', 'projects', 'contact'].map((tab) => (
              <div
                key={tab}
                onClick={() => setSelectedTab(tab as 'home' | 'projects' | 'contact')}
                className={`mb-2 cursor-pointer hover:underline ${
                  selectedTab === tab ? 'underline font-bold' : ''
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </div>

          {/* Selected tab */}
          {selectedTab === 'projects' && (
            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1/2 px-4">
              <Projects />
            </div>
          )}

          {selectedTab === 'home' && (
            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 px-4 text-2xl font-semibold text-center">
              <p>hi!</p>
            </div>
          )}

          {selectedTab === 'contact' && (
            <div>
                <div className=" fixed  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col font-bold text-sm text-center items-center">
                <a
                  href="mailto:aprildagdagan97@gmail.com"
                  className="flex items-center space-x-1  text-black hover:text-gray-600 hover:underline transition-colors"
                >
                  <span>email</span>
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href="https://github.com/Renchisan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-black hover:text-gray-600 hover:underline transition-colors"
                >
                  <span>github</span>
                  <span className="text-xs">↗</span>
                </a>

                <a
                  href="https://gitlab.com/Renchisan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-black hover:text-gray-600 hover:underline transition-colors"
                >
                  <span>gitlab</span>
                  <span className="text-xs">↗</span>
                </a>

                <a
                  href="https://instagram.com/eprelkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-black hover:text-gray-600 hover:underline transition-colors"
                >
                  <span>instagram</span>
                  <span className="text-xs">↗</span>
                </a>

                {/* <a
                  href="https://linkedin.com/in/april"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-black hover:text-gray-600 hover:underline transition-colors"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs">↗</span>
                </a> */}
              </div>           
            </div>

          )}
        </>
      )}
    </div>
  );
};

export default LandingPage;
