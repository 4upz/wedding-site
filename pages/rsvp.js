import { useState } from 'react'
import axios from 'axios'
import { Divider, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import PageWrapper from '../components/pageWrapper'
import NameSearch from '../components/nameSearch'
import InvitationSelect from '../components/invitationSelect'
import PartyRSVP from '../components/partyRSVP'
import EventInfo from '../components/eventInfo'
import RSVPConfirmation from '../components/rsvpConfirmation'

export default function RSVP() {
  const [step, setStep] = useState('searchName')
  const [nameMatches, setNameMatches] = useState([])
  const [partyOptions, setPartyOptions] = useState([])
  const [party, setParty] = useState({})

  const handleNameSearch = async (nameMatches) => {
    try {
      if (nameMatches.length > 1) {
        const partyOptions = []
        for (const name of nameMatches) {
          await axios.get(`/api/parties?guestId=${name.id}`).then((res) => {
            partyOptions.push(res.data)
          })
        }
        setNameMatches(nameMatches)
        setPartyOptions(partyOptions)
        setStep('invitationSelect')
      } else {
        await axios
          .get(`/api/parties?guestId=${nameMatches[0].id}`)
          .then((res) => {
            setParty({ user: nameMatches[0].name, partyDetails: res.data })
          })
        setStep('partyRSVP')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleUserSelect = (user) => {
    setParty({
      user: user,
      partyDetails: partyOptions.find((option) =>
        option.guests.some((guest) => guest.name === user),
      ),
    })
    setStep('partyRSVP')
  }

  const handleRSVPSubmit = async (formPartyData) => {
    console.log(formPartyData)
    const rsvpData = {
      hasResponded: true,
      guests: party.partyDetails.guests.map((guest) => {
        const { name } = guest
        const { isAttending, meal } = formPartyData[name]
        return { name, isAttending, meal, id: guest.id }
      }),
    }
    axios.put(`/api/parties/${party.partyDetails.id}`, rsvpData).then((res) => {
      console.log(res.data)
      // Set toast on success
      const user = party.user
      handleCancel('confirmation')
      setParty({
        user,
        partyDetails: rsvpData,
      })
    })
  }

  const handleCancel = (alternateStep) => {
    setStep(alternateStep || 'searchName')
    setParty({})
    setPartyOptions([])
    setNameMatches([])
  }

  const rsvpSteps = {
    searchName: <NameSearch handleNameSearch={handleNameSearch} />,
    invitationSelect: (
      <InvitationSelect
        nameMatches={nameMatches}
        partyOptions={partyOptions}
        handleUserSelect={handleUserSelect}
        handleCancel={handleCancel}
      />
    ),
    partyRSVP: (
      <PartyRSVP
        party={party}
        handleSubmit={handleRSVPSubmit}
        handleCancel={handleCancel}
      />
    ),
    confirmation: <RSVPConfirmation party={party} />,
  }

  return (
    <PageWrapper>
      <Heading as="h1">RSVP</Heading>
      <Divider />
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={6}
        paddingx="30px"
        maxWidth="600px"
        textAlign="center"
      >
        {step === 'searchName' && (
          <>
            <Heading as="h2" size={{ base: '2xl', md: '3xl' }}>
              Arik & Chelsey
            </Heading>
            <EventInfo />
          </>
        )}

        {rsvpSteps[step]}
      </Stack>
    </PageWrapper>
  )
}
