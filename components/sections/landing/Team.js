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

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  padding: 3rem 5.5rem;
  max-width: ${sizes.maxWidth};
  align-self: center;
  overflow-x: hidden;
  background: ${theme.lightGrey};

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0rem 2.5rem 2rem 2.5rem;
    margin-top: 5rem;
  }
`

const TeamMembersWrapper = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
    gap: 3rem;
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
    <ContentWrapper backgroundColor="lightGrey">
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
    </ContentWrapper>
  )
}

export default Team
