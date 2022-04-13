import { StyleContainer } from "./index.styles"
import { Connect } from "../web3MetaMask"

export const Web3NotConnected = () => {
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
