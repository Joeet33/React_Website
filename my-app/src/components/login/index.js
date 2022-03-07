import React from "react"
import { useForm, Controller } from "react-hook-form"
import { LoginContainer } from "../sign_up/index.styles"
import Button from "@material-ui/core/Button"
import { TextField } from "@material-ui/core"

export const Login = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginContainer>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} required label="Email" />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField {...field} required label="Password" type="password" />
          )}
        />

        <Button variant="contained" color="primary" type="submit">
          Sign Up
        </Button>
      </LoginContainer>
    </form>
  )
}
