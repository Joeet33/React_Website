import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import { Web2LoggedIn } from "../web2LoggedIn"
import { NotLoggenIn } from "../web2NotLoggedIn"
import { Web3Connected } from "../web3Connected"
import { NotConnected } from "../web3NotConnected"

export const Shop = ({ checked, isLoggedIn }) => {
  const { currentAccount } = useContext(TransactionContext)
  const isWeb3Connect = currentAccount ? (
    <>
      <Web3Connected />
    </>
  ) : (
    <NotConnected />
  )
  const isWeb2LoggedIn = isLoggedIn ? <Web2LoggedIn /> : <NotLoggenIn />

  return <>{checked ? isWeb3Connect : isWeb2LoggedIn}</>
}
