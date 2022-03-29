import { Switch } from "@material-ui/core"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../routerPaths"
import { NavContainer } from "./index.styles"

export const Nav = () => {
  const [checked, setChecked] = useState(false)
  const [label, setLabel] = useState("Web2")
  const [reroute, setRoute] = useState(
    <Link to={ROUTER_PATHS.LOGIN}>Login</Link>
  )

  const handleChange = (event) => {
    setChecked(event.target.checked)
    if (checked) {
      setLabel("Web2")
      setRoute(<Link to={ROUTER_PATHS.LOGIN}>Login</Link>)
    } else {
      setLabel("Web3")
      setRoute(<Link to={ROUTER_PATHS.CONNECT}>Connect</Link>)
    }
  }

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
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            {label}
          </li>
          <li>
            <a href="#">Shop</a>
          </li>

          <li>{reroute}</li>
        </ul>
      </nav>
    </NavContainer>
  )
}
