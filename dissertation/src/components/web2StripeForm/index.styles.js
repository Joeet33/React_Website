import styled from "styled-components"

export const StyledFormContainer = styled.form`
  .FormGroup {
    margin: 0 15px 20px;
    padding: 0;
    border-style: none;
    background-color: #7795f8;
    will-change: opacity, transform;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #829fff;
    border-radius: 4px;
  }

  .FormRow {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 15px;
    border-top: 1px solid #819efc;
  }

  .StripeElement--webkit-autofill {
    background: transparent !important;
  }

  .StripeElement {
    width: 100%;
    padding: 11px 15px 11px 0;
  }

  button {
    display: block;
    font-size: 16px;
    width: calc(100% - 30px);
    height: 40px;
    margin: 40px 15px 0;
    background-color: #f50057;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #ffb9f6;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    will-change: transform, background-color, box-shadow;
    border: none;

    &:hover {
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      transform: translateY(-3px);
    }
  }

  .App {
    margin-left: 25%;
    margin-top: 5%;
    margin-right: 25%;
  }

  h1,
  h3 {
    text-align: center;
  }
`
export const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
}
