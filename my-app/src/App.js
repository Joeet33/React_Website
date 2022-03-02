import React from "react"
import { Nav } from "./components/nav_bar/index"
import { Main } from "./components/main/index"
import { Layout } from "./components/layout"

function App() {
  return (
    <Layout>
      <Nav />
      <Main />
    </Layout>
  )
}

export default App
