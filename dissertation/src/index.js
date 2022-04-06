import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import { TransactionsProvider } from "./context/TransactionContext"
import { GlobalStyle } from "./globalStyles"

ReactDOM.render(
  <TransactionsProvider>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </TransactionsProvider>,
  document.getElementById("root")
)
