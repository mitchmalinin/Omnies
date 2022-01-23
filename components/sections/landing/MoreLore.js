import React from "react"
import styled from "styled-components"
import { theme } from "../../palette"
import Color from "color"

const BorderDivider = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  ${({ top }) => (top ? "top: -4rem;" : "bottom: -4rem;")};
  z-index: 1;
  background-image: url("/images/black-brush.svg");
  background-size: contain;
  background-repeat: repeat;
  background-position: center;
`

const MoreLoreWrapper = styled.div`
  position: relative;
  background-image: url("/images/black-brush.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  place-items: center;
  padding: 5rem 5.5rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
    padding: 5rem 2.5rem;
  }
`

const MoreLoreCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 3;
  gap: 5rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const MoreLoreCard = styled.div`
  position: relative;
  padding: 1rem;
  height: 250px;
  border: 1px solid ${theme.white};
  color: ${theme.white};
  font-size: 2.5rem;
  word-spacing: unset;
  display: table-caption;
  transition: all 0.1s ease-in;
  cursor: pointer;

  &:nth-child(1) {
    background-color: ${Color(theme.red).alpha(0.12)};
  }

  &:nth-child(2) {
    background-color: ${Color(theme.yellow).alpha(0.12)};
  }

  &:nth-child(3) {
    background-color: ${Color(theme.purple).alpha(0.2)};
  }

  &:hover {
    transform: scale(1.05);
  }

  p {
    word-spacing: 100vw;
  }

  span {
    position: absolute;
    bottom: 20px;
    right: 30px;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    width: 200px;
    height: 210px;
    font-size: 2rem;
  }
`

const MoreLore = () => {
  return (
    <MoreLoreWrapper>
      <BorderDivider top />
      <MoreLoreCardsWrapper>
        <MoreLoreCard>
          <p>The Imprisoned Deities</p>
          <span>{">"}</span>
        </MoreLoreCard>
        <MoreLoreCard>
          <p>Infernals Uprising</p>
          <span>{">"}</span>
        </MoreLoreCard>
        <MoreLoreCard>
          <p>The Great Omniwar</p>
          <span>{">"}</span>
        </MoreLoreCard>
      </MoreLoreCardsWrapper>
      <BorderDivider />
    </MoreLoreWrapper>
  )
}

export default MoreLore
