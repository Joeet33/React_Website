import styled from "styled-components"

export const FooterContainer = styled.div`
  padding-top: 2vh;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #00bfff;
  display: flex;
  justify-content: flex-end;

  .footerContainer {
    margin-right: auto;
    padding-left: 2vw;
    color: white;
    font-weight: bold;

    div {
      padding-bottom: 1vh;
      @media (max-width: 450px) {
        padding-bottom: 2vh;
        font-size: x-small;
      }
    }
  }

  ul {
    flex-direction: row;
    display: flex;
    justify-content: flex-end;

    li {
      padding-right: 3vw;
      list-style: none;
      @media (max-width: 450px) {
        padding-right: 2vw;
      }
    }

    img {
      width: 4vw;
      @media (max-width: 500px) {
        width: 9vw;
      }
    }
  }
`
