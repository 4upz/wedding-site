const csv = require('csvtojson')

function initializeDb() {
  const admin = require('firebase-admin')
  const serviceAccount = require('../db/serviceAccountKey.json')

  if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      })
    } catch (error) {
      console.log('Firebase admin initialization error: ', error.stack)
    }
  }

  return admin.firestore()
}

// IMPORTANT: Needs to be ran from the root directory of the project
async function run() {
  const db = initializeDb()
  const batch = db.batch()

  const csvFilePath = './data/guests.csv'
  const parsedData = await csv().fromFile(csvFilePath)

  let guestCount = 0
  parsedData.map((data) => {
    const { Name, Party } = data
    const guestData = {
      name: Name,
      isAttending: false,
      meal: '',
    }

    const guestRef = db.collection('guests').doc()
    batch.set(guestRef, guestData)
    guestCount++

    const partMembers = [guestRef.id]

    if (Party) {
      const otherGuests = Party.split(', ')
      otherGuests.map((guestName) => {
        const data = {
          name: guestName,
          isAttending: false,
          meal: '',
        }
        const otherGuestRef = db.collection('guests').doc()
        batch.set(otherGuestRef, data)
        guestCount++

        partMembers.push(otherGuestRef.id)
      })
    }

    const partyRef = db.collection('parties').doc()
    batch.set(partyRef, {
      hasResponded: false,
      guests: partMembers,
    })
  })

  await batch.commit()
  console.log(`Seed successful! Added ${guestCount} guests to the database`)
}

run().catch(console.dir)
