import styled from "styled-components"
import { theme } from "../../../palette"

const RoadmapContentInnnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 5rem;
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
    font-size: 1.2rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    p {
      font-size: 1rem;
    }
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
          of ‘Omnimpian’ to join our community and help spread the word of the
          realm.
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 2</h2>
        <p>
          Launch of 200 Genesis Omnies - Each Genesis Omnie will earn three
          Deities and three Weapons during a later Phase (50 Atlins, 50 Heroics,
          50 Mystics, 50 Infernals)
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 3</h2>
        <p>
          Launch of 8,888 Generative Omnies - Each Generative Omnie will earn
          one Deitie and one Weapon during a later phase (2,222 Atlins, 2,222
          Heroics, 2,222 Mystics, 2,222 Infernals)
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 4</h2>
        <p>
          The Forger will Giveaway rare items to a select few Omnimpians deemed
          worthy in each faction. The Forger values Communication, Passion and
          Creativity
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 5</h2>
        <p>
          Without a weapon the Deities can not be defeated and the war is lost.
          All holders will get a 3D weapon to be used in NFT Lands and a Deity
          (3 Weapons and Deities air dropped per Genesis Omnie, 1 Weapon and
          Deity air dropped per Generative Omnie)
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 6</h2>
        <p>
          Launch of The Omnia Store to facilitate the sale of merchandise,
          weapons and accessories to be used in NFT Lands
        </p>
      </RoadMapItem>
      <RoadMapItem>
        <h2>Phase 7</h2>
        <p>
          As the Cabin deep in the woods shakes Omnia appears. Our focus will be
          on the development of the five realms of Omnia in NFT Worlds. The
          realms will include the Enchanted Forest, The Mainland, The Forgotten
          Realm, The Trenches, and the Gates of Tartarus. Access to each realm
          will be based on your Omnie Faction. We will also enlist full 3D
          versions of our Omnies to be used in NFT Lands
        </p>
      </RoadMapItem>
    </RoadmapContentInnnerWrapper>
  )
}

export default RoadmapMobile
