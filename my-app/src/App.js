import React, { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ROUTER_PATHS } from "./routerPaths"
import { Nav } from "./components/nav_bar/"
import { Main } from "./components/main/"
import { Layout } from "./components/layout"
import { Login } from "./components/login"
import { Signup } from "./components/sign_up"
import { Connect } from "./components/connect"

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path={ROUTER_PATHS.HOME} element={<Main />} />
          <Route path={ROUTER_PATHS.CONNECT} element={<Connect />} />
          <Route
            path={ROUTER_PATHS.LOGIN}
            element={
              !isLoggedin ? (
                <Login loginState={(value) => setIsLoggedIn(value)} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path={ROUTER_PATHS.SIGNUP}
            element={!isLoggedin ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
