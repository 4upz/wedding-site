import db from '../../../utils/db'

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getPartyByGuestId(req, res)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
  }
}

const getPartyByGuestId = async (req, res) => {
  const { guestId } = req.query
  try {
    const party = await db
      .collection('parties')
      .where('guests', 'array-contains', guestId)
      .get()
    const partyData = party.docs.map((doc) => doc.data())[0]
    // Get document data and fetch referenced guest document data for each guest in the party
    const guests = []
    for (const guest of partyData.guests) {
      const guestData = await db.doc(`guests/${guest}`).get()
      guests.push(guestData.data())
    }
    res.status(200).json({ ...partyData, guests })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
