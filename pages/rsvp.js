import { useState } from 'react'
import { Divider, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { Icon, CalendarIcon, ChatIcon } from '@chakra-ui/icons'
import PageWrapper from '../components/pageWrapper'
import NameSearch from '../components/nameSearch'
import InvitationSelect from '../components/invitationSelect'
import axios from 'axios'

export default function RSVP() {
  const [step, setStep] = useState('searchName')
  const [nameMatches, setNameMatches] = useState([])
  const [partyOptions, setPartyOptions] = useState([])
  const [partyMembers, setPartyMembers] = useState([])

  const handleNameSearch = async (nameMatches) => {
    try {
      if (nameMatches.length > 1) {
        const partyOptions = []
        for (const name of nameMatches) {
          await axios.get(`/api/parties/${name.id}`).then((res) => {
            partyOptions.push(res.data)
          })
        }
        setNameMatches(nameMatches)
        setPartyOptions(partyOptions)
        setStep('invitationSelect')
      } else {
        await axios.get(`/api/parties/${nameMatches[0].id}`).then((res) => {
          setPartyMembers(res.data[0])
        })
        setStep('partyRSVP')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const rsvpSteps = {
    searchName: <NameSearch handleNameSearch={handleNameSearch} />,
    invitationSelect: (
      <InvitationSelect nameMatches={nameMatches} partyOptions={partyOptions} />
    ),
  }

  return (
    <PageWrapper>
      <Heading as="h1">RSVP</Heading>
      <Divider />
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={6}
        padding="30px"
        maxWidth="600px"
        height="350px"
        textAlign="center"
      >
        {step === 'searchName' && (
          <>
            <Heading as="h2" size={{ base: '2xl', md: '3xl' }}>
              Arik & Chelsey
            </Heading>
            {/* TODO: Update Icons*/}
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
          </>
        )}

        {rsvpSteps[step]}
      </Stack>
    </PageWrapper>
  )
}
