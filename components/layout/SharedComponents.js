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
  ${({ lessMarginBottom }) => lessMarginBottom && "margin-bottom: -50px;"}

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
    ${({ lessMarginBottom }) => lessMarginBottom && "margin-bottom: 20px;"}

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
  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    align-self: flex-end;
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
  width: ${({ lore }) => (lore ? "200px" : "300px")} !important;
  padding: 1rem !important;
  border: 3px solid ${({ done }) => (done ? theme.green : theme.red)} !important;
  background-color: ${({ done }) =>
    done
      ? Color(theme.green).alpha(0.94)
      : Color(theme.red).alpha(0.94)} !important;
  font-size: 1.2rem !important;
  /* border-top-color: ${theme.red} !important; */
  color: ${theme.white} !important;
  ${({ lore }) => lore && "margin-top: -50px !important;"}
  ${({ lore }) => lore && "text-align: center !important;"}

  span.bold {
    color: ${theme.grey} !important;
  }
`

export const LoreWrapper = styled.div`
  background-color: ${theme.grey};
  padding: 5rem;
  min-height: 100vh;

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    padding: 2rem 2.5rem 5rem 2.5rem;
  }
`

export const LoreTitle = styled.div`
  color: ${theme.yellow};
  font-size: 2rem;
  margin-bottom: 3rem;
`

export const LoreDesc = styled.div`
  color: ${theme.silver};
  font-size: 1.2rem;
  line-height: 2.5rem;

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 1.1rem;
  }
`

export const LoreInnerContentWrapper = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 3rem;
`

export const LoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    flex-direction: column-reverse;
  }
`

export const LoreBackButton = styled(MoreButton)`
  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    align-self: flex-end;
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
  }
`
