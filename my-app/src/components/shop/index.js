import { useContext } from "react"
import { Link } from "react-router-dom"

import { TransactionContext } from "../../context/TransactionContext"
import { ROUTER_PATHS } from "../../routerPaths"
import { Connect } from "../connect"

export const Shop = ({ checked, isLoggedIn }) => {
  const { currentAccount } = useContext(TransactionContext)
  const isWeb3Connect = currentAccount ? (
    <>
      <div>Web3-Loggedin Add Payment button</div>
    </>
  ) : (
    <div>
      You are not connected in please click <Connect /> to add you're account
    </div>
  )
  const isWeb2LoggedIn = isLoggedIn ? (
    <Link to={ROUTER_PATHS.PAYMENT}> Payment </Link>
  ) : (
    <div>
      You are not logged in please click the link <a href="">here</a>
    </div>
  )

  return (
    <>
      {checked ? isWeb3Connect : isWeb2LoggedIn} <div>test</div>
    </>
  )
}
