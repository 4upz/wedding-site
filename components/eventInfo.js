import { HStack, Text, VStack } from '@chakra-ui/react'
import { CalendarIcon, ChatIcon, Icon } from '@chakra-ui/icons'

// TODO: Update Icons
export default function EventInfo() {
  return (
    <VStack textAlign="center">
      <HStack>
        <Icon as={CalendarIcon} />
        <Text>September 4th, 2022</Text>
      </HStack>
      <HStack>
        <Icon as={ChatIcon} />
        <Text>Lago Custom Events | Cleveland, OH</Text>
      </HStack>
    </VStack>
  )
}
