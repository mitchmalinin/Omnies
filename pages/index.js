import Head from "next/head"
import styled from "styled-components"
import { theme } from "../components/palette"
import Image from "next/image"
import Color from "color"
import { SectionTitle, MoreButton } from "../components/layout/SharedComponents"

const Wrapper = styled.div`
  background-image: url("/images/grit.png");
  background-size: contain;
  background-repeat: repeat;
  background-position: center;
  background-color: ${theme.grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeroWrapper = styled.div`
  height: 100vh;
  color: ${theme.white};
  position: relative;
  background-image: url("../images/background.png");
  background-size: cover;
  background-position: center;
`

const NavWrapper = styled.nav`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    display: none;
  }
`

const NavItemsWrapper = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${theme.white};
  }
`

const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
`

const Logo = styled.p`
  /* font-family: heater; */
  font-size: 2.5rem;
`

const HeroContentWrapper = styled.div`
  /* padding: 10rem 0 0 8.5rem; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 70%;
  margin-left: 12vw;
  margin-top: 10vh;
`

const HeroTitle = styled.h1`
  /* font-family: heater; */
  font-size: 10rem;
  color: ${theme.yellow};

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 7rem;
  }
`

const HeroSubtitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 7.25rem;
`

const EnterButton = styled.button`
  border: 1px solid ${theme.white};
  background-color: ${Color(theme.red).alpha(0.2)};
  color: ${theme.white};
  padding: 0.5em 2em;
  font-size: 1.25rem;
`

const HeroGodsImgWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, -5%);
  text-align: center;
  height: 800px;
  width: 900px;
`

const BorderDivider = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  ${({ top }) => (top ? "top: -4rem;" : "bottom: -4rem;")};
  z-index: 1;
  background-image: url("/images/black-brush.svg");
  background-size: contain;
  background-repeat: repeat;
  background-position: center;
`

const MoreLoreWrapper = styled.div`
  position: relative;
  background-image: url("/images/black-brush.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  place-items: center;
  padding: 5rem 0;
`

const MoreLoreCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 3;
  gap: 3rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
  }
`

const MoreLoreCard = styled.div`
  position: relative;
  padding: 1rem;
  width: 230px;
  height: 250px;
  border: 1px solid ${theme.white};
  color: ${theme.white};
  font-size: 2.5rem;
  word-spacing: unset;
  display: table-caption;
  transition: all 0.1s ease-in;
  cursor: pointer;

  &:nth-child(1) {
    background-color: ${Color(theme.red).alpha(0.12)};
  }

  &:nth-child(2) {
    background-color: ${Color(theme.yellow).alpha(0.12)};
  }

  &:nth-child(3) {
    background-color: ${Color(theme.purple).alpha(0.2)};
  }

  &:hover {
    transform: scale(1.05);
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

const ContentWrapper = styled.div`
  padding: 0 5.5rem;
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1500px;
  align-self: center;
  overflow-x: hidden;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem;
  }
`

const AccordWrapper = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  justify-content: flex-start;
  width: 100%;
  z-index: 5;
  gap: 2rem;
  margin-top: 10rem;
`

const AccordDesc = styled.div`
  font-size: 1.5rem;
  color: ${theme.white};
  line-height: 3rem;
`

const FactionsWrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  gap: 5rem;
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
      text-align: center;
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

    &::after {
      content: "";
      height: 100%; //You can change this if you want smaller/bigger borders
      width: 1px;
      position: absolute;
      right: 0;
      top: 0; // If you want to set a smaller height and center it, change this value

      background-color: white; // The color of your border
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

const Footer = styled.div`
  margin-top: 10rem;
  height: 100px;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${theme.grey};
  color: ${theme.white};
`

const RoadmapWrapper = styled.div`
  text-align: left;
  width: 100%;
  background-color: ${theme.grey};
  padding: 5rem 5.5rem;
  max-width: 1500px;
  margin-top: 5rem;
  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem;
  }
`

const RoadmapContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5rem;
  gap: 3rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
  }
`

const RoadMapItem = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 2rem;

  h2 {
    color: ${theme.yellow};
    font-size: 2rem;
  }

  h3 {
    color: ${theme.white};
    font-size: 2.5rem;
  }

  p {
    color: ${theme.white};
    line-height: 3rem;
    font-size: 1rem;
  }
