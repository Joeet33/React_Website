import React from "react"
import { LoggedInContainer, StyledLink } from "./index.styles"
import { ROUTER_PATHS } from "../../routerPaths"

export const Web2LoggedIn = () => {
  return (
    <LoggedInContainer>
      <div className="Title">Tesla for sale</div>

      <img src={require("../../assets/tesla.png")} alt="Car" />

      <div className="Price">Price: £30,000</div>

      <StyledLink to={ROUTER_PATHS.PAYMENT}>Pay Now</StyledLink>
    </LoggedInContainer>
  )
}
