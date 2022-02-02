import React, { useEffect } from "react"
import styled from "styled-components"
import { theme, sizes } from "../../../palette"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
  FakeAnchor,
} from "../../../layout/SharedComponents"
import useIsMobile from "../../../utils/hooks/useIsMobile"
import RoadmapMobile from "./RoadmapMobile"
import RoadmapDesktop from "./RoadmapDesktop"

const RoadMapContentWrapper = styled(ContentWrapper)`
  background-image: url("/images/dividers/3.png"), url("/images/dividers/5.png");
  background-position: 50% 100%, 50% 0%;
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;
  background-attachment: scroll, scroll;
  position: relative;
`

const RoadMapOuterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  padding: 5rem 5.5rem 14.5rem 5.5rem;
  max-width: ${sizes.maxWidth};
  align-self: center;
  overflow-x: hidden;
  gap: 3rem;

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    padding: 5rem 2.5rem 11rem 2.5rem;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem 6.5rem 2.5rem;
    margin-top: 5rem;
  }
`

const RoadmapWrapper = styled.div`
  background-image: ${({ isMobile }) =>
    isMobile ? "none" : `url("/images/Roadmap.png")`};
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 900px;
  z-index: 1;
`

const Roadmap = () => {
  const isMobile = useIsMobile()
  console.log("test", isMobile)
  return (
    <RoadMapContentWrapper backgroundColor="grey">
      <FakeAnchor id="roadmap" />
      <RoadMapOuterWrapper>
        <SectionTitle textAlignEnd>Roadmap</SectionTitle>
        <RoadmapWrapper isMobile={isMobile}>
          {isMobile ? <RoadmapMobile /> : <RoadmapDesktop />}
        </RoadmapWrapper>
      </RoadMapOuterWrapper>
    </RoadMapContentWrapper>
  )
}

export default Roadmap
