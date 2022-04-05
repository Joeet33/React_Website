import { useContext } from "react"

import { TransactionContext } from "../../context/TransactionContext"



export const Connect = () => {


  

  const { connectWallet } = useContext(TransactionContext)
  return <button onClick={connectWallet}>Connect</button>
}
