import React from "react"
import styled from "styled-components"
import { theme } from "../../../palette"
import Color from "color"
import { Tooltip } from "../../../layout/SharedComponents"

const RoadmapDesktopContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const PhaseWrapper = styled.div`
  position: absolute;
  color: ${theme.red};
  cursor: pointer;

  &:nth-child(1) {
    left: 24%;
    top: 21%;
  }
  &:nth-child(2) {
    left: 31%;
    top: 34%;
  }
  &:nth-child(3) {
    left: 70%;
    top: 26%;
  }
  &:nth-child(4) {
    left: 24%;
    bottom: 31%;
  }
  &:nth-child(5) {
    left: 50%;
    bottom: 19%;
  }
  &:nth-child(6) {
    right: 38%;
    bottom: 37%;
  }
  &:nth-child(7) {
    right: 19%;
    bottom: 44%;
  }
`

const Phase = styled.div`
  font-size: 2rem;
  position: relative;
  color: ${theme.silver};

  &:before {
    pointer-events: none;
    content: "";
    width: 30px;
    height: 30px;
    border: 3px solid ${theme.red};
    background: ${theme.red};
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left: -40px;
    transition: all 0.1s ease-in;
  }

  &:hover:before {
    background-color: ${Color(theme.red).alpha(0.5)};
  }

  &:hover {
    /* color: ${theme.white}; */
  }
`

const RoadmapDesktop = () => (
  <RoadmapDesktopContentWrapper>
    <PhaseWrapper>
      <Phase>
        <a data-tip data-for="phase1">
          Phase 1
        </a>
        <Tooltip id="phase1" effect="solid">
          <span>
            We believe that a faction is only as strong as its weakest link. We
            will be searching far and wide for those worthy of attaining the
            title of ‘Omnimpian’ to join our community and help spread the word
            of the realm.
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase>
        <a data-tip data-for="phase2">
          Phase 2
        </a>
        <Tooltip id="phase2" effect="solid">
          <span>
            Launch of 200 Genesis Omnies - Each Genesis Omnie will earn three
            Deities and three Weapons during a later Phase (50 Atlins, 50
            Heroics, 50 Mystics, 50 Infernals)
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase>
        <a data-tip data-for="phase3">
          Phase 3
        </a>
        <Tooltip id="phase3" effect="solid">
          <span>
            Launch of 8,888 Generative Omnies - Each Generative Omnie will earn
            one Deitie and one Weapon during a later phase (2,222 Atlins, 2,222
            Heroics, 2,222 Mystics, 2,222 Infernals)
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase>
        <a data-tip data-for="phase4">
          Phase 4
        </a>
        <Tooltip id="phase4" effect="solid">
          <span>
            The Forger will Giveaway rare items to a select few Omnimpians
            deemed worthy in each faction. The Forger values Communication,
            Passion and Creativity
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase>
        <a data-tip data-for="phase5">
          Phase 5
        </a>
        <Tooltip id="phase5" effect="solid">
          <span>
            Without a weapon the Deities can not be defeated and the war is
            lost. All holders will get a 3D weapon to be used in NFT Lands and a
            Deity (3 Weapons and Deities air dropped per Genesis Omnie, 1 Weapon
            and Deity air dropped per Generative Omnie)
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase>
        <a data-tip data-for="phase6">
          Phase 6
        </a>
        <Tooltip id="phase6" effect="solid">
          <span>
            Launch of The Omnia Store to facilitate the sale of merchandise,
            weapons and accessories to be used in NFT Lands
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase>
        <a data-tip data-for="phase7">
          Phase 7
        </a>
        <Tooltip id="phase7" effect="solid">
          <span>
            As the Cabin deep in the woods shakes Omnia appears. Our focus will
            be on the development of the five realms of Omnia in NFT Worlds. The
            realms will include the Enchanted Forest, The Mainland, The
            Forgotten Realm, The Trenches, and the Gates of Tartarus. Access to
            each realm will be based on your Omnie Faction. We will also enlist
            full 3D versions of our Omnies to be used in NFT Lands
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
  </RoadmapDesktopContentWrapper>
)

export default RoadmapDesktop
