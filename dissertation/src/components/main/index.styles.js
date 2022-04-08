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
  padding: 1vw;
  padding-bottom: 1vh;

  @media (max-width: 375px) {
    margin-top: 3vh;
  }

  @media (min-width: 1440px) {
    margin-top: 2vh;
    padding: 0;
  }

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
    width: 42vw;
    border-radius: 60px;

    @media (max-width: 375px) {
      width: 50vw;
    }
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
    text-align: center;

    @media (max-width: 375px) {
      font-size: large;
    }
  }
`