`

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>The Omnies</title>
        <meta name="description" content="The one who has all the power" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWrapper>
        <NavWrapper>
          <Logo>Omnies</Logo>
          <NavItemsWrapper>
            <a href="#about">
              <NavItem>ABOUT</NavItem>
            </a>
            <NavItem>TEAM</NavItem>
            <NavItem>SPECS</NavItem>
            <NavItem>ROADMAP</NavItem>
          </NavItemsWrapper>
        </NavWrapper>
        <HeroContentWrapper>
          <HeroTitle>Omnia</HeroTitle>
          <HeroSubtitle>REALM OF THE OMNIES</HeroSubtitle>
          {/* <EnterButton>Enter</EnterButton> */}
        </HeroContentWrapper>
        {/* <HeroGodsImgWrapper>
          <Image
            src="/images/hero-gods.png"
            alt="hero"
            height="100%"
            width="100%"
            layout="responsive"
          />
        </HeroGodsImgWrapper> */}
      </HeroWrapper>
      <MoreLoreWrapper>
        <BorderDivider top />
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
        <BorderDivider />
      </MoreLoreWrapper>
      <ContentWrapper>
        <AccordWrapper>
          <SectionTitle id="about">The Omnia Accord</SectionTitle>
          <AccordDesc>
            During the Great Omniwar each faction elected a leader to lead their
            armies. Following the vanquishing of the Infernals to the Forgotten
            Realm the Leaders of the other 3 Factions met at what came to be
            known as ‘The Omnia Accord.’
          </AccordDesc>
          <MoreButton backgroundColor="red">More</MoreButton>
        </AccordWrapper>
        <FactionsWrapper>
          <SectionTitle textAlignEnd>The Four Factions</SectionTitle>
          <LeaderCard>
            <LeaderImgWrapper>
              <Image
                src="/images/heroics.png"
                alt="heroics"
                height="100%"
                width="100%"
                layout="responsive"
                // objectFit="contain"
              />
              <div className="img-border" />
            </LeaderImgWrapper>
            <LeaderCardDesc textColor="yellow" imgLeft>
              <h3>Heroics</h3>
              <p>
                The Heroics descend from Mt. Omnia high in the sky. True of
                heart and possessing extreme strength, flight and the power to
                control lightning the Heroics came to the Atlins and Mystics aid
                during the Great Omniwar to push back the Infernals.{" "}
              </p>
              <MoreButton backgroundColor="yellow">More</MoreButton>
            </LeaderCardDesc>
          </LeaderCard>
          <LeaderCard mobileReverse>
            <LeaderCardDesc textColor="red">
              <h3>Infernals</h3>
              <p>
                The Infernals are a crude race with a fierce desire to rule
                Omnia and enslave the other. Possessing extreme strength and the
                power to control fire and earth the Infernals initiated the
                Great Omniwar. After 100 years of fighting the Infernals were
                vanquished into the forgotten realm 10,000 years ago following
                the Great Omniwar.
              </p>
              <MoreButton backgroundColor="red">More</MoreButton>
            </LeaderCardDesc>
            <LeaderImgWrapper>
              <Image
                src="/images/infernals.png"
                alt="infernals"
                height="100%"
                width="100%"
                layout="responsive"
                // objectFit="contain"
              />
              <div className="img-border" />
            </LeaderImgWrapper>
          </LeaderCard>
          <LeaderCard>
            <LeaderImgWrapper>
              <Image
                src="/images/atlins.png"
                alt="atlins"
                height="100%"
                width="100%"
                layout="responsive"
                // objectFit="contain"
              />
              <div className="img-border" />
            </LeaderImgWrapper>
            <LeaderCardDesc textColor="teal" imgLeft>
              <h3>Atlins</h3>
              <p>
                The Atlins control the oceans and come from 10,000 leagues below
                the surface. With the power of the sea and all it’s creatures
                and extreme strength the Atlins abilities were crucial in
                pushing the Infernals back into the Forgotten Realm.
              </p>
              <MoreButton backgroundColor="teal">More</MoreButton>
            </LeaderCardDesc>
          </LeaderCard>
          <LeaderCard mobileReverse>
            <LeaderCardDesc textColor="purple">
              <h3>Mystics</h3>
              <p>
                The Mystics are a race of few words with the power of magic
                lived. They are a very powerful yet peaceful race that lives
                deep in the enchanted forest, a realm near impossible to reach
                without the use of magic.
              </p>
              <MoreButton backgroundColor="purple">More</MoreButton>
            </LeaderCardDesc>
            <LeaderImgWrapper>
              <Image
                src="/images/mystics.png"
                alt="mystics"
                height="100%"
                width="100%"
                layout="responsive"
                // objectFit="contain"
              />
              <div className="img-border" />
            </LeaderImgWrapper>
          </LeaderCard>
        </FactionsWrapper>
      </ContentWrapper>
      <RoadmapWrapper>
        <SectionTitle>Roadmap</SectionTitle>
        <RoadmapContentWrapper>
          <RoadMapItem>
            <h2>Phase 1</h2>
            <h3>Feburary 2021.</h3>
            <p>
              We understand that an army is stronger than a single warrior so we
              will be searching far and wide for champions to join our community
              and help spread the word of the Samurai Saga. We launch our attack
              at the end of December
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 2</h2>
            <h3>March 2021.</h3>
            <p>
              We understand that an army is stronger than a single warrior so we
              will be searching far and wide for champions to join our community
              and help spread the word of the Samurai Saga. We launch our attack
              at the end of December
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 3</h2>
            <h3>April 2021.</h3>
            <p>
              We understand that an army is stronger than a single warrior so we
              will be searching far and wide for champions to join our community
              and help spread the word of the Samurai Saga. We launch our attack
              at the end of December
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 4</h2>
            <h3>May 2021.</h3>
            <p>
              We understand that an army is stronger than a single warrior so we
              will be searching far and wide for champions to join our community
              and help spread the word of the Samurai Saga. We launch our attack
              at the end of December
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 5</h2>
            <h3>June 2021.</h3>
            <p>
              We understand that an army is stronger than a single warrior so we
              will be searching far and wide for champions to join our community
              and help spread the word of the Samurai Saga. We launch our attack
              at the end of December
            </p>
          </RoadMapItem>
        </RoadmapContentWrapper>
      </RoadmapWrapper>

      <Footer>Omnies</Footer>
    </Wrapper>
  )
}
