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

const InfernalsUprising = () => {
  return (
    <LoreWrapper>
      <LoreHeader>
        <SectionTitle>Infernals Uprising</SectionTitle>
        <Link href="/#lore">
          <LoreBackButton backgroundColor="yellow" fontSize="1rem">
            Back
          </LoreBackButton>
        </Link>
      </LoreHeader>
      <LoreInnerContentWrapper>
        <LoreDesc>
          Peace reigned across Omnia once the bloodthirsty Deities were locked
          behind the Gates of Tartarus. However, unbeknownst to the other
          Factions, the Infernals were plotting ways to free the mutant gods.
          The Infernals knew that in order to conquer the realm and defeat the
          other three factions, they would need the Deity Horde on their side.
        </LoreDesc>
        <LoreDesc>
          The Infernal Chief began his conquest to obtain the other three
          legendary weapons shortly after the imprisonment of The Horde. Using
          the Scythe of Death, he brought the Ancient Heroic back to the living.
          After 50,000 years of constant torment and torture, the Infernals
          eventually broke The Mapper and learned the location of the Blade of
          Omnia.
        </LoreDesc>
        <LoreDesc>
          Once the Blade was obtained, the Infernals ventured deep into the
          ocean to face the Kraken. The beast, however, was no match for the
          power of the Blade, and was left paralyzed by lightning long enough
          for the Infernals to snatch the Trident of Atlin. Now possessing The
          Scythe, The Trident, and The Blade, the Infernals sought out the
          Legendary Draco Staff. In order to obtain the staff, the Infernals
          needed to gain access to the Enchanted Forest and take it from the
          Mage Supreme. Using the Blade, the Infernals tricked a member of the
          Mystic faction found in the mainland to gain access to the Enchanted
          Forest.
        </LoreDesc>
        <LoreDesc>
          The Infernal Chief began his conquest to obtain the other three
          legendary weapons shortly after the imprisonment of The Horde. Using
          the Scythe of Death, he brought the Ancient Heroic back to the living.
          After 50,000 years of constant torment and torture, the Infernals
          eventually broke The Mapper and learned the location of the Blade of
          Omnia.
        </LoreDesc>
        <LoreDesc>
          Once inside the Enchanted Forest, the Infernal Chief snuck into the
          Super Sages Castle and slayed him while he slept, stealing the Draco
          staff.
        </LoreDesc>
        <LoreDesc>
          With all four weapon keys in their possession, the Infernals made
          their way to the Gates of Tartarus. It had been a long 90,000 years,
          but finally, the Infernals were able to open the Gates and free the
          Deity Horde.
        </LoreDesc>
        <LoreDesc>
          Following the release, the Infernal Chief challenged the Deity leader
          to a duel, wherein the winner would take control of the other’s
          forces. The Infernal Chief tricked the Deity leader with the Blade of
          Omnia and stabbed him in the back with the Trident of Atlin. With the
          death of their leader, The Horde was then under the control of the
          Infernal Chief.
        </LoreDesc>
      </LoreInnerContentWrapper>
    </LoreWrapper>
  )
}

export default InfernalsUprising
