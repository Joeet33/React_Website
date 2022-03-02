import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./components/nav_bar/index"
import { Main } from "./components/main/index"
import { Layout } from "./components/layout"
import { Signup } from "./components/sign_up/index"
import { ROUTER_PATHS } from "./routerPaths"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path={ROUTER_PATHS.HOME} element={<Main />} />
          <Route exact path={ROUTER_PATHS.SIGNUP} element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
