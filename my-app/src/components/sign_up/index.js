import React, { useState } from "react"
import { SignupContainer } from "../sign_up/index.styles"
import Button from "@material-ui/core/Button"
import { TextField } from "@material-ui/core"
import { ROUTER_PATHS } from "../../routerPaths"
import { Link, useNavigate } from "react-router-dom"

export const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // on form submit...
  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (email.length > 0 && password.length > 0) {
      localStorage.setItem("SubmissionEmail", JSON.stringify(email))
      localStorage.setItem("SubmissionPassword", JSON.stringify(password))
      navigate(ROUTER_PATHS.LOGIN)
      console.log("Saved in Local Storage")
    }
  }

  return (
    <>
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
    </>
  )
}
