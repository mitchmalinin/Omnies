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

const GreatOmniwar = () => {
  return (
    <LoreWrapper>
      <LoreHeader>
        <SectionTitle>The Great Omniwar</SectionTitle>
        <Link href="/#lore">
          <LoreBackButton backgroundColor="yellow" fontSize="1rem">
            Back
          </LoreBackButton>
        </Link>
      </LoreHeader>
      <LoreInnerContentWrapper>
        <LoreDesc>
          The Great Omniwar was prompted by the Infernals using The Horde in an
          attempt to enslave the realm of Omnia. The Omniwar raged for one
          hundred years, until finally, the Mystics, Atlins, and Heroics were
          able to stand as a united force and vanquish the Infernals deep into
          the Forgotten Realm.
        </LoreDesc>
        <LoreDesc>
          The end of the War, though a moment of respite for the factions,
          brought with it much grief. Thousands laid dead and large swatches of
          land would take many centuries to recover.
        </LoreDesc>
        <LoreDesc>
          Vowing to keep another war from emerging in the future, the Atlins,
          Heroics, and Mystics signed a Treaty known as the Omnia Accord. This
          Treaty gave the Heroics control of the mainland to maintain peace and
          help them rebuild the realm following the destruction heralded by the
          Infernals.
        </LoreDesc>
        <LoreDesc>
          The Atlins retreated deep into the sea while the Mystics returned to
          the Enchanted Forest where they have lived in peace and harmony until
          now.
        </LoreDesc>
      </LoreInnerContentWrapper>
    </LoreWrapper>
  )
}

export default GreatOmniwar
