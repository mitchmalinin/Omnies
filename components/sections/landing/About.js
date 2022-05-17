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

  @media only screen and (max-width: 991px) {
    padding: 4rem 5.5rem 9rem 5.5rem;
  }

  @media only screen and (max-width: 480px) {
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

  @media only screen and (max-width: 991px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 480px) {
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
            Omnies are a unique collection of <span> 200 Genesis </span> and{" "}
            <span> 8,888 Generative </span>
            Hand Drawn NFTs living on the Ethereum blockchain in Omnia, the
            realm of the Gods.
          </AboutDesc>
          <AboutDesc>
            Omnies is a community driven project. Our core team is composed of
            seven individuals from various industries and disciplines. All of
            whom are extremely passionate about the Crypto and NFT space.
          </AboutDesc>
          <AboutDesc>
            Our goal with Omnies is to foster a community focusing on growth &
            development. The future direction of the project will be determined
            by the Omnies community.
          </AboutDesc>
          <AboutDesc>
            Have you ever wondered what goes into creating an NFT? Have you
            wanted to be a part of an NFT but not have the time? Are you
            passionate about the crypto and NFT space?
          </AboutDesc>
          <AboutDesc>
            If you answered yes to any of the questions above then you have come
            to the right place. <span> Are you worthy? </span>
          </AboutDesc>
        </AboutContentInnerWrapper>
      </AboutWrapper>
    </AboutContentWrapper>
  )
}

export default About
