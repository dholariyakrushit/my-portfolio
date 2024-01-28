import AboutMe from "@/components/aboutme/AboutMe";
import HeroSection from "@/components/Hero/HeroSection";
import MyService from "@/components/myservice/MyService";
import MyPortfolio from "@/components/portfolio/MyPortfolio";


export default function Home() {
  return (
    <>
   <HeroSection/>
   <AboutMe/>
   <MyService/>
   <MyPortfolio/>
   </>
  );
}
