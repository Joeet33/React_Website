import { FooterContainer } from "./index.styles"

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footerContainer">
        <div>UP931673</div>
        <div>
          Web 3.0: How blockchain technology affects the user experience
        </div>
      </div>
      <ul>
        <li>
          <a href="https://etherscan.io/">
            <img src={require("../../assets/etherscan.png")} alt="Car" />
          </a>
        </li>
        <li>
          <a href="https://en-gb.facebook.com/">
            <img src={require("../../assets/facebook.png")} alt="Car" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/?lang=en">
            <img src={require("../../assets/twitter.png")} alt="Car" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img src={require("../../assets/instagram.png")} alt="Car" />
          </a>
        </li>
      </ul>
    </FooterContainer>
  )
}
