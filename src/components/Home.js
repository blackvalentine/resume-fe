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

function Home() {
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
