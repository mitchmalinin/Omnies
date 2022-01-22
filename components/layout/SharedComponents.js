import styled from "styled-components"
import { theme } from "../palette"
import Color from "color"

export const SectionTitle = styled.h2`
  font-size: 3rem;
  color: ${theme.white};
  z-index: 4;
  position: relative;
  text-align: ${({ textAlignEnd }) => (textAlignEnd ? "end" : "start")};

  &:before {
    content: "";
    display: block;
    width: 130px;
    height: 3px;
    background: ${theme.white};
    ${({ textAlignEnd }) => (textAlignEnd ? "right: -10rem" : "left: -10rem")};
    top: 50%;
    position: absolute;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 2.5rem;
    &:before {
      ${({ textAlignEnd }) =>
        textAlignEnd ? "right: -9.1rem" : "left: -9.1rem"};
    }
  }
`

export const MoreButton = styled.button`
  border: 1px solid ${theme.white};
  background: ${({ backgroundColor }) =>
    Color(theme[backgroundColor]).alpha(0.12)};
  padding: 0.5em 2em;
  font-size: 1.25rem;
  width: max-content;
  color: ${theme.white};
  transition: all 0.1s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
