import styled from "styled-components"
import { theme } from "../palette"
import Color from "color"

export const SectionTitle = styled.h2`
  font-size: 3rem;
  color: ${theme.yellow};
  z-index: 4;
  position: relative;
  text-align: ${({ textAlignEnd }) => (textAlignEnd ? "end" : "start")};

  &:before {
    content: "";
    display: block;
    width: 130px;
    height: 3px;
    background: ${theme.yellow};
    ${({ textAlignEnd }) => (textAlignEnd ? "right: -10rem" : "left: -10rem")};
    top: 50%;
    position: absolute;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 2.4rem;
    &:before {
      ${({ textAlignEnd }) =>
        textAlignEnd ? "right: -9.1rem" : "left: -9.1rem"};
    }
  }
`

export const MoreButton = styled.button`
  border: 1.5px solid ${({ backgroundColor }) => theme[backgroundColor]};
  background: ${({ backgroundColor }) =>
    Color(theme[backgroundColor]).alpha(0.12)};
  padding: 0.5em 2em;
  font-size: 1.25rem;
  width: max-content;
  color: ${theme.white};
  transition: all 0.2s ease-in;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${({ backgroundColor }) => theme[backgroundColor]};
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${({ backgroundColor }) => theme[backgroundColor]};
  display: grid;
  place-items: center;
`
