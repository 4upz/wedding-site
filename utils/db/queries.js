const db = require('./index')

async function getAllParties() {
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
    return partiesDataResolved
  } catch (error) {
    console.log(error.message)
  }
}

async function getAllGuests() {
  try {
    const guests = await db.collection('guests').get()
    return guests.docs.map((doc) => doc.data())
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getAllParties,
  getAllGuests,
}
