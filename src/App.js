import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Trending from "./components/Trending";
import EnjoyTv from "./components/EnjoyTV";
import FAQ  from "./components/FAQ";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Trending />
      <EnjoyTv />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
