import styled from "styled-components"

export const LoggedInContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;
  width: 75vw;
  margin-left: 12.5vw;
  background-color: #00BFFF;
  border-radius: 20px;
  color: white;
  padding: 2vw;
  


.Title {
    text-align: center;
    font-size: xxx-large;
    font-weight: bold;
    cursor: default;
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
`
export const TransactionsForm = styled.button`

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
  
`