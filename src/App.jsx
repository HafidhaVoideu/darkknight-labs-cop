import { useEffect } from "react";

// import Dashboard from "./scenes/dashboard/Dashboard";

import { setGlowEffectRx } from "./utils/functions";

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
