import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import { theme } from "../components/palette"

const Wrapper = styled.div`
  background-color: ${theme.grey};
`

const HeroWrapper = styled.div`
  height: 100vh;
  color: ${theme.white};
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
`

const Logo = styled.p`
  font-family: heater;
  font-size: 40px;
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
      </HeroWrapper>
    </Wrapper>
  )
}
