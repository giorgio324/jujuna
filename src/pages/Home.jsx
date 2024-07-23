import AboutSection from '../components/AboutSection';
import HomeSection from '../components/HomeSection';

const Home = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection id={'about'} />
    </main>
  );
};

export default Home;
