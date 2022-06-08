import { useEffect } from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Audio from './Audio';
import userApi from '../api/userApi';

function Home() {

  useEffect(() => {
    (
      async () => {
        const response = await userApi.getToken()
        sessionStorage.setItem('user', JSON.stringify(response.data))
      }
    )();
  })

  return (
    <div className="my-resume">
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
