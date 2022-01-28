import React from "react"
import styled from "styled-components"
import { theme, sizes } from "../../palette"
import Color from "color"
import { SectionTitle, FakeAnchor } from "../../layout/SharedComponents"

const MoreLoreWrapper = styled.section`
  position: relative;
  background-color: ${theme.lightGrey};
  display: grid;
  place-items: center;
  justify-items: flex-end;
  overflow: hidden;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
  }
`

const MoreLoreInnerWrapper = styled.div`
  max-width: ${sizes.maxWidth};
  display: grid;
  gap: 4rem;
  justify-self: center;
  overflow: hidden;
  padding: 3rem 5.5rem 9rem 5.5rem;
  width: 100%;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 5rem 2.5rem 6rem 2.5rem;
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

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
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
  transition: all 0.15s ease-in;
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

  &:hover {
    filter: drop-shadow(3px 3px 7px #f7fc01) drop-shadow(-3px -1px 7px #f7fc01);
    transform: scale(1.01);
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    width: 300px;
    height: 300px;
    font-size: 2rem;
  }
`

const MoreLore = () => {
  return (
    <MoreLoreWrapper id="history">
      <FakeAnchor id="history" />
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
