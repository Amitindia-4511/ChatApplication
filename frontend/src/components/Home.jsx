import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { TextHoverEffect } from "./ui/Home-ui-effect";
function Home() {
  return (
    <>
      <Navbar />
      <TextHoverEffect text="LOVE" />
    </>
  );
}

export default Home;
