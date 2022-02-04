import React from "react"
import Link from "next/link"
import {
  SectionTitle,
  LoreWrapper,
  LoreDesc,
  LoreInnerContentWrapper,
  LoreHeader,
  LoreBackButton,
} from "../components/layout/SharedComponents"

const OmniaAccord = () => {
  return (
    <LoreWrapper>
      <LoreHeader>
        <SectionTitle>The Omnia Accord</SectionTitle>
        <Link href="/#lore">
          <LoreBackButton backgroundColor="yellow" fontSize="1rem">
            Back
          </LoreBackButton>
        </Link>
      </LoreHeader>
      <LoreInnerContentWrapper>
        <LoreDesc>
          During the Great Omniwar, each faction elected a leader to lead their
          armies. Following the vanquishing of the Infernals to the Forgotten
          Realm, the Leaders of the other three Factions met at what came to be
          known as ‘The Omnia Accord.’
        </LoreDesc>
        <LoreDesc>
          During this meeting, it was agreed upon that the remaining three
          factions would put all their power into their emblems and surrender
          them—including the powers taken from the vanquished Infernals. These
          emblems were given to a single entity for safekeeping.
        </LoreDesc>
        <LoreDesc>
          Little is known about this entity, as all scrolls detailing his life
          and appearance have either been stolen or destroyed through time.
          However, whispered rumors claim his name to be The Forger. Holding the
          entirety of power of each faction, The Forger banished each faction
          from Omnia and destroyed their powerful emblems, never to be seen
          again…or so we thought.
        </LoreDesc>
      </LoreInnerContentWrapper>
    </LoreWrapper>
  )
}

export default OmniaAccord
