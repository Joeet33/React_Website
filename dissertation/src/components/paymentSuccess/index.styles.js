import styled from "styled-components"

export const LoggedInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;
  width: 75vw;
  margin-left: 12.5vw;
  background-color: #00bfff;
  border-radius: 20px;
  color: white;
  padding: 2vw;

  .Title {
    text-align: center;
    font-size: xxx-large;
    font-weight: bold;
    cursor: default;
    color: red;
  }

  img {
    position: relative;
    padding-top: 5vh;
    width: 30vw;
    border-radius: 60px;
    @media (max-width: 425px) {
      width: 54vw;
    }
  }

  .Price {
    font-size: x-large;
    font-weight: bold;
    padding-top: 2vh;
    text-align: center;
  }

  button {
    margin-top: 5vh;
  }
`
