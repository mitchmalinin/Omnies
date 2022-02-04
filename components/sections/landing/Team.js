import React from "react"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
  FakeAnchor,
} from "../../layout/SharedComponents"
import styled from "styled-components"
import { theme, sizes } from "../../palette"
import { teamMembers } from "../../utils/staticData"

const TeamContentWrapper = styled(ContentWrapper)`
  background-image: url("/images/dividers/3.png"), url("/images/dividers/5.png");
  background-position: 50% 100%, 50% 0%;
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;
  background-attachment: scroll, scroll;
  position: relative;
`

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  padding: 10rem 6rem 14rem 6rem;
  max-width: ${sizes.maxWidth};
  align-self: center;
  overflow-x: hidden;

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    padding: 3rem 2.5rem 2rem 2.5rem;
  }

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    padding: 0rem 2.5rem 5rem 2.5rem;
    margin-top: 5rem;
  }
`

const TeamMembersWrapper = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 4rem;
  row-gap: 3rem;

  @media only screen and (max-width: 991px) and (-webkit-min-device-pixel-ratio: 1.5) {
    grid-template-columns: 330px 330px;
    justify-content: center;
    column-gap: 6rem;
    row-gap: 4rem;
  }

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
    gap: 3rem;
    justify-items: center;
  }
`

const TeamMemberImgWrapper = styled.div`
  img {
    border: 2px solid ${theme.white};
    width: 100%;
    border-radius: 5px;
  }
`

const TeamMemberNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: ${theme.white};
  a {
    color: ${theme.white};
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.2s ease-in;
    &:hover {
      color: ${theme.teal};
    }
  }
`

const TeamMember = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 1rem;

  @media only screen and (max-width: 390px) and (-webkit-device-pixel-ratio: 3) {
    width: 90%;
  }
`

const MemberRoleWrapper = styled.p`
  color: ${theme.yellow};
  line-height: 1.7rem;

  &:last-child {
    color: ${theme.silver};
  }
`

const Team = () => {
  return (
    <TeamContentWrapper backgroundColor="grey">
      <FakeAnchor id="team" />
      <Wrapper>
        <SectionTitle>The Council</SectionTitle>
        <TeamMembersWrapper>
          {teamMembers.map((member) => {
            return (
              <TeamMember key={member.name}>
                <TeamMemberImgWrapper>
                  <img src={member.img} />
                </TeamMemberImgWrapper>
                <TeamMemberNameWrapper>
                  <p>{member.name}</p>
                  <a
                    href={`https://twitter.com/${member.twitter}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </TeamMemberNameWrapper>
                <MemberRoleWrapper>{member.role}</MemberRoleWrapper>
                <MemberRoleWrapper>{member.subRole}</MemberRoleWrapper>
              </TeamMember>
            )
          })}
        </TeamMembersWrapper>
      </Wrapper>{" "}
    </TeamContentWrapper>
  )
}

export default Team
