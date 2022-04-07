import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  background-color: #00BFFF;

  

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    padding: 0px 20px;
    color: white;
      font-weight: bold;
      text-decoration: none;
      font-size: x-large;

    a {
      color: white;
      text-decoration: none;
      transition: all 0.3s ease 0s;
      margin-right: 6vw;

      &:hover {
        color: #f50057;
      }
    }
  
  }
`
export const StyledLink = styled(Link)`
      color: white;
      font-weight: bold;
      text-decoration: none;
      font-size: xx-large;
      cursor: pointer;
    margin-right: auto;
    padding-left: 10px;
    transition: all 0.3s ease 0s;
    &:hover {
      color: #f50057;
    }`

  export const StyledCursor = styled.li`
    cursor: default;
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
 