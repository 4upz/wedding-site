import db from '../../../utils/db'

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      if (req.query.name) {
        await getGuestsByName(req, res)
      } else {
        await getAllGuests(req, res)
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
  }
}

const getAllGuests = async (req, res) => {
  try {
    const guests = await db.collection('guests').get()
    const guestsData = guests.docs.map((doc) => doc.data())
    res.status(200).json(guestsData)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getGuestsByName = async (req, res) => {
  const name = req.query.name.toLowerCase()

  try {
    // Search for guests in firestore with name containing the query string
    const guests = await db.collection('guests').get()
    const guestsData = guests.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    const matchingGuests = guestsData.filter((guest) =>
      guest.name.toLowerCase().includes(name),
    )
    res.status(200).json(matchingGuests)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
