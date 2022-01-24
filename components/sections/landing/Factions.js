import React from "react"
import styled from "styled-components"
import { theme } from "../../palette"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
} from "../../layout/SharedComponents"
import Color from "color"

const FactionsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  gap: 5rem;
  background-color: ${theme.grey};
  padding: 5rem 5.5rem;

  max-width: 1500px;
  align-self: center;
  overflow-x: hidden;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem;
    margin-top: 5rem;
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
    color: ${theme.white};
    line-height: 3rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    margin: 0;

    h3 {
      margin-top: 2rem;
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
    }
  }
`

const LeaderImgWrapper = styled.div`
  position: relative;
  min-width: 300px;
  height: 100%;
  flex: 1;

  img {
    z-index: 10;
    width: 100%;

    &:before {
      content: "";
      height: 100%; //You can change this if you want smaller/bigger borders
      width: 1px;
      position: absolute;
      right: 0;
      top: 0;
      background-color: ${theme.white};
    }
  }

  /* .img-border {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    border: 2px solid ${theme.white};
  } */
`

const Factions = () => {
  return (
    <ContentWrapper backgroundColor="grey">
      <FactionsWrapper>
        <SectionTitle textAlignEnd>The Four Factions</SectionTitle>
        <LeaderCard>
          <LeaderImgWrapper>
            <img src="/images/heroics.png" />
            <div className="img-border" />
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
          <LeaderImgWrapper>
            <img src="/images/infernals.png" />
          </LeaderImgWrapper>
        </LeaderCard>
        <LeaderCard>
          <LeaderImgWrapper>
            <img src="/images/atlins.png" />
            <div className="img-border" />
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
          <LeaderImgWrapper>
            <img src="/images/mystics.png" />
            <div className="img-border" />
          </LeaderImgWrapper>
        </LeaderCard>
      </FactionsWrapper>
    </ContentWrapper>
  )
}

export default Factions
