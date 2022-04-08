import { StyleContainer } from "./index.styles"
import { Link } from "react-router-dom"
import { StyledLogin } from "../navBar/index.styles"
import { ROUTER_PATHS } from "../../routerPaths"

export const NotLoggenIn = () => {
  return (
    <StyleContainer>
      <div className="Warning">
        {" "}
        You are not signed in please Login below:
        <div className="StyleConnect">
          <Link to={ROUTER_PATHS.LOGIN}>
            <StyledLogin> Login </StyledLogin>
          </Link>
        </div>
      </div>
    </StyleContainer>
  )
}
