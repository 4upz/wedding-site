import { Flex, Heading, Text } from '@chakra-ui/react'

export default function PartyMember({ name, role, isPrimary, hasBorder }) {
  const border = hasBorder ? ['none', 'solid 3px #E6DACE'] : 'none'
  let nameFont
  let roleFont = '16px'
  if (isPrimary) {
    nameFont = {
      size: 'lg',
      letterSpacing: '2px',
    }
    roleFont = '20px'
  }

  return (
    <Flex {...styles.partyItem} borderRight={border}>
      <Heading {...styles.name} {...nameFont}>
        {name}
      </Heading>
      <Text fontSize={roleFont}>{role}</Text>
    </Flex>
  )
}

const styles = {
  name: {
    as: 'h2',
    textTransform: 'uppercase',
    size: 'md',
    letterSpacing: '2px',
  },
  partyItem: {
    flexDir: ['column'],
    alignItems: 'center',
    justifyContent: 'center',
    p: { md: '5px', lg: '20px' },
    w: { base: '250px', lg: '400px' },
  },
}
