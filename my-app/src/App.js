import React from "react";
import { Nav } from "./components/nav_bar";
import Main from "./main";
import Footer from "./footer";

function App() {
  return (
  <div className="page_container">
    <div className="content_wrap">
      <Nav />
      <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
