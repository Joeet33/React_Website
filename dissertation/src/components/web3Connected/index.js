import React from "react"
import { LoggedInContainer } from "./index.styles"
import { useState } from "react"
import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import { Navigate } from "react-router"
import { ROUTER_PATHS } from "../../routerPaths"

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
    <>
      <LoggedInContainer>
        <div className="Title">Tesla for sale</div>

        <img src={require("../../assets/tesla.png")} alt="Car" />

        <div className="Price">Price: 0.00015 Eth</div>

        <>
          <button onClick={handleSubmit}>
            Pay Now
            {txs.length === 0 ? null : (
              <Navigate to={ROUTER_PATHS.PAYMENTSUCCESS} />
            )}
          </button>
          {!error ? null : (
            <div>
              <label>{error}</label>
            </div>
          )}
        </>
      </LoggedInContainer>
    </>
  )
}
