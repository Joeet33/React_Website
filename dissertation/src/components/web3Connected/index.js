import React from "react"
import { LoggedInContainer } from "./index.styles"
import { Transactions } from "../web3Transactions"

export const Web3Connected = () => {
  return (
      <LoggedInContainer>
<div className="Title">Tesla for sale</div>

<img src={require("../../assets/tesla.png")} alt="Car"/>

<div className="Price">Price: 0.00015 Eth</div>

    <Transactions />
    </LoggedInContainer>
  )
}
