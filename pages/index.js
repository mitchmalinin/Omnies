import Head from "next/head"
import styled from "styled-components"
import { theme } from "../components/palette"
import Image from "next/image"
import Color from "color"
import Roadmap from "../components/sections/landing/Roadmap"
import Factions from "../components/sections/landing/Factions"
import MoreLore from "../components/sections/landing/MoreLore"
import Accord from "../components/sections/landing/Accord"
import Team from "../components/sections/landing/Team"
import { SectionTitle } from "../components/layout/SharedComponents"

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

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("../images/hero-mobile.png");
  }
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
  font-size: 1.2rem;
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

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 2rem;
  }
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
  height: 400px;
  width: 300px;
`

const Footer = styled.div`
  padding: 10rem 0 4rem 0;
  height: 100px;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${theme.lightGrey};
  color: ${theme.silver};
`

const SocialIconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  position: relative;
  color: ${theme.white};
  cursor: pointer;

  i {
    z-index: 999;
  }

  &:before {
    content: "";
    background-color: ${Color(theme.yellow).alpha(0.12)};
    border: 1px solid ${theme.yellow};
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-in;
    transform: rotate(45deg);
  }

  &:hover:before {
    background-color: ${theme.yellow};
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 1.2rem;
    width: 3rem;
    height: 3rem;
  }
`
const SocialsWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 3rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    margin-top: 3rem;
  }
`
const Socials = styled.div`
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  padding: 5rem 5.5rem;
  max-width: 1500px;
  align-self: center;
  overflow-x: hidden;
  background-color: ${theme.lightGrey};
  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem;
    margin-top: 5rem;
  }
`

const SocialsContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;

  p {
    font-size: 2.5rem;
    color: ${theme.white};
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    flex-direction: column;
    padding-bottom: 2rem;

    p {
      font-size: 1.5rem;
    }
  }
`

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>The Omnies</title>
        <meta name="description" content="The one who has all the power" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <HeroWrapper>
        <NavWrapper>
          <Logo>Omnies</Logo>
          <NavItemsWrapper>
            <a href="#about">
              <NavItem>ABOUT</NavItem>
            </a>
            <a href="#team">
              <NavItem>TEAM</NavItem>
            </a>
            <a href="#roadmap">
              <NavItem>ROADMAP</NavItem>
            </a>
            <a href="#socials">
              <NavItem>SOCIALS</NavItem>
            </a>
          </NavItemsWrapper>
        </NavWrapper>
        <HeroContentWrapper>
          <HeroTitle>Omnia</HeroTitle>
          <HeroSubtitle>REALM OF THE OMNIES</HeroSubtitle>
          {/* <EnterButton>Enter</EnterButton> */}
        </HeroContentWrapper>
        <HeroGodsImgWrapper>
          {/* <Image
            src="/images/header_image/header1.svg"
            alt="hero"
            height="100%"
            width="100%"
            layout="responsive"
          /> */}
        </HeroGodsImgWrapper>
      </HeroWrapper>
      <MoreLore />
      <Accord />
      <Factions />
      <Team />
      <Roadmap />
      <Socials>
        <SectionTitle id="socials" textAlignEnd>
          Socials
        </SectionTitle>
        <SocialsContentWrapper>
          <p>Need a cool slogan here</p>
          <SocialsWrapper>
            <SocialIconWrapper>
              <i className="fab fa-discord"></i>
            </SocialIconWrapper>
            <SocialIconWrapper>
              <i className="fab fa-twitter"></i>
            </SocialIconWrapper>
          </SocialsWrapper>
        </SocialsContentWrapper>
      </Socials>
      <Footer>© 2021 OMNIES. ALL RIGHTS RESERVED.</Footer>
    </Wrapper>
  )
}
