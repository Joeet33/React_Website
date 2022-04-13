import styled from "styled-components"

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  width: 50vw;
  margin-left: 25vw;
  background-color: #00bfff;
  border-radius: 20px;
  color: white;

  @media (max-width: 650px) {
    margin-top: 12vh;
    width: 75vw;
    margin-left: 13vw;
  }

  h1 {
    cursor: default;
  }

  .formControl {
    padding-bottom: 3vh;
    color: white;
  }

  .styledDiv {
    padding-top: 2vh;
    padding-bottom: 7vh;
    font-weight: bold;
  }

  .styledLink {
    color: white;
    text-decoration: none;
    font-size: large;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const StyledSubmitButton = styled.button`
  padding: 0.8em 1.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #f50057;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    font-weight: bold;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(-1px);
  }
`
