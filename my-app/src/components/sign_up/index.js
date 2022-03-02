import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../routerPaths"
import { SignupContainer } from "./index.styles"

export const Signup = () => {
  return (
    <SignupContainer>
      <Link to={ROUTER_PATHS.HOME}>
        <button></button>
      </Link>
    </SignupContainer>
  )
}
