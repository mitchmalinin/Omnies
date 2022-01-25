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
  gap: 4rem;
  padding: 4rem 5.5rem 9rem 5.5rem;
  justify-items: flex-end;
  overflow: hidden;
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
      <BorderDivider
        src="https://uploads-ssl.webflow.com/618920e5b4d12352352ee7e3/61914aab7dd18b4630f5d4ad_hero%20text3.png"
        alt="brush"
      />
      <SectionTitle textAlignEnd>Lore</SectionTitle>
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
