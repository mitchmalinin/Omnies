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

const ImprisonedDeities = () => {
  return (
    <LoreWrapper>
      <LoreHeader>
        <SectionTitle>The Imprisoned Deities</SectionTitle>
        <Link href="/#lore">
          <LoreBackButton backgroundColor="yellow" fontSize="1rem">
            Back
          </LoreBackButton>
        </Link>
      </LoreHeader>
      <LoreInnerContentWrapper>
        <LoreDesc>
          Little is known about the mutated faction of gods that emerged long
          ago. Eventually earning the moniker “the Deities,” they were cruel
          creatures that killed for sport. Their army, known as The Horde, was
          the largest force in the realm.
        </LoreDesc>
        <LoreDesc>
          When The Horde began spilling into the other factions’ territories,
          the Infernals, Heroics, Mystics, and Atlins managed to push The Horde
          back and locked them inside a hidden realm deep inside the enchanted
          forest, contained behind the Gates of Tartarus.
        </LoreDesc>
        <LoreDesc>
          In order to ensure The Horde remained locked away, each faction’s
          master blacksmith forged a legendary weapon key, ensuring the Gates of
          Tartarus could only be opened when all four of the legendary weapon
          keys acted in unison.
        </LoreDesc>
        <LoreDesc>
          The Mystics forged the legendary Draco Staff, which granted the user
          teleportation and served as the key to access the realm of the Gates
          of Tartarus. They entrusted this staff to the Super Sage: the oldest
          and most highly regarded wizard in the enchanted forest.
        </LoreDesc>
        <LoreDesc>
          The Atlins forged the legendary Trident of Atlin, which possessed the
          power to control all the creatures of the deep. It was hidden in the
          deepest part of the ocean and was put under the watch of the Kraken.
        </LoreDesc>
        <LoreDesc>
          The Heroics forged the Blade of Omnia, which granted the wielder the
          power to control lightning . It was buried deep within Mt. Omnia,
          which was home to an ever-changing landscape. The burial location was
          entrusted to only one member of the Heroic faction, the Ancient Heroic
          known as ‘The Mapper.’ However, he departed from Omnia thousands of
          years ago, taking with him the precise location of the blade’s tomb.
        </LoreDesc>
        <LoreDesc>
          The Infernals forged the Scythe of Death. Containing the power to
          bring back the departed, it was passed down from Chief to Chief to
          ensure only the strongest amongst the Infernals could wield the
          weapon.
        </LoreDesc>
      </LoreInnerContentWrapper>
    </LoreWrapper>
  )
}

export default ImprisonedDeities
