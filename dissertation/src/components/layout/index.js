import { Footer } from "../footer"
import { LayoutContainer, LayoutWrap } from "./index.styles"

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutWrap>{children}</LayoutWrap>
      <Footer />
    </LayoutContainer>
  )
}
