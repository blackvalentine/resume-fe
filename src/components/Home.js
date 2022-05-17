import Header from './Header';
import Intro from './Intro';
import About from './About'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer';

function Home() {
  return (
    <div className="my-resume">
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
