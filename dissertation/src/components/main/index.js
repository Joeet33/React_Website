import { useContext } from "react"

import { TransactionContext } from "../../context/TransactionContext"
import { LoggedInContainer } from "../main/index.styles"

export const Main = ({ checked }) => {
  const { currentAccount } = useContext(TransactionContext)

  return (
    <>
      {" "}
      <LoggedInContainer>
        <div className="Title">Car For Sale</div>
      </LoggedInContainer>
      <LoggedInContainer>
        {checked
          ? currentAccount && <h3>Wallet Address: {currentAccount} </h3>
          : null}

        <div>To purchase your car head over to Shop!</div>

        <img src={require("../../assets/tesla.png")} alt="Car" />
      </LoggedInContainer>
    </>
  )
}
