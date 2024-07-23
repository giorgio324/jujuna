import AboutSection from '../components/AboutSection';
import HomeSection from '../components/HomeSection';
import NewsSection from '../components/NewsSection';

const Home = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection id={'about'} />
      <NewsSection id={'news'} />
    </main>
  );
};

export default Home;
