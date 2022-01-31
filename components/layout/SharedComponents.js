import styled from "styled-components"
import { theme } from "../palette"
import Color from "color"
import ReactTooltip from "react-tooltip"

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
    background: ${theme.red};
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
  font-size: ${({ fontSize }) => fontSize ?? "1.25rem"};
  width: max-content;
  color: ${theme.white};
  transition: all 0.15s ease-in;
  border-radius: 5px;
  cursor: pointer;
  ${({ boxShadow }) =>
    boxShadow && "box-shadow: 0px 0px 30px 0px rgba(255, 0, 0, 0.5);"}
  &:hover {
    background: ${({ backgroundColor }) => theme[backgroundColor]};
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${({ backgroundColor }) => theme[backgroundColor]};
  display: grid;
  place-items: center;
  position: relative;
`

export const FakeAnchor = styled.section`
  position: absolute;
  top: -80px;
`

export const Tooltip = styled(ReactTooltip)`
  width: 300px !important;
  padding: 1rem !important;
  border: 3px solid ${theme.red} !important;
  background-color: ${Color(theme.red).alpha(0.95)} !important;
  font-size: 1.2rem !important;
  border-top-color: ${theme.red} !important;
  color: ${theme.white} !important;
`
