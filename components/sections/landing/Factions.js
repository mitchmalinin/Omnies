import React from "react"
import styled from "styled-components"
import { theme, sizes } from "../../palette"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
} from "../../layout/SharedComponents"
import Color from "color"

const FactionsContentWrapper = styled(ContentWrapper)`
  background-image: url("/images/dividers/2.png"), url("/images/dividers/6.png");
  background-position: 50% 100%, 50% 0%;
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;
  background-attachment: scroll, scroll;
`

const FactionsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  gap: 5rem;
  padding: 7rem 5.5rem 9rem 5.5rem;
  max-width: ${sizes.maxWidth};
  align-self: center;
  overflow-x: hidden;

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    padding: 7rem 3rem 7rem 3rem;
  }

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    padding: 0 2.5rem 5rem 2.5rem;
    margin-top: 5rem;
    gap: 4rem;
  }
`
const LeaderCard = styled.div`
  display: flex;
  align-items: flex-end;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    flex-direction: ${({ mobileReverse }) =>
      mobileReverse ? "column-reverse" : "column"};
  }
`

const LeaderCardDesc = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 1rem;
  /* max-width: 50%; */
  flex: 2;
  ${({ imgLeft }) => (imgLeft ? "margin-left: 5rem;" : "margin-right: 5rem;")};

  h3 {
    font-size: 4rem;
    color: ${({ textColor }) => theme[textColor]};
  }

  p {
    font-size: 1.2rem;
    color: ${theme.silver};
    line-height: 3rem;
  }

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    p {
      font-size: 1rem;
      line-height: 2.3rem;
    }
  }

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    margin: 0;

    h3 {
      margin-top: 2rem;
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      line-height: 2.5rem;
    }
  }
`

const LeaderImgWrapper = styled.div`
  position: relative;
  min-width: 300px;
  height: 100%;
  flex: 1;
  height: min-content;

  &:before {
    content: "";
    height: 50%; //You can change this if you want smaller/bigger borders
    width: 110%;
    position: absolute;
    right: -15px;
    bottom: 0;
    border: 2px solid ${({ borderColor }) => theme[borderColor]};
    border-radius: 5px;
  }

  img {
    z-index: 10;
    width: 100%;
    position: relative;
  }
`

const Factions = () => {
  return (
    <FactionsContentWrapper backgroundColor="grey">
      <FactionsWrapper>
        <SectionTitle textAlignEnd>The Four Factions</SectionTitle>
        <LeaderCard>
          <LeaderImgWrapper borderColor="yellow">
            <img src="/images/heroics.png" />
          </LeaderImgWrapper>
          <LeaderCardDesc textColor="yellow" imgLeft>
            <h3>Heroics</h3>
            <p>
              The Heroics descend from Mt. Omnia high in the sky. True of heart
              and possessing extreme strength, flight and the power to control
              lightning the Heroics came to the Atlins and Mystics aid during
              the Great Omniwar to push back the Infernals.{" "}
            </p>
            {/* <MoreButton backgroundColor="yellow">More</MoreButton> */}
          </LeaderCardDesc>
        </LeaderCard>
        <LeaderCard mobileReverse>
          <LeaderCardDesc textColor="red">
            <h3>Infernals</h3>
            <p>
              The Infernals are a crude race with a fierce desire to rule Omnia
              and enslave the other. Possessing extreme strength and the power
              to control fire and earth the Infernals initiated the Great
              Omniwar. After 100 years of fighting the Infernals were vanquished
              into the forgotten realm 10,000 years ago following the Great
              Omniwar.
            </p>
            {/* <MoreButton backgroundColor="red">More</MoreButton> */}
          </LeaderCardDesc>
          <LeaderImgWrapper borderColor="red">
            <img src="/images/infernals.png" />
          </LeaderImgWrapper>
        </LeaderCard>
        <LeaderCard>
          <LeaderImgWrapper borderColor="teal">
            <img src="/images/atlins.png" />
          </LeaderImgWrapper>
          <LeaderCardDesc textColor="teal" imgLeft>
            <h3>Atlins</h3>
            <p>
              The Atlins control the oceans and come from 10,000 leagues below
              the surface. With the power of the sea and all it’s creatures and
              extreme strength the Atlins abilities were crucial in pushing the
              Infernals back into the Forgotten Realm.
            </p>
            {/* <MoreButton backgroundColor="teal">More</MoreButton> */}
          </LeaderCardDesc>
        </LeaderCard>
        <LeaderCard mobileReverse>
          <LeaderCardDesc textColor="purple">
            <h3>Mystics</h3>
            <p>
              The Mystics are a race of few words with the power of magic lived.
              They are a very powerful yet peaceful race that lives deep in the
              enchanted forest, a realm near impossible to reach without the use
              of magic.
            </p>
            {/* <MoreButton backgroundColor="purple">More</MoreButton> */}
          </LeaderCardDesc>
          <LeaderImgWrapper borderColor="purple">
            <img src="/images/mystics.png" />
          </LeaderImgWrapper>
        </LeaderCard>
      </FactionsWrapper>
    </FactionsContentWrapper>
  )
}

export default Factions
