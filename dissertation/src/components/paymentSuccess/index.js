import React from "react"
import { LoggedInContainer } from "./index.styles"

export const PaymentSuccess = () => {
  return (
    <LoggedInContainer>
      <div className="Title">Sold</div>

      <img src={require("../../assets/tesla.png")} alt="Car" />

      <div className="Price">Congratulations you've just purchased a Tesla</div>
    </LoggedInContainer>
  )
}
