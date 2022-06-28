import db from '../../../utils/db'

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      if (req.query.guestId) {
        await getPartyByGuestId(req, res)
      } else {
        await getAllParties(req, res)
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end()
      break
  }
}

const getAllParties = async (req, res) => {
  try {
    const parties = await db.collection('parties').get()
    const partiesData = []

    // Get document data and fetch referenced guest document data for each guest in the party
    for (const doc of parties.docs) {
      const partyData = doc.data()
      const guests = []
      for (const guest of partyData.guests) {
        const guestData = await db.doc(`guests/${guest}`).get()
        guests.push(guestData.data())
      }
      partiesData.push({ ...partyData, guests })
    }

    const partiesDataResolved = await Promise.all(partiesData)
    res.status(200).json(partiesDataResolved)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const getPartyByGuestId = async (req, res) => {
  const { guestId } = req.query
  try {
    const party = await db
      .collection('parties')
      .where('guests', 'array-contains', guestId)
      .get()
    const partyData = party.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))[0]
    // Get document data and fetch referenced guest document data for each guest in the party
    const guests = []
    for (const guest of partyData.guests) {
      const guestData = await db.doc(`guests/${guest}`).get()
      guests.push({ ...guestData.data(), id: guestData.id })
    }
    res.status(200).json({ ...partyData, guests })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
