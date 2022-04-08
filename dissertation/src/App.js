import React, { useState, useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ROUTER_PATHS } from "./routerPaths"
import { Nav } from "./components/navBar"
import { Main } from "./components/main/"
import { Layout } from "./components/layout"
import { Login } from "./components/loginForm"
import { Shop } from "./components/shop"
import { StripeContainer } from "./components/stripe_container"
import { PaymentSuccess } from "./components/paymentSuccess"
import { Signup } from "./components/signup"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
        <Nav
          checked={isWeb2}
          setChecked={(e) => !handleChange(e)}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route path={ROUTER_PATHS.HOME} element={<Main checked={isWeb2} />} />
          <Route
            path={ROUTER_PATHS.SHOP}
            element={<Shop checked={isWeb2} isLoggedIn={isLoggedIn} />}
          />
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
          <Route
            path={ROUTER_PATHS.SIGNUP}
            element={!isLoggedIn ? <Signup /> : <Navigate to="/" />}
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
