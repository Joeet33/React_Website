import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h1 {
    cursor: pointer;
    margin-right: auto;
    padding-left: 10px;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    padding: 0px 20px;

    a {
      transition: all 0.3s ease 0s;

      &:hover {
        color: aqua;
      }
    }
  }
`
