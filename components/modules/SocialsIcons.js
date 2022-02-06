import React from "react"
import styled from "styled-components"
import { theme } from "../palette"
import Color from "color"

const SocialIconWrapper = styled.a`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.2rem;
  position: relative;
  color: ${theme.white};
  cursor: pointer;
  text-decoration: none;

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
    border-radius: 5px;
  }

  &:hover:before {
    background-color: ${theme.yellow};
  }

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`
const SocialsWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ row }) =>
    row ? "min-content" : "min-content min-content"};
  gap: 3rem;

  @media only screen and (max-width: 480px) {
    margin-top: ${({ moreMarginTop }) => (moreMarginTop ? "3.5rem" : "-2rem")};
    margin-left: 10px;
    gap: 2rem;
  }
`

const SocialsIcons = ({ row, moreMarginTop }) => {
  return (
    <SocialsWrapper row={row} moreMarginTop={moreMarginTop}>
      <SocialIconWrapper
        href="https://discord.gg/sCcQ3x54"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-discord"></i>
      </SocialIconWrapper>
      <SocialIconWrapper
        href="https://twitter.com/TheOmnies"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </SocialIconWrapper>
    </SocialsWrapper>
  )
}

export default SocialsIcons
