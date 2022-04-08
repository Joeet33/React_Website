import { StyleContainer } from "./index.styles"
import { Connect } from "../MetaMaskConnect"

export const NotConnected = () => {
  return (
    <StyleContainer>
      <div className="Warning">
        {" "}
        You're Metmask is not connected please connect below:
        <div className="StyleConnect">
          <Connect />
        </div>
      </div>
    </StyleContainer>
  )
}
