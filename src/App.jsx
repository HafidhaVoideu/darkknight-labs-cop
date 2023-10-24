import { useEffect } from "react";

import Header from "./scenes/global/header/Header";
import Home from "./scenes/sections/home/Home";
import Services from "./scenes/sections/services/Services";
import Members from "./scenes/sections/members/Members";
import Partners from "./scenes/sections/partners/Partners";
import About from "./scenes/sections/about/About";
import Footer from "./scenes/global/footer/Footer";

import Dashboard from "./scenes/dashboard/Dashboard";

import { setGlowEffectRx } from "./utils/functions";
import Popup from "./components/modal/Popup";
import Alert from "./components/alert/Alert";
import Homepage from "./scenes/homepage/Homepage";

function App() {
  useEffect(() => {
    setGlowEffectRx();
  });

  return (
    <>
      {/* <Dashboard /> */}

      <Homepage />
    </>
  );
}

export default App;
