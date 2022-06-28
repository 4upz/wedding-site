import db from '../../../utils/db'

export default async (req, res) => {
  switch (req.method) {
    case 'PUT':
      updateParty(req, res)
      break
    default:
      res.setHeader('Allow', ['PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

const updateParty = async (req, res) => {
  const { id } = req.query
  const partyData = req.body
  try {
    const partyStatus = {
      hasResponded: true,
      guests: partyData.guests.map((guest) => guest.id),
    }
    await db.doc(`parties/${id}`).update(partyStatus)
    const partyMemberUpdates = partyData.guests.map((guest) => {
      const { name, meal, isAttending, id } = guest
      return db.doc(`guests/${id}`).update({ name, meal, isAttending })
    })
    await Promise.all(partyMemberUpdates)
    res.status(200).json({ message: 'Party updated' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
