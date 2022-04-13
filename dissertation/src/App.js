import React, { useState, useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ROUTER_PATHS } from "./routerPaths"
import { Nav } from "./components/nav"
import { Main } from "./components/main/"
import { Layout } from "./components/layout"
import { Login } from "./components/web2LoginForm"
import { Shop } from "./components/shop"
import { StripeContainer } from "./components/web2StripeContainer"
import { PaymentSuccess } from "./components/paymentSuccess"
import { Register } from "./components/web2RegisterForm"

export const App = () => {
  //sets isLoggenIn state to false
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  //sets isWeb2 state to false
  const [isWeb2, setIsWeb2] = useState(false)

  //if isWeb2 is set to false it will stay on web2 when refreshed, if isWeb2 is set to true it will stay on web3 when refreshed
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
        <Nav
          checked={isWeb2}
          setChecked={(e) => !handleChange(e)}
          isLoggedIn={isLoggedIn}
        />
        {/* routes are used to render in different pages */}
        <Routes>
          <Route path={ROUTER_PATHS.HOME} element={<Main checked={isWeb2} />} />
          <Route
            path={ROUTER_PATHS.SHOP}
            element={<Shop checked={isWeb2} isLoggedIn={isLoggedIn} />}
          />
          {/* if not logged in render web2LoginForm, else logged in go to main */}
          <Route
            path={ROUTER_PATHS.LOGIN}
            element={
              !isLoggedIn ? (
                <Login loginState={(value) => setIsLoggedIn(value)} />
              ) : (
                <Navigate to={ROUTER_PATHS.HOME} />
              )
            }
          />
          {/* if not logged in render web2LoginForm, else render StripeContainer */}
          <Route
            path={ROUTER_PATHS.PAYMENT}
            element={
              !isLoggedIn ? (
                <Login loginState={(value) => setIsLoggedIn(value)} />
              ) : (
                <StripeContainer to={ROUTER_PATHS.PAYMENT} />
              )
            }
          />
          {/* if not logged in render register, else remove link */}
          <Route
            path={ROUTER_PATHS.SIGNUP}
            element={!isLoggedIn ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path={ROUTER_PATHS.PAYMENTSUCCESS}
            element={<PaymentSuccess />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
