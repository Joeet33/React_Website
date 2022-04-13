import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import { Web2LoggedIn } from "../web2LoggedIn"
import { Web2NotLoggenIn } from "../web2NotLoggedIn"
import { Web3Connected } from "../web3Connected"
import { Web3NotConnected } from "../web3NotConnected"

export const Shop = ({ checked, isLoggedIn }) => {
  const { currentAccount } = useContext(TransactionContext)
  //if metamask is connected render Web3Connected, else render Web3NotConnected
  const isWeb3Connect = currentAccount ? (
    <>
      <Web3Connected />
    </>
  ) : (
    <Web3NotConnected />
  )

  //if logged in render Web2LoggedIn, else render Web2NotLoggedIn
  const isWeb2LoggedIn = isLoggedIn ? <Web2LoggedIn /> : <Web2NotLoggenIn />

  //if checked is true render isWeb3Connect, else render isWeb2LoggedIn
  return <>{checked ? isWeb3Connect : isWeb2LoggedIn}</>
}
