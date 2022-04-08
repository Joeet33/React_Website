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
  padding-bottom: 1vh;

  h3 {
    position: relative;

    @media (max-width: 650px) {
      position: relative;
      font-size: xx-small;
    }
  }

  .Title {
    text-align: center;
    font-size: xxx-large;
    font-weight: bold;
    cursor: default;
    color: #f50057;
  }

  img {
    position: relative;
    padding-top: 5vh;
    width: 30vw;
    border-radius: 60px;
  }

  .Price {
    font-size: x-large;
    font-weight: bold;
    padding-top: 2vh;
  }

  button {
    margin-top: 5vh;
  }

  div {
    font-weight: bold;
    font-size: x-large;
  }
`
