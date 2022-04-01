import { useContext } from "react"

import { TransactionContext } from "../../context/TransactionContext"

export const Main = () => {
  const { currentAccount } = useContext(TransactionContext)
  console.log(currentAccount)

  return <h3>Wallet Address: {currentAccount} </h3>
}
