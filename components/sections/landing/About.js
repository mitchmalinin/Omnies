import React from "react"
import { theme, sizes } from "../../palette"
import styled from "styled-components"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
  FakeAnchor,
} from "../../layout/SharedComponents"

const AboutContentWrapper = styled(ContentWrapper)`
  background-image: url("/images/dividers/4.png");
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
`

const AboutWrapper = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  justify-content: flex-start;
  width: 100%;
  z-index: 5;
  gap: 3rem;
  padding: 5rem 6rem 13rem 6rem;
  max-width: ${sizes.maxWidth};
  align-self: center;
  overflow-x: hidden;

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    padding: 4rem 5.5rem 9rem 5.5rem;
  }

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    padding: 4rem 2.5rem 5rem 2.5rem;
  }
`

const AboutContentInnerWrapper = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 1rem;
`

const AboutDesc = styled.div`
  font-size: 1.4rem;
  color: ${theme.silver};
  line-height: 3rem;

  span {
    color: ${theme.yellow};
    margin: 0 0.2rem;
  }

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 1rem;
    line-height: 2.5rem;
  }
`

const About = () => {
  return (
    <AboutContentWrapper backgroundColor="grey">
      <FakeAnchor id="about" />
      <AboutWrapper>
        <SectionTitle>What are Omnies?</SectionTitle>
        <AboutContentInnerWrapper>
          <AboutDesc>
            Omnies are a unique collection of <span> 250 Genesis </span> and{" "}
            <span> 8,888 Generative </span>
            Hand Drawn NFTs living on the Ethereum blockchain in Omnia, the
            realm of the Gods.
          </AboutDesc>
          <AboutDesc>
            The Collection will allow holders real world application into the
            Metaverse. Each Omnie NFT will serve as your key into that factions
            specified realm in the Metaverse.
          </AboutDesc>
          <AboutDesc>
            Each Omnie will generate rewards through Metaverse integrated items
            and renderings.{" "}
            <span>
              Are you Worthy of joining the Omnies and ascending to glory?
            </span>
          </AboutDesc>
        </AboutContentInnerWrapper>
      </AboutWrapper>
    </AboutContentWrapper>
  )
}

export default About
