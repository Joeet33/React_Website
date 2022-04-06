import { Switch } from "@material-ui/core"
import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../routerPaths"
import { Connect } from "../connect"
import { NavContainer, StyledLogin, StyledLink, StyledCursor } from "./index.styles"
import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"

export const Nav = ({ checked, setChecked, isLoggedIn }) => {

  const { currentAccount } = useContext(TransactionContext)

  return (
    <NavContainer>
 
        <StyledLink to={ROUTER_PATHS.HOME}>Home</StyledLink>
    
      <nav>
        <ul className="nav__links">
          <StyledCursor>
            <Switch
              checked={checked}
              onChange={(e) => setChecked(e)}
              inputProps={{ "aria-label": "controlled" }}
            />
            {checked ? "Web3" : "Web2"}
          </StyledCursor>
          <li>
            <Link to={ROUTER_PATHS.SHOP}>Shop</Link>
          </li>

          
            {checked ? (
             !currentAccount && <Connect />
            ) : (
              !isLoggedIn && <Link to={ROUTER_PATHS.LOGIN}><StyledLogin> Login </StyledLogin></Link>
            )}
          
        </ul>
      </nav>
    </NavContainer>
  )
}
