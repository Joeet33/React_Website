import React from "react"
import { LoggedInContainer } from "./index.styles"
import { useState } from "react"
import { ErrorMessage } from "../error_message"
import { TxList } from "../tx_list"
import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import { TransactionsForm } from "./index.styles"

export const Web3Connected = () => {
  const { startPayment } = useContext(TransactionContext)

  const [error, setError] = useState()
  const [txs, setTxs] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError()
    await startPayment({
      setError,
      setTxs,
    })
  }

  return (
    <LoggedInContainer>
      <div className="Title">Tesla for sale</div>

      <img src={require("../../assets/tesla.png")} alt="Car" />

      <div className="Price">Price: 0.00015 Eth</div>

      <>
        <TransactionsForm onClick={handleSubmit}>
          Pay Now
          <TxList txs={txs} />
        </TransactionsForm>
        <ErrorMessage message={error} />
      </>
    </LoggedInContainer>
  )
}
