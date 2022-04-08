import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 0.8em 1.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  bottom: 2px;
  margin-right: 3vw;

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

  @media (max-width: 650px) {
    padding: 2vw;
    font-size: 1.2vw;
  }
`
