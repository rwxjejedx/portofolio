// Pastikan Anda mengimpor semua komponen section dari folder components
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection'; 
import PortofolioSection from '../components/PortofolioSection';
import ExpirienceSection from '../components/ExpirienceSection';
import TestimoniSection from '../components/TestimoniSection';
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <main>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/> 
        <PortofolioSection/>
        <ExpirienceSection/>
        <TestimoniSection/>
        <ContactSection/>
      </main>
  );
}

export default Home;