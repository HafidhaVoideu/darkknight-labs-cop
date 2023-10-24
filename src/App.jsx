import { useEffect } from "react";

// import Dashboard from "./scenes/dashboard/Dashboard";

import { setGlowEffectRx } from "./utils/functions";

import Homepage from "./scenes/homepage/Homepage";
import Footer from "./scenes/global/footer/Footer";

function App() {
  useEffect(() => {
    setGlowEffectRx();
  });

  return (
    <>
      {/* <Dashboard /> */}

      <Homepage />
      <Footer/>
    </>
  );
}

export default App;
