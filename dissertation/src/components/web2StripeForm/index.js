import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from "react"
import { Navigate } from "react-router"
import { ROUTER_PATHS } from "../../routerPaths"
import { StyledFormContainer, CARD_OPTIONS } from "./index.styles"

export const PaymentForm = () => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  // when form is submitted api is called to check paymentmethod
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    // if there is no error post response from server
    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post(
          "https://up931673.herokuapp.com/payment",
          {
            amount: 1000,
            id,
          }
        )

        if (response.data.success) {
          console.log("Successful payment")
          setSuccess(true)
        }
      } catch (error) {
        console.log("Error", error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <>
      {/* if success is false render payment form, else navigate to paymentSuccess */}
      {!success ? (
        <StyledFormContainer onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </StyledFormContainer>
      ) : (
        <Navigate to={ROUTER_PATHS.PAYMENTSUCCESS} />
      )}
    </>
  )
}
