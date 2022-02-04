import React from "react"
import styled from "styled-components"
import { theme, sizes } from "../../palette"
import Color from "color"
import { SectionTitle, FakeAnchor } from "../../layout/SharedComponents"
import Link from "next/link"

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

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    padding: 3rem 2.5rem 9rem 2.5rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 2rem 2rem 5rem 2rem;
    gap: 0rem;
  }
`

const MoreLoreCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  z-index: 3;
  justify-self: center;
  gap: 3rem;

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    margin-top: 3rem;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.3rem;
    column-gap: 1rem;
  }
`

const MoreLoreCard = styled.div`
  position: relative;
  padding: 1rem;
  height: 250px;
  color: #040200a3;
  font-size: 1.8rem;
  word-spacing: unset;
  display: table-caption;
  transition: all 0.15s ease-in;
  cursor: pointer;
  background-image: url("/images/scroll.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 270px;
  height: 270px;
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

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    width: 250px;
    height: 250px;
    font-size: 1.8rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    width: 150px;
    height: 150px;
    font-size: 1rem;
  }
`

const MoreLore = () => {
  return (
    <MoreLoreWrapper id="lore">
      <FakeAnchor id="lore" />
      <MoreLoreInnerWrapper>
        <SectionTitle textAlignEnd>Lore</SectionTitle>
        <MoreLoreCardsWrapper>
          <MoreLoreCard>
            <Link href="/omnia-accord">
              <p>The Omnia Accord</p>
            </Link>
          </MoreLoreCard>
          <MoreLoreCard>
            <Link href="/imprisoned-deities">
              <p>The Imprisoned Deities</p>
            </Link>
          </MoreLoreCard>
          <MoreLoreCard>
            <Link href="/infernals-uprising">
              <p>Infernals Uprising</p>
            </Link>
          </MoreLoreCard>
          <MoreLoreCard>
            <Link href="/great-omniwar">
              <p>The Great Omniwar</p>
            </Link>
          </MoreLoreCard>
        </MoreLoreCardsWrapper>
      </MoreLoreInnerWrapper>
    </MoreLoreWrapper>
  )
}

export default MoreLore
