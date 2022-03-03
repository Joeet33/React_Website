import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTER_PATHS } from "./routerPaths"
import { Nav } from "./components/nav_bar/"
import { Main } from "./components/main/"
import { Layout } from "./components/layout"
import Login from "./components/login"
import Signup from "./components/sign_up"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path={ROUTER_PATHS.HOME} element={<Main />} />
          <Route path={ROUTER_PATHS.LOGIN} element={<Login />} />
          <Route path={ROUTER_PATHS.SIGNUP} element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
