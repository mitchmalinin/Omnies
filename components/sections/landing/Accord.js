import React from "react"
import { theme, sizes } from "../../palette"
import styled from "styled-components"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
} from "../../layout/SharedComponents"

const AccordWrapper = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  justify-content: flex-start;
  width: 100%;
  z-index: 5;
  gap: 3rem;
  padding: 7rem 5.5rem 7rem 5.5rem;
  max-width: ${sizes.maxWidth};
  align-self: center;
  overflow-x: hidden;
  background-color: ${theme.lightGrey};

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 4rem 2.5rem;
  }
`

const AccordDesc = styled.div`
  font-size: 1.5rem;
  color: ${theme.white};
  line-height: 3rem;
  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    font-size: 1rem;
  }
`

const Accord = () => {
  return (
    <ContentWrapper backgroundColor="lightGrey">
      <AccordWrapper>
        <SectionTitle id="about">The Omnia Accord</SectionTitle>
        <AccordDesc>
          During the Great Omniwar each faction elected a leader to lead their
          armies. Following the vanquishing of the Infernals to the Forgotten
          Realm the Leaders of the other 3 Factions met at what came to be known
          as ‘The Omnia Accord.’
        </AccordDesc>
        {/* <MoreButton backgroundColor="red">More</MoreButton> */}
      </AccordWrapper>
    </ContentWrapper>
  )
}

export default Accord
