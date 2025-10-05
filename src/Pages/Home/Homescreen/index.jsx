import AboutMe from "../AboutMe";
import Awards from "../Awards";
import ContactMe from "../ContactMe";
import Education from "../Education";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Education />
      <Awards/>
      <ContactMe />
      <Footer />
    </>
  );
}
