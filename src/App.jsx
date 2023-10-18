import { useEffect } from "react";

import Header from "./scenes/global/header/Header";
import Home from "./scenes/sections/home/Home";
import Services from "./scenes/sections/services/Services";
import Members from "./scenes/sections/members/Members";
import Partners from "./scenes/sections/partners/Partners";
import About from "./scenes/sections/about/About";
import Footer from "./scenes/global/footer/footer";

function App() {
  useEffect(() => {
    (function setGlowEffectRx() {
      const glowEffects = document.querySelectorAll(".glow-effect");

      glowEffects.forEach((glowEffect) => {
        const glowLines = glowEffect.querySelectorAll("rect");
        const rx = getComputedStyle(glowEffect).borderRadius;

        glowLines.forEach((line) => {
          line.setAttribute("rx", rx);
        });
      });
    })();
  }, []);

  return (
    <>
      <Header />

      <Home />

      <Services />

      <Members />

      <Partners />

      <About />

      <Footer />
    </>
  );
}

export default App;
