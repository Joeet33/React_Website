import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../routerPaths"
import { NavContainer } from "./index.styles"

export const Nav = () => {
  return (
    <NavContainer>
      <h1>
        <Link to={ROUTER_PATHS.HOME}>home</Link>
      </h1>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <Link to={ROUTER_PATHS.LOGIN}>Login</Link>
          </li>
        </ul>
      </nav>
    </NavContainer>
  )
}
