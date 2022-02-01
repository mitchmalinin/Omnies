import React from "react"
import { theme, sizes } from "../../palette"
import styled from "styled-components"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
  FakeAnchor,
} from "../../layout/SharedComponents"

const AccordContentWrapper = styled(ContentWrapper)`
  background-image: url("/images/dividers/4.png");
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
`

const AccordWrapper = styled.div`
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
    padding: 4rem 2.5rem;
  }
`

const AccordDesc = styled.div`
  font-size: 1.4rem;
  color: ${theme.silver};
  line-height: 3rem;

  span {
    color: ${theme.yellow};
  }

  &:nth-child(3) {
    margin-top: -2.5rem;
  }

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 1rem;
    line-height: 2.5rem;
  }
`

const Accord = () => {
  return (
    <AccordContentWrapper backgroundColor="grey">
      <FakeAnchor id="about" />
      <AccordWrapper>
        <SectionTitle>The Omnia Accord</SectionTitle>
        <AccordDesc>
          During the Great Omniwar each faction elected a leader to lead their
          armies. Following the vanquishing of the Infernals to the Forgotten
          Realm the Leaders of the other 3 Factions met at what came to be known
          as ‘The Omnia Accord.’
        </AccordDesc>
        <AccordDesc>
          During this meeting, it was agreed upon that all four factions would
          put all their power into their emblems and surrender them, along with
          all their powers to a single entity for safekeeping in an effort to
          end what felt like an endless war. Little is known about this entity,
          as those scrolls are missing. The only mention of such entity names
          him <span>The Forger</span>. Holding the entirety of the power of each
          faction, The Forger banishes all four factions from Omnia and destroys
          their powerful emblems, never to be seen again...or so we thought.
        </AccordDesc>
        {/* <MoreButton backgroundColor="red">More</MoreButton> */}
      </AccordWrapper>
    </AccordContentWrapper>
  )
}

export default Accord
