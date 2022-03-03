import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { LoginContainer } from "./index.styles"
import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../routerPaths"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

export default function Login() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <LoginContainer>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Email@gmail.com"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" color="primary">
          Login
        </Button>
        <Link to={ROUTER_PATHS.SIGNUP}>Create an account</Link>
      </LoginContainer>
    </form>
  )
}
