import { Flex, Heading, Text } from '@chakra-ui/react'

export default function StoryTab({ partner }) {
  return (
    <Flex {...styles.container}>
      <Heading as="h2" size="lg">
        The day I first saw {partner}...
      </Heading>
      <Heading as="h3">♡</Heading>
      <Text>
        I was able to easily recognize his physical attractiveness, but had no idea how special he would be to me.
      It all started as a friendship as Arik and I began to uncover how much we had in common such as valuing family, having similar likes on SoundCloud, similar majors, and (eventually) being a part of the same campus groups.
      Before I knew it we were talking and seeing each other every day. 
      </Text>
      <Text>
        He quickly became the person I wanted to share everything with, but I continued to try and play it cool - unconvincingly claiming we were just good friends.
      This didn’t faze Arik though. He continued to be present and showed me how things would be if we were dating. 
      His actions and determination made it clear that the connection we shared was undeniable.
      We, even though Arik will inaccurately say I, made it official on December 1, 2015.
      </Text>
      <Text>
        Since that moment things have only gotten better.
      Over the years he has surprised me at open mic nights, written songs about me, coordinated private dinners, and much more; with the cherry on top being the execution of my dream proposal in Hawaii and soon it will be our dream wedding.
      </Text>
    </Flex>
  )
}

const styles = {
  container: {
    justifyContent: 'center',
    flexDir: 'column',
    gap: '20px',
    maxWidth: '1200px',
    padding: { base: '20px 10px', md: '50px 100px' },
    boxShadow: { md: '0px 4px 28px rgba(0, 0, 0, 0.25)' },
    sx: {
      p: {
        textAlign: 'left',
      },
    },
  },
}
