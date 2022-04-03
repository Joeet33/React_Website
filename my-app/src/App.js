import React, { useState, useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ROUTER_PATHS } from "./routerPaths"
import { Nav } from "./components/nav_bar/"
import { Main } from "./components/main/"
import { Layout } from "./components/layout"
import { Login } from "./components/login"
import { Signup } from "./components/sign_up"
import { Shop } from "./components/shop"

export const App = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false)
  const [isWeb2, setIsWeb2] = useState(false)

  const handleChange = (event) => {
    setIsWeb2(event.target.checked)
    localStorage.setItem("On/Off", JSON.stringify(event.target.checked))
  }

  useEffect(() => {
    const toggleData = localStorage.getItem("On/Off")
    if (toggleData != null) setIsWeb2(JSON.parse(toggleData))
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Nav checked={isWeb2} setChecked={(e) => handleChange(e)} />
        <Routes>
          <Route path={ROUTER_PATHS.HOME} element={<Main checked={isWeb2} />} />
          <Route path={ROUTER_PATHS.SHOP} element={<Shop />}></Route>
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
