import React from "react";
import { createGlobalStyle } from 'styled-components'
import { Nav } from "./components/nav_bar";
import Main from "./components/main";
import Footer from "./components/footer";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

  body {
    margin: 0;
    min-height: 100vh;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <div className="page_container">
    <div className="content_wrap">
      <Nav />
      <Main />
    </div>
      <Footer />
    </div>
    </>
  );
}


export default App;
