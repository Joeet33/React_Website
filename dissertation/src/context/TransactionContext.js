import React, { useEffect, useState } from "react"
import { ethers } from "ethers"

// creates context
export const TransactionContext = React.createContext()

const { ethereum } = window

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("")

  const checkIfWalletIsConnect = async () => {
    // if metamask is not installed, send alert to install metamask
    if (!ethereum) return alert("Please install MetaMask.")

    // request ethereum address
    const accounts = await ethereum.request({ method: "eth_accounts" })

    // if account is found setCurrentAccount to the address
    if (accounts.length) {
      setCurrentAccount(accounts[0])
    }
  }

  const connectWallet = async () => {
    try {
      // if metamask is not installed, send alert to install metamask
      if (!ethereum) return alert("Please install MetaMask.")

      // request ethereum address
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
      // if metamask is not installed, send alert to install metamask
      if (!ethereum) throw new Error("Please install MetaMask.")

      // request ethereum address
      await ethereum.send("eth_requestAccounts")
      const provider = new ethers.providers.Web3Provider(ethereum)
      // get signer (the user)
      const signer = provider.getSigner()
      // set the address that recieves the Eth
      const addr = ethers.utils.getAddress(
        "0xD2B3E92060e0dF0e4f300ae8f9Cc5Ea367e91F5D"
      )
      // set the amount transferred in Eth
      const ether = ethers.utils.parseEther("0.00015")
      // send transaction
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
