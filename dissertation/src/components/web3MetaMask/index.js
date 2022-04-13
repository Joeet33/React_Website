import { useContext } from "react"

import { TransactionContext } from "../../context/TransactionContext"

import { StyledButton } from "./index.styles"

export const Connect = () => {
  const { connectWallet } = useContext(TransactionContext)
  return (
    <StyledButton onClick={connectWallet}>
      <div>Connect</div>
      {/* show metamask image in mobile view */}
      <img src={require("../../assets/metamask.png")} alt="metamask" />
    </StyledButton>
  )
}
