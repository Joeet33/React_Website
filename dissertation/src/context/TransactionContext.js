import React, { useEffect, useState } from "react"



export const TransactionContext = React.createContext()

const { ethereum } = window

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("")

  const checkIfWalletIsConnect = async () => {
    if (!ethereum) return alert("Please install MetaMask.")

    const accounts = await ethereum.request({ method: "eth_accounts" })

    if (accounts.length) {
      setCurrentAccount(accounts[0])
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.")

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      })

      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)

      throw new Error("No ethereum object")
    }
  }

  useEffect(() => {
    checkIfWalletIsConnect()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
