import { useContext } from "react"
import { Link } from "react-router-dom"

import { TransactionContext } from "../../context/TransactionContext"
import { ROUTER_PATHS } from "../../routerPaths"

export const Main = ({ checked }) => {
  const { currentAccount } = useContext(TransactionContext)
  console.log(currentAccount)

  return <>{checked ? <h3>Wallet Address: {currentAccount} </h3> : null}
  
  <Link to={ROUTER_PATHS.TRANSACTIONS}>transaction page link</Link>
  </>
}
