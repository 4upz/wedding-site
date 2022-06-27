import { Flex, Heading, Text } from '@chakra-ui/react'
import PageWrapper from '../components/pageWrapper'
import PartyMember from '../components/partyMember'

const roles = {
  groomsman: 'Groomsman',
  bestMan: 'Best Man',
  matron: 'Matron of Honor',
  maid: 'Bridesmaid',
  jrMaid: 'Jr. Bridesmaid',
  bridesMan: 'Bridesman',
  flower: 'Flower Girl',
}

const partyMembers = [
  { name: 'Charles Acy', role: roles.bestMan, isPrimary: true },
  { name: 'Sharae Curd', role: roles.matron, isPrimary: true },
  { name: 'Daniel Bryant', role: roles.groomsman },
  { name: 'Stephanie Bryant', role: roles.maid },
  { name: 'Charles Bryant', role: roles.groomsman },
  { name: 'Nikkie Bryant', role: roles.maid },
  { name: 'Jered Butler', role: roles.groomsman },
  { name: 'Precious Sogade', role: roles.maid },
  { name: 'Khayln Miller', role: roles.groomsman },
  { name: 'Soumya Pydipalli', role: roles.maid },
  { name: 'Blake Stewart', role: roles.groomsman },
  { name: 'Timothy Harris II', role: roles.bridesMan },
  { name: 'Chase Beverley', role: roles.groomsman },
  { name: 'Lacie Parham', role: roles.maid },
  { name: 'Steve Johnson Jr.', role: roles.groomsman },
  { name: 'Sara Chaudhry', role: roles.maid },
  { name: 'Victor Little', role: roles.groomsman },
  { name: 'Sydney Curd', role: roles.jrMaid },
  { name: 'Devon Tisdel', role: roles.groomsman },
  { name: 'Eryn Smith', role: roles.flower },
  { name: 'Eris Smith', role: roles.flower },
  { name: 'Skylar Curd', role: roles.flower },
  { name: 'Christina Curd', role: roles.flower },
  { name: 'Mia Rulli', role: roles.flower },
  { name: 'Chloe Bryant', role: roles.flower },
]

export default function BridalParty() {
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

  return (
    <PageWrapper>
      <Heading as="h1">Bridal Party</Heading>
      <Flex flexDir="column" alignItems="center" w="100%" gap={10}>
        {partyMembersGroups.map((member, index) => (
          <Flex flexDir={['column', 'row']} gap={[10, 0]} key={index}>
            <PartyMember {...member[0]} hasBorder />
            <PartyMember {...member[1]} />
          </Flex>
        ))}
      </Flex>
    </PageWrapper>
  )
}
