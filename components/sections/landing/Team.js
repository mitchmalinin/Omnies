import React from "react"
import {
  SectionTitle,
  MoreButton,
  ContentWrapper,
} from "../../layout/SharedComponents"
import styled from "styled-components"
import { theme } from "../../palette"
import { teamMembers } from "../../utils/staticData"

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  padding: 5rem 5.5rem;
  max-width: 1920px;
  align-self: center;
  overflow-x: hidden;
  background: ${theme.lightGrey};

  overflow: hidden;
  padding-top: 220px;
  padding-bottom: 300px;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    padding: 0 2.5rem;
    margin-top: 5rem;
  }
`

const TeamMembersWrapper = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const TeamMemberImgWrapper = styled.div`
  img {
    border: 1px solid ${theme.white};
    width: 100%;
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
    font-size: 1rem;
  }
`

const TeamMember = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 1rem;
`

const MemberRoleWrapper = styled.p`
  color: ${theme.white};
`

const Team = () => {
  return (
    <ContentWrapper backgroundColor="lightGrey">
      <Wrapper>
        <SectionTitle id="team" textAlignEnd>
          The Council
        </SectionTitle>
        <TeamMembersWrapper>
          {teamMembers.map((member) => {
            return (
              <TeamMember key={member.name}>
                <TeamMemberImgWrapper>
                  <img src={member.img} />
                </TeamMemberImgWrapper>
                <TeamMemberNameWrapper>
                  <p>{member.name}</p>
                  <a href={member.twitter} target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </TeamMemberNameWrapper>
                <MemberRoleWrapper>{member.role}</MemberRoleWrapper>
              </TeamMember>
            )
          })}
        </TeamMembersWrapper>
      </Wrapper>{" "}
    </ContentWrapper>
  )
}

export default Team
