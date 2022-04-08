import React, { useState } from "react"
import { LoginContainer } from "./index.styles"
import { TextField } from "@material-ui/core"
import { ROUTER_PATHS } from "../../routerPaths"
import { Link } from "react-router-dom"
import { StyledSubmitButton } from "./index.styles"

export const Login = ({ loginState }) => {
  const [emaillog, setEmaillog] = useState(" ")
  const [passwordlog, setPasswordlog] = useState(" ")

  const handleLogin = (e) => {
    e.preventDefault()
    let pass = localStorage.getItem("SubmissionPassword").replace(/"/g, "")
    let mail = localStorage.getItem("SubmissionEmail").replace(/"/g, "")
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!emaillog || !passwordlog) {
      loginState(false)
      console.log("EMPTY")
    } else if (passwordlog !== pass || emaillog !== mail) {
      loginState(false)
    } else {
      loginState(true)
    }
  }

  return (
    <div>
      <LoginContainer onSubmit={handleLogin}>
        <h1>Login</h1>
        <TextField
          className="formControl"
          required
          autoComplete="email"
          label="Email"
          type="email"
          onChange={(event) => setEmaillog(event.target.value)}
        >
          <label>Email</label>
        </TextField>

        <TextField
          className="formControl"
          required
          autoComplete="current-password"
          label="Password"
          type="password"
          onChange={(event) => setPasswordlog(event.target.value)}
        >
          <label>Password</label>
        </TextField>

        <StyledSubmitButton>Submit</StyledSubmitButton>
        <div className="styledDiv">
          <Link className="styledLink" to={ROUTER_PATHS.SIGNUP}>
            Register Here
          </Link>
        </div>
      </LoginContainer>
    </div>
  )
}
