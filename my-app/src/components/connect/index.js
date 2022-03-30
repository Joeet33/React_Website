import { useState } from "react"

export const Connect = () => {
  const [walletAddress, setWalletAddress] = useState("")

  // Helper Functions

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log("Requesting account...")

    // ❌ Check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log("detected")

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        setWalletAddress(accounts[0])
      } catch (error) {
        console.log("Error connecting...")
      }
    } else {
      alert("Meta Mask not detected")
    }
  }
  return <button onClick={requestAccount}>Connect</button>
}
