import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import { PaymentForm } from "../paymentForm"
import { PaymentContainer } from "./index.styles"

const PUBLIC_KEY =
  "pk_test_51KktCTDl7A2zTF5L30nqLZCh0Vz3i3vCk9q4YoLxq1u17rmP2DLQdJVow0xBuYmS0RRUgmiHhVPYQo9VXS3eesMx00Cq0P22dS"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export const StripeContainer = () => {
  return (
    <PaymentContainer>
      <div>Car: Tesla</div>
      <div>Cost: £30,000</div>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </PaymentContainer>
  )
}
