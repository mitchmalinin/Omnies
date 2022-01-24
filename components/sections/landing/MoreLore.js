import React from "react"
import styled from "styled-components"
import { theme } from "../../palette"
import Color from "color"
import Image from "next/image"

const BorderDivider = styled.img`
  position: absolute;
  /* ${({ top }) => (top ? "top: -4rem;" : "bottom: -4rem;")}; */
  /* top: -10rem; */
  z-index: 1;
  /* background-position: center; */
  /* background-color: red; */
  top: -5rem;
  width: 100%;
  height: 250px;
`

const MoreLoreWrapper = styled.div`
  position: relative;
  background-color: ${theme.grey};
  display: grid;
  place-items: center;
  padding: 8rem 5.5rem;

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

  max-width: 900px;
  align-self: center;
  overflow-x: hidden;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem;
    margin-top: 5rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const MoreLoreCard = styled.div`
  position: relative;
  padding: 1rem;
  height: 250px;
  color: ${theme.white};
  font-size: 2.5rem;
  word-spacing: unset;
  display: table-caption;
  transition: all 0.2s ease-in;
  cursor: pointer;
  /* background-color: ${Color(theme.red).alpha(0.12)};
  border: 1.5px solid ${theme.red};

  &:hover {
    background-color: ${theme.red};
  } */

  &:nth-child(1) {
    background-color: ${Color(theme.red).alpha(0.12)};
    border: 1.5px solid ${theme.red};

    &:hover {
      background-color: ${theme.red};
    }
  }

  &:nth-child(2) {
    background-color: ${Color(theme.teal).alpha(0.12)};
    border: 1.5px solid ${theme.teal};
    &:hover {
      background-color: ${theme.teal};
    }
  }

  &:nth-child(3) {
    background-color: ${Color(theme.purple).alpha(0.2)};
    border: 1.5px solid ${theme.purple};
    &:hover {
      background-color: ${theme.purple};
    }
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
      {/* <BorderDivider src="/images/dividers/brush2.png" alt="brush" /> */}
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
      {/* <BorderDivider /> */}
    </MoreLoreWrapper>
  )
}

export default MoreLore
