import React, { useState } from "react"
import { SignupContainer, StyledRegisterButton } from "./index.styles"
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
        <h1>Register</h1>

        <TextField
          className="formControl"
          required
          autoComplete="email"
          label="Email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        ></TextField>

        <TextField
          className="formControl"
          required
          autoComplete="new-password"
          label="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></TextField>

        <StyledRegisterButton>Sign Up</StyledRegisterButton>

        <div className="styledDiv">
          Already registered{" "}
          <Link className="styledLink" to={ROUTER_PATHS.LOGIN}>
            Login?
          </Link>
        </div>
      </SignupContainer>
    </>
  )
}
