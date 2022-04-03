import { useContext } from "react"

import { TransactionContext } from "../../context/TransactionContext"

export const Main = ({ checked }) => {
  const { currentAccount } = useContext(TransactionContext)
  console.log(currentAccount)

  return checked ? <h3>Wallet Address: {currentAccount} </h3> : null
}
