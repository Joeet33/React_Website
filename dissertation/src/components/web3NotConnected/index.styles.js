import styled from "styled-components"

export const StyleContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 9vh;
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
