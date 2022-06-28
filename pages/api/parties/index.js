import db from '../../../utils/db'

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
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
      break
    default:
      res.status(405).end()
      break
  }
}
