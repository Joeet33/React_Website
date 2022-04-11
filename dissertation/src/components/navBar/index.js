import { Switch } from "@material-ui/core"
import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../routerPaths"
import { Connect } from "../MetaMaskConnect"
import { NavContainer, StyledLogin, StyledLink, StyledLi } from "./index.styles"
import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"

export const Nav = ({ checked, setChecked, isLoggedIn }) => {
  const { currentAccount } = useContext(TransactionContext)

  return (
    <NavContainer>
      <StyledLink to={ROUTER_PATHS.HOME}>
        <img src={require("../../assets/bmw.png")} alt="logo" />
      </StyledLink>

      <div className="title">Car Dealership</div>

      <nav>
        <ul className="nav__links">
          <li className="navItems">
            <Switch
              checked={checked}
              onChange={(e) => setChecked(e)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <StyledLi>{checked ? "Web3" : "Web2"}</StyledLi>
          </li>
          <li className="navItems">
            <Link to={ROUTER_PATHS.SHOP}>Shop</Link>
          </li>

          {checked
            ? !currentAccount && <Connect />
            : !isLoggedIn && (
                <Link to={ROUTER_PATHS.LOGIN}>
                  <StyledLogin> Login </StyledLogin>
                </Link>
              )}
        </ul>
      </nav>
    </NavContainer>
  )
}
