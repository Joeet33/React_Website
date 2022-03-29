import { LoginContainer } from "./index.styles"
import Button from "@material-ui/core/Button"
import { TextField } from "@material-ui/core"

export const Connect = () => {
  return (
    <div>
      <LoginContainer>
        <h3>Connect</h3>
        <TextField required autoComplete="email" label="Email" type="email">
          <label>Email</label>
        </TextField>

        <TextField
          required
          autoComplete="current-password"
          label="Password"
          type="password"
        >
          <label>Password</label>
        </TextField>

        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </LoginContainer>
    </div>
  )
}
