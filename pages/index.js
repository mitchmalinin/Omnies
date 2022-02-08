import { useEffect, setState } from "react"
import Head from "next/head"
import styled from "styled-components"
import { theme, sizes } from "../components/palette"
import Color from "color"
import Roadmap from "../components/sections/landing/Roadmap"
import Factions from "../components/sections/landing/Factions"
import MoreLore from "../components/sections/landing/MoreLore"
import About from "../components/sections/landing/About"
import Team from "../components/sections/landing/Team"
import {
  SectionTitle,
  ContentWrapper,
  MoreButton,
} from "../components/layout/SharedComponents"
import SocialsIcons from "../components/modules/SocialsIcons"

const Wrapper = styled.div`
  /* background-image: url("../images/test-texture.png"); */

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeroWrapper = styled.div`
  height: 100vh;
  color: ${theme.white};
  position: relative;
  background-image: url("../images/hero-desktop.png");
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 480px) {
    background-image: url("../images/hero-mobile.png");
  }
`

const WorthyButton = styled.div`
  border: 1.5px solid ${theme.red};
  background: ${theme.red};
  padding: 0.5em 2em;
  font-size: 1.5rem;
  width: max-content;
  color: ${theme.white};
  transition: all 0.2s ease-in;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${Color(theme.red).alpha(0.12)};
    box-shadow: 0px 0px 30px 0px rgba(255, 0, 0, 0.5);
  }
`

const BorderDivider = styled.img`
  width: 100%;
  position: absolute;
  bottom: -60px;
  height: 150px;
  @media only screen and (max-width: 480px) {
    bottom: -63px;
  }
`

const NavWrapper = styled.nav`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 999;
  backdrop-filter: blur(6.5px);
  a {
    color: ${theme.white};
    text-decoration: none;
  }
  @media only screen and (max-width: 480px) {
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

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const NavItem = styled.li`
  list-style-type: none;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in;

  &:before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 50%;
    transform: scale(0, 1);
    transition: transform 0.3s ease;
    transform-origin: 0% 100%;
    background: ${theme.yellow};
  }

  &:hover:before {
    transform: scale(1, 1);
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Logo = styled.p`
  /* font-family: heater; */
  font-size: 2.5rem;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 50%;
    transform: scale(0, 1);
    transition: transform 0.3s ease;
    transform-origin: 0% 100%;
    background: ${theme.yellow};
  }

  &:hover:before {
    transform: scale(1, 1);
  }
`

const HeroContentWrapper = styled.div`
  /* padding: 10rem 0 0 8.5rem; */
  display: grid;
  place-items: center;
  height: 100%;
  background: #0000009e;
  position: relative;
`
const HeroSocials = styled.div`
  position: absolute;
  top: 15vh;
  right: 50px;

  @media only screen and (max-width: 480px) {
    top: 0;
    right: 40px;
  }
`

const HeroInnerContentWrapper = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 2rem;
  justify-items: center;

  a {
    text-decoration: none;
  }
`

const HeroTitle = styled.h1`
  /* font-family: heater; */
  line-height: 0.8;
  font-size: 10rem;
  color: ${theme.yellow};

  @media only screen and (max-width: 480px) {
    font-size: 7rem;
  }
`

const HeroSubtitle = styled.h2`
  font-size: 3rem;

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const Footer = styled.div`
  padding: 6rem 0 4rem 0;
  height: 100px;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${theme.lightGrey};
  color: ${theme.silver};

  @media only screen and (max-width: 480px) {
    padding: 5rem 0 5rem 0;
  }
`

const Socials = styled.div`
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  padding: 5rem 5.5rem 2rem 5.5rem;
  max-width: ${sizes.maxWidth};
  align-self: center;
  overflow-x: hidden;
  background-color: ${theme.lightGrey};
  @media only screen and (max-width: 480px) {
    padding: 0 2.5rem;
    margin-top: 5rem;
  }
`

const SocialsContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  p {
    font-size: 2.5rem;
    color: ${theme.white};
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 2rem;

    p {
      font-size: 1.5rem;
    }
  }
`

const SocialContentInnerWrapper = styled.div`
  display: grid;
  gap: 3rem;
  width: 50%;

  a {
    text-decoration: none;
  }
`

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>The Omnies</title>
        <meta name="description" content="The one who has all the power" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <HeroWrapper id="hero">
        <NavWrapper>
          <a href="#hero">
            <Logo>Omnies</Logo>
          </a>
          <NavItemsWrapper>
            <a href="#about">
              <NavItem>ABOUT</NavItem>
            </a>
            <a href="#lore">
              <NavItem>LORE</NavItem>
            </a>
            <a href="#roadmap">
              <NavItem>ROADMAP</NavItem>
            </a>
            <a href="#team">
              <NavItem>TEAM</NavItem>
            </a>
          </NavItemsWrapper>
        </NavWrapper>
        <HeroContentWrapper>
          <HeroInnerContentWrapper>
            <HeroTitle>Omnia</HeroTitle>
            <HeroSubtitle>REALM OF THE OMNIES</HeroSubtitle>
            <a
              href="https://discord.gg/Zqpp6uQqyg"
              target="_blank"
              rel="noreferrer"
            >
              <WorthyButton>Are You Worthy?</WorthyButton>
            </a>
          </HeroInnerContentWrapper>
          <HeroSocials>
            <SocialsIcons row />
          </HeroSocials>
        </HeroContentWrapper>
        <BorderDivider src="/images/dividers/top.png" />
      </HeroWrapper>
      <About />
      <MoreLore />
      <Factions />
      <Roadmap />
      <Team />
      <ContentWrapper backgroundColor="lightGrey">
        <Socials>
          <SocialsContentWrapper>
            <SocialContentInnerWrapper>
              <p>Are you worthy to wield the power of an Omnie?</p>
              <a
                href="https://discord.gg/Zqpp6uQqyg"
                target="_blank"
                rel="noreferrer"
              >
                <WorthyButton>Test Your Luck</WorthyButton>
              </a>
            </SocialContentInnerWrapper>
            <SocialsIcons moreMarginTop />
          </SocialsContentWrapper>
        </Socials>
      </ContentWrapper>
      <Footer>© 2021 OMNIES. ALL RIGHTS RESERVED.</Footer>
    </Wrapper>
  )
}
