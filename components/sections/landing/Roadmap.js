import React from "react"
import styled from "styled-components"
import { theme } from "../../palette"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
} from "../../layout/SharedComponents"

const RoadmapWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  padding: 5rem 5.5rem;
  max-width: 1500px;
  align-self: center;
  overflow-x: hidden;
  background-color: ${theme.grey};
  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem;
    margin-top: 5rem;
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
    line-height: 2.5rem;
    font-size: 1.2rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    p {
      font-size: 1rem;
    }
  }
`

const Roadmap = () => {
  return (
    <ContentWrapper backgroundColor="grey">
      <RoadmapWrapper>
        <SectionTitle id="roadmap">Roadmap</SectionTitle>
        <RoadmapContentWrapper>
          <RoadMapItem>
            <h2>Phase 1</h2>
            {/* <h3>Feburary 2021.</h3> */}
            <p>
              Launch of 200 Genesis Omnies - Each Genesis Omnie will earn three
              Deities and three Weapons air dropped during later Phases
              <ul>
                <li>50 Mystics</li>
                <li>50 Heroics</li>
                <li>50 Infernals</li>
                <li>50 Atlins</li>
              </ul>
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 2</h2>
            {/* {/* <h3>March 2021.</h3> */}
            <p>
              Launch of 8,888 Generative Omnies - Each Generative Omnie will
              earn one Deitie and one Weapon air dropped
              <ul>
                <li>2,222 Mystics</li>
                <li>2,222 Heroics</li>
                <li>2,222 Infernals</li>
                <li>2,222 Atlins</li>
              </ul>
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 3</h2>
            {/* {/* <h3>April 2021.</h3> */}
            <p>
              Rare Giveaway to a select few Omnimpians deemed worthy of control
              by the Forger
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 4</h2>
            {/* {/* <h3>May 2021.</h3> */}
            <p>
              Auctions of special items/NFTs, proceeds will go towards Omnia
              buildout in NFT Worlds
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 5</h2>
            {/* <h3>June 2021.</h3> */}
            <p>Omnie Avatar integration into metaverse</p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 6</h2>
            {/* <h3>June 2021.</h3> */}
            <p>
              Airdrop of Weapons to be used in the Metaverse
              <ul>
                <li>3 Weapons air dropped per Genesis Omnie</li>
                <li>1 Weapon air dropped per Generative Omnie</li>
              </ul>
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 7</h2>
            {/* <h3>June 2021.</h3> */}
            <p>
              Launch of The Omnia Store to facilitate the sale of merchandise
              and weapons and accessories to be used in NFT Lands
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 8</h2>
            {/* <h3>June 2021.</h3> */}
            <p>
              NFT Worlds metaverse buildout of the four realms of Omnia
              (Enchanted Forest, The Mainland, The Forgotten Realm, The
              Trenches)
            </p>
          </RoadMapItem>
          <RoadMapItem>
            <h2>Phase 9</h2>
            {/* <h3>June 2021.</h3> */}
            <p>
              Airdrop of Deities for Omnipians
              <ul>
                <li>3 Deities per Genesis Omnie</li>
                <li>1 Deitie per Generative Omnie</li>
              </ul>
            </p>
          </RoadMapItem>
        </RoadmapContentWrapper>
      </RoadmapWrapper>
    </ContentWrapper>
  )
}

export default Roadmap
