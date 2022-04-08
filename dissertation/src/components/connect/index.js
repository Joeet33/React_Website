import { useContext } from "react"

import { TransactionContext } from "../../context/TransactionContext"

import { StyledButton } from "./index.styles"

export const Connect = () => {
  const { connectWallet } = useContext(TransactionContext)
  return <StyledButton onClick={connectWallet}>Connect</StyledButton>
}
