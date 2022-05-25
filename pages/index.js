import { Flex, Stack, Heading, Button } from '@chakra-ui/react'
import Image from 'next/image'
import homePic from '../public/us.jpg'

export default function Home() {
  return (
    <Flex gap={50} py={10} justify="space-between">
      <Image
        src={homePic}
        alt="Picture of the couple"
        width={552}
        height={782}
      />
      <Stack justify="center" alignItems="center" w={600}>
        <Heading as="h1">Arik & Chelsey</Heading>
        <Heading size="md">September 4th, 2022</Heading>
        <Button>RSVP</Button>
      </Stack>
    </Flex>
  )
}
