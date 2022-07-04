import { useState } from 'react'
import axios from 'axios'
import { Divider, Heading, Stack } from '@chakra-ui/react'
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

  const sortGuestsWithUserFirst = (user, party) => {
    const guestsExcludingUser = party.guests.filter(
      (guest) => guest.name !== user,
    )
    const guestUser = party.guests.find((guest) => guest.name === user)
    return [guestUser, ...guestsExcludingUser]
  }

  const handleNameSearch = async (nameMatches) => {
    try {
      if (nameMatches.length > 1) {
        const partyOptions = []
        for (const name of nameMatches) {
          await axios.get(`/api/parties?guestId=${name.id}`, {headers: {
            'Content-Type': 'application/json',
            }}).then((res) => {
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
            const party = res.data
            const user = nameMatches[0].name
            setParty({
              user,
              partyDetails: {
                ...party,
                guests: sortGuestsWithUserFirst(user, party),
              },
            })
          })
        setStep('partyRSVP')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleUserSelect = (user) => {
    // Order party with user first in array
    const partyWithUser = partyOptions.find((option) =>
      option.guests.some((guest) => guest.name === user),
    )

    setParty({
      user: user,
      partyDetails: {
        ...partyWithUser,
        guests: sortGuestsWithUserFirst(user, partyWithUser),
      },
    })

    console.log(party.partyDetails)

    setStep('partyRSVP')
  }

  const handleRSVPSubmit = async (formPartyData) => {
    const rsvpData = {
      hasResponded: true,
      guests: party.partyDetails.guests.map((guest) => {
        let { name } = guest
        const { isAttending, meal } = formPartyData[name]
        if (name === 'Guest' && formPartyData.guestName.trim()) {
          name = formPartyData.guestName.trim()
        }
        return { name, isAttending: isAttending === 'true', meal, id: guest.id }
      }),
    }
    axios.put(`/api/parties/${party.partyDetails.id}`, rsvpData).then((res) => {
      console.log(res.data)
      // TODO: Set toast on success
      const user = party.user
      handleCancel(null, 'confirmation')
      setParty({
        user,
        partyDetails: rsvpData,
      })
    })
  }

  const handleCancel = (event, alternateStep) => {
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
