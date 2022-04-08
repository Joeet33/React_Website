import React, { useEffect, useState } from "react"
import { ethers } from "ethers"

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

  const startPayment = async ({ setError, setTxs }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.")

      await window.ethereum.send("eth_requestAccounts")
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const addr = ethers.utils.getAddress(
        "0xD2B3E92060e0dF0e4f300ae8f9Cc5Ea367e91F5D"
      )
      const ether = ethers.utils.parseEther("0.00015")
      const tx = await signer.sendTransaction({
        to: addr,
        value: ether,
      })
      console.log({ ether, addr })
      console.log("tx", tx)
      setTxs([tx])
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        startPayment,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
