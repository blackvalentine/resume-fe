import { useEffect, useMemo } from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Audio from './Audio';
import './Home.scss';
import SvgAnimation from './SvgAnimation';
import gsap from 'gsap';

function Home() {
  // const tl = useMemo(() => gsap.timeline({ paused: true }), []);
  // useEffect(() => {
  //   tl
  //     .from('.nav__group', {
  //       duration: 1,
  //       y: 20,
  //       // delay: 8.5,
  //       ease: 'Expo.easeInOut',
  //       opacity: 0,
  //     })
  //     .from('.nav__item', {
  //       stagger: .3,
  //       duration: 2,
  //       y: 20,
  //       ease: 'Expo.easeInOut',
  //       opacity: 0
  //     }, '-=1')
  //     .from('.nav__resume', {
  //       duration: 1,
  //       y: 20,
  //       ease: 'Expo.easeInOut',
  //       opacity: 0
  //     }, '-=1.2')
  //     .from('.intro__social-list', {
  //       duration: 1,
  //       y: -20,
  //       ease: 'Expo.easeInOut',
  //       opacity: 0
  //     })
  //     .from('.intro__gmail', {
  //       duration: 1,
  //       y: -20,
  //       ease: 'Expo.easeInOut',
  //       opacity: 0
  //     }, '-=1')
  //     .from('.intro__wrapper', {
  //       duration: 1,
  //       x: -20,
  //       ease: 'Expo.easeInOut',
  //       opacity: 0
  //     })
  //   tl.play(0);
  // })

  return (
    <div className="my-resume">
      <div className="loader__wrap">
        <div className="loader">
          <div className="loader__item loader__item0">
          </div>
          <div className="loader__item loader__item1">
            <SvgAnimation />
          </div>
          <div className="loader__item loader__item2">
            <span>Just a boring developer</span>
          </div>
          <div className="loader__item loader__item3">
            <span>Welcome to my secret world. Enjoy it.</span>
          </div>
        </div>
      </div>
      <Audio />
      <Header />
      <Intro />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
