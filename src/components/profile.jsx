
import { useEffect, useRef, useState } from 'react';
import sanjayImg from '../assets/sanjay.png';
import resumePdf from '../assets/resume.pdf';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';


export default function Profile() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="home" className='profile-section'>
      <div className='profile-container'>
        <div className='profile-image-wrapper'>
          <img
            className='profile-image'
            alt="Profile"
            src={sanjayImg}
          />
        </div>
        <div className='profile-details'>
          <div
            ref={textRef}
            className={`profile-text-content reveal-on-scroll ${isVisible ? 'reveal-visible' : ''}`}
          >
            <h1 className='profile-name'>Sanjay</h1>
            <h3 className='profile-title'>Full Stack Developer</h3>
            <p className='profile-description'>
              Passionate developer with expertise in building modern web applications.
              I love creating clean, efficient, and user-friendly solutions.
            </p>
            <p className='profile-description secondary'>
              I enjoy working across the full stack, from crafting responsive UIs
              to designing robust backends and APIs. Always learning, always
              experimenting with new tools and best practices.
            </p>
          </div>
          <div className='profile-actions'>
            <a href="#projects" className='profile-btn primary-btn'>View Projects</a>
            <a href={resumePdf} download="Sanjay_Resume.pdf" className='profile-btn secondary-btn'>Resume</a>
          </div>
          <div className='profile-social'>
            <a href="https://www.facebook.com/san.jay.poudel.2025" className='social-icon'><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/sanjaychudali01/" className='social-icon'><FaLinkedin /></a>
            <a href="https://github.com/sanjaynep" className='social-icon'><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
