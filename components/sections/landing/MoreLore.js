import React from "react"
import styled from "styled-components"
import { theme } from "../../palette"
import Color from "color"
import { SectionTitle } from "../../layout/SharedComponents"

const BorderDivider = styled.img`
  position: absolute;
  /* ${({ top }) => (top ? "top: -4rem;" : "bottom: -4rem;")}; */
  /* top: -10rem; */
  z-index: 1;
  /* background-position: center; */
  /* background-color: red; */
  top: -12rem;
  width: 100%;
`

const MoreLoreWrapper = styled.div`
  position: relative;
  background-color: ${theme.grey};
  display: grid;
  place-items: center;
  padding: 4rem 5.5rem 9rem 5.5rem;
  justify-items: flex-end;
  overflow: hidden;

  .test {
    max-width: 1920px;
    display: grid;
    gap: 4rem;
    justify-self: center;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
    padding: 5rem 2.5rem;
  }
`

const MoreLoreCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 3;
  justify-self: center;
  /* max-width: 900px; */

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
  width: 350px;
  height: 350px;

  display: grid;
  place-items: center;

  p {
    word-spacing: 100vw;
    width: min-content;
    transform: skew(14deg);
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
      <div className="test">
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
      </div>
    </MoreLoreWrapper>
  )
}

export default MoreLore
