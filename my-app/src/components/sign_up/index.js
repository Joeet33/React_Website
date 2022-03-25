import React, { useState } from "react"
import { Login } from "../login"
import { SignupContainer } from "../sign_up/index.styles"
import Button from "@material-ui/core/Button"
import { TextField } from "@material-ui/core"
import { ROUTER_PATHS } from "../../routerPaths"
import { Link } from "react-router-dom"

export function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [flag, setFlag] = useState(false)
  const [login, setLogin] = useState(true)
  const [info, setInfo] = useState(true)

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault()

    if (!email || !password) {
      setFlag(true)
    } else {
      setFlag(false)
      localStorage.setItem("SubmissionEmail", JSON.stringify(email))
      localStorage.setItem("SubmissionPassword", JSON.stringify(password))
      console.log("Saved in Local Storage")

      setLogin(!login)
    }
  }

  return (
    <>
      {login ? (
        <SignupContainer onSubmit={handleFormSubmit}>
          <h3>Register</h3>

          <TextField
            required
            autoComplete="email"
            label="Email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          ></TextField>

          <TextField
            required
            autoComplete="new-password"
            label="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></TextField>

          <Button variant="contained" color="primary" type="submit">
            Sign Up
          </Button>

          <div>
            Already registered <Link to={ROUTER_PATHS.LOGIN}>login?</Link>
          </div>
        </SignupContainer>
      ) : (
        <Login />
      )}
    </>
  )
}
