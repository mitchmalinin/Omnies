import React from "react"
import styled from "styled-components"
import { theme, sizes } from "../../palette"
import Color from "color"
import { SectionTitle } from "../../layout/SharedComponents"

const MoreLoreWrapper = styled.div`
  position: relative;
  background-color: ${theme.grey};
  display: grid;
  place-items: center;
  padding: 3rem 5.5rem 15rem 5.5rem;
  justify-items: flex-end;
  overflow: hidden;
  background-image: url("/images/dividers/4.png");
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
    padding: 0rem 2.5rem 6rem 2.5rem;
    gap: 0rem;
  }
`

const MoreLoreInnerWrapper = styled.div`
  max-width: ${sizes.maxWidth};
  display: grid;
  gap: 4rem;
  justify-self: center;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    gap: 0rem;
  }
`

const MoreLoreCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 3;
  justify-self: center;
  gap: 3rem;
  /* max-width: 900px; */

  overflow-x: hidden;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem;
    margin-top: 5rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
  }
`

const MoreLoreCard = styled.div`
  position: relative;
  padding: 1rem;
  height: 250px;
  color: #040200a3;
  font-size: 2rem;
  word-spacing: unset;
  display: table-caption;
  transition: all 0.2s ease-in;
  cursor: pointer;
  background-image: url("/images/scroll.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  display: grid;
  place-items: center;

  p {
    word-spacing: 100vw;
    width: min-content;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    width: 300px;
    height: 300px;
    font-size: 2rem;
  }
`

const MoreLore = () => {
  return (
    <MoreLoreWrapper>
      <MoreLoreInnerWrapper>
        <SectionTitle textAlignEnd>Lore</SectionTitle>
        <MoreLoreCardsWrapper>
          <MoreLoreCard>
            <p>The Imprisoned Deities</p>
          </MoreLoreCard>
          <MoreLoreCard>
            <p>Infernals Uprising</p>
          </MoreLoreCard>
          <MoreLoreCard>
            <p>The Great Omniwar</p>
          </MoreLoreCard>
        </MoreLoreCardsWrapper>
      </MoreLoreInnerWrapper>
    </MoreLoreWrapper>
  )
}

export default MoreLore
