import { Switch } from "@material-ui/core"
import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../routerPaths"
import { Connect } from "../connect"
import { NavContainer } from "./index.styles"
import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"

export const Nav = ({ checked, setChecked, isLoggedIn }) => {

  const { currentAccount } = useContext(TransactionContext)

  return (
    <NavContainer>
      <h1>
        <Link to={ROUTER_PATHS.HOME}>home</Link>
      </h1>
      <nav>
        <ul className="nav__links">
          <li>
            <Switch
              checked={checked}
              onChange={(e) => setChecked(e)}
              inputProps={{ "aria-label": "controlled" }}
            />
            {checked ? "Web3" : "Web2"}
          </li>
          <li>
            <Link to={ROUTER_PATHS.SHOP}>Shop</Link>
          </li>

          <li>
            {checked ? (
             !currentAccount && <Connect />
            ) : (
              !isLoggedIn && <Link to={ROUTER_PATHS.LOGIN}>Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </NavContainer>
  )
}
