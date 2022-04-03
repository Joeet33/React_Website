import { Switch } from "@material-ui/core"
import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../routerPaths"
import { Connect } from "../connect"
import { NavContainer } from "./index.styles"

export const Nav = ({ checked, setChecked }) => {
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
            {checked ? <Connect /> : <Link to={ROUTER_PATHS.LOGIN}>Login</Link>}
          </li>
        </ul>
      </nav>
    </NavContainer>
  )
}
