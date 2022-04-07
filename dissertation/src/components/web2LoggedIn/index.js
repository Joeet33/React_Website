import React from "react"
import { Link } from "react-router-dom"
import { LoggedInContainer } from "./index.styles"
import { ROUTER_PATHS } from "../../routerPaths"

export const Web2LoggedIn = () => {
  return (
      <LoggedInContainer>
<div className="Title">Tesla for sale</div>

<img src={require("../../assets/tesla.png")} alt="Car"/>

<div className="Price">Price: £30,000</div>

    <Link to={ROUTER_PATHS.PAYMENT}>Pay</Link>
    </LoggedInContainer>
  )
}
