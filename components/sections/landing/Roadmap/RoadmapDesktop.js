import React, { setState } from "react"
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
    left: 22%;
    top: 21%;
  }
  &:nth-child(2) {
    left: 29%;
    top: 34%;
  }
  &:nth-child(3) {
    left: 69%;
    top: 26%;
  }
  &:nth-child(4) {
    left: 22%;
    bottom: 31%;
  }
  &:nth-child(5) {
    left: 48%;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .dot {
    margin-right: 0.5rem;
    width: 30px;
    height: 30px;
    border: 3px solid ${({ done }) => (done ? theme.green : theme.red)};
    background: ${({ done }) => (done ? theme.green : theme.red)};
    border-radius: 50%;
    transition: all 0.1s ease-in;
    margin-top: -2.5px;
  }

  &:hover {
    .dot {
      background-color: ${({ done }) =>
        done ? Color(theme.green).alpha(0.5) : Color(theme.red).alpha(0.5)};
    }
  }
`

const RoadmapDesktop = () => (
  <RoadmapDesktopContentWrapper>
    <PhaseWrapper>
      <Phase done data-tip data-for="phase1">
        <span className="dot" />
        <span>Phase 1</span>
        <Tooltip id="phase1" effect="solid" done>
          <span>
            We believe that a faction is only as strong as its weakest link. We
            will be searching far and wide for those worthy of attaining the
            title of ‘Omnimpian’ to join our community and contribute to the
            realm.
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase data-tip data-for="phase2">
        <span className="dot" />
        <span>Phase 2</span>
        <Tooltip id="phase2" effect="solid">
          <span>
            Our focus is on member feedback and building a close-knit Omnie
            community. We will be seeking community input and insights to ensure
            our collection is the best it can be.
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase data-tip data-for="phase3">
        <span className="dot" />
        <span>Phase 3</span>
        <Tooltip id="phase3" effect="solid">
          <span>
            Launch of 200 Genesis Omnies (50 Atlins, 50 Heroics, 50 Mystics, 50
            Infernals).
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase data-tip data-for="phase7">
        <span className="dot" />
        <span>Phase 7</span>
        <Tooltip id="phase7" effect="solid">
          <span>
            Launch of 8,888 Generative Omnies (2,222 Atlins, 2,222 Heroics,
            2,222 Mystics, 2,222 Infernals).
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase data-tip data-for="phase6">
        <span className="dot" />
        <span>Phase 6</span>
        <Tooltip id="phase6" effect="solid">
          <span>
            Launch of The Omnia Store to facilitate the sale of merchandise,
            games and accessories.
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase data-tip data-for="phase5">
        <span className="dot" />
        <span>Phase 5</span>
        <Tooltip id="phase5" effect="solid">
          <span>
            The Forger will Giveaway rare items to a select few Omnimpians
            deemed worthy in each faction. The Forger values Communication,
            Passion and Creativity.
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
    <PhaseWrapper>
      <Phase data-tip data-for="phase4">
        <span className="dot" />
        <span>Phase 4</span>
        <Tooltip id="phase4" effect="solid">
          <span>
            Launch of the “Genesis Tribunal.” The Tribunal outcome will
            determine the future direction of the project. All Genesis
            Omnimpians ideas will be heard and put to a vote amongst the
            community.
          </span>
        </Tooltip>
      </Phase>
    </PhaseWrapper>
  </RoadmapDesktopContentWrapper>
)

export default RoadmapDesktop
