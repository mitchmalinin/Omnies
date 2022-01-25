import React from "react"
import styled from "styled-components"
import { theme } from "../palette"
import Color from "color"

const SocialIconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  position: relative;
  color: ${theme.white};
  cursor: pointer;

  i {
    z-index: 999;
  }

  &:before {
    content: "";
    background-color: ${Color(theme.yellow).alpha(0.12)};
    border: 1px solid ${theme.yellow};
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-in;
    transform: rotate(45deg);
  }

  &:hover:before {
    background-color: ${theme.yellow};
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 1.2rem;
    width: 3rem;
    height: 3rem;
  }
`
const SocialsWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ row }) =>
    row ? "min-content" : "min-content min-content"};
  gap: 3rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    margin-top: 3rem;
  }
`

const SocialsIcons = ({ row }) => {
  return (
    <SocialsWrapper row={row}>
      <SocialIconWrapper>
        <i className="fab fa-discord"></i>
      </SocialIconWrapper>
      <SocialIconWrapper>
        <i className="fab fa-twitter"></i>
      </SocialIconWrapper>
    </SocialsWrapper>
  )
}

export default SocialsIcons
