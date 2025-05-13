import AboutText from "../components/AboutText";
import Hero from "../components/Hero";
import HomeText from "../components/HomeText";
import OurServices from "../components/OurServices";
import Parallax from "../components/Parallax";

export default function Home() {
  return (
    <div>
        <Hero/>
        <OurServices/>
        <Parallax/>
        <HomeText/>
    </div>
  )
}
