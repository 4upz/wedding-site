import { Flex, Heading } from '@chakra-ui/react'
import PageWrapper from '../components/pageWrapper'
import PartyMember from '../components/partyMember'
import { partyMembers } from '../data/bridalParty'

export const getStaticProps = async () => {
  // Reduce every two party members into groups of two
  const partyMembersGroups = partyMembers.reduce(
    (groups, partyMember, index) => {
      if (index % 2 === 0) {
        groups.push([partyMember])
      } else {
        groups[groups.length - 1].push(partyMember)
      }
      return groups
    },
    [],
  )
  return {
    props: {
      party: partyMembersGroups,
    },
  }
}

export default function BridalParty({ party }) {
  return (
    <PageWrapper>
      <Heading as="h1">Bridal Party</Heading>
      <Flex flexDir="column" alignItems="center" w="100%" gap={10}>
        {party.map((member, index) => (
          <Flex flexDir={['column', 'row']} gap={[10, 0]} key={index}>
            <PartyMember {...member[0]} hasBorder />
            <PartyMember {...member[1]} />
          </Flex>
        ))}
      </Flex>
    </PageWrapper>
  )
}
