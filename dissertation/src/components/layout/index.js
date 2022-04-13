import { Footer } from "../footer"
import { LayoutContainer, LayoutWrap } from "./index.styles"

export const Layout = ({ children }) => {
  return (
    //pushes footer down when main body overflows
    <LayoutContainer>
      <LayoutWrap>{children}</LayoutWrap>
      <Footer />
    </LayoutContainer>
  )
}
