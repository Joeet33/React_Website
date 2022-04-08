import styled from "styled-components"

export const StyleContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 15vh;
width: 50vw;
margin-left: 25vw;
background-color: #00BFFF;
border-radius: 20px;
color: white;
box-shadow: 0 3px 10px 0 rgb(0 0 0 / 50%);

@media (max-width: 320px) {
  width: 65vw;
  margin-left: 18vw;
}


.Warning{ 
  cursor: default;
  margin-top: 15vh;
  font-weight: bold;
  font-size: xx-large;
  text-align: center;
  color: #f50057;
  padding: 1vw;

  @media (max-width: 425px) {
    font-size: large;
  }
}

.StyleConnect{
  position: relative;
  padding-top: 12vh;
  padding-bottom: 5vh;
  left: 1.5vw;
}


}
`

export const StyledLogin = styled.button`
  padding: 0.8em 1.5em;
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
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #f50057;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-2px);
    font-weight: bold;
  }

  &:active {
    transform: translateY(-1px);
  }
`
