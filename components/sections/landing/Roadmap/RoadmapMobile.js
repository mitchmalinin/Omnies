import styled from "styled-components"
import { theme } from "../../../palette"

const RoadmapContentInnnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3rem;
  gap: 3rem;
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
    line-height: 2.1rem;
    font-size: 1rem;
  }

  .bold {
    color: ${theme.yellow};
  }
`

const RoadmapMobile = () => {
  return (
    <RoadmapContentInnnerWrapper>
      <RoadMapItem>
        <h2>Phase 1</h2>
        <p>
          We believe that a faction is only as strong as its weakest link. We
          will be searching far and wide for those worthy of attaining the title
          of ‘Omnimpian’ to join our community and contribute to the realm.
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 2</h2>
        <p>
          Our focus is on member feedback and building a close-knit Omnie
          community. We will be seeking community input and insights to ensure
          our collection is the best it can be.
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 3</h2>
        <p>
          Launch of 200 Genesis Omnies (50 Atlins, 50 Heroics, 50 Mystics, 50
          Infernals).
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 4</h2>
        <p>
          Launch of the “Genesis Tribunal.” The Tribunal outcome will determine
          the future direction of the project. All Genesis Omnimpians ideas will
          be heard and put to a vote amongst the community.
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 5</h2>
        <p>
          The Forger will Giveaway rare items to a select few Omnimpians deemed
          worthy in each faction. The Forger values Communication, Passion and
          Creativity.
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 6</h2>
        <p>
          Launch of The Omnia Store to facilitate the sale of merchandise, games
          and accessories.
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 7</h2>
        <p>
          Launch of 8,888 Generative Omnies (2,222 Atlins, 2,222 Heroics, 2,222
          Mystics, 2,222 Infernals).
        </p>
      </RoadMapItem>
    </RoadmapContentInnnerWrapper>
  )
}

export default RoadmapMobile
