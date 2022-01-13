import Head from "next/head"
import styled from "styled-components"
import { theme } from "../components/palette"
import Image from "next/image"
import Color from "color"

const Wrapper = styled.div`
  background-color: ${theme.grey};
`

const HeroWrapper = styled.div`
  height: 100vh;
  color: ${theme.white};
  position: relative;
`

const NavWrapper = styled.nav`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavItemsWrapper = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
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
  padding: 10rem 0 0 8.5rem;
`

const HeroTitle = styled.h1`
  /* font-family: heater; */
  font-size: 10rem;
  margin-bottom: 1rem;
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
  transform: translate(-50%, 0%);
  text-align: center;
  height: 800px;
  width: 800px;
`

const BorderDivider = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: ${({ top }) => (top ? "-350px" : "0px")};
  z-index: 1;
`

const MoreLoreWrapper = styled.div`
  height: 500px;
  position: relative;
  background-image: url("/images/black-brush.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  place-items: center;
`

const OminiaAccordWrapper = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  background-image: url("/images/grit.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  place-items: center;
  background-color: ${theme.grey};
`

const MoreLoreCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 3;
  gap: 3rem;
`

const MoreLoreCard = styled.div`
  position: relative;
  padding: 1rem;
  width: 250px;
  height: 300px;
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
            <NavItem>ABOUT</NavItem>
            <NavItem>TEAM</NavItem>
            <NavItem>SPECS</NavItem>
            <NavItem>ROADMAP</NavItem>
          </NavItemsWrapper>
        </NavWrapper>
        <HeroContentWrapper>
          <HeroTitle>Omnia</HeroTitle>
          <HeroSubtitle>REALM OF THE OMNIES</HeroSubtitle>
          <EnterButton>Enter</EnterButton>
        </HeroContentWrapper>
        <HeroGodsImgWrapper>
          <Image
            src="/images/hero-gods.png"
            alt="hero"
            layout="fill"
            objectFit="contain"
          />
        </HeroGodsImgWrapper>
      </HeroWrapper>
      <MoreLoreWrapper>
        <BorderDivider top>
          <Image
            src="/images/black-brush.svg"
            alt="divider"
            height={582}
            width={1088}
            layout="responsive"
          />
        </BorderDivider>
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
        <BorderDivider>
          <Image
            src="/images/black-brush.svg"
            alt="divider"
            height={582}
            width={1088}
            layout="responsive"
          />
        </BorderDivider>
        <OminiaAccordWrapper />
      </MoreLoreWrapper>
    </Wrapper>
  )
}
