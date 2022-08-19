// const { getAllParties } = require('../db/parties')
require('dotenv').config({ path: '.env.local' })
const { google } = require('googleapis')
const { getAllGuests } = require('../utils/db/queries')

/**
 * Updates a Google Spreadsheet with the guest list and their meal choices.
 * @return {string} Created Spreadsheet's URL.
 */
async function exportGuests() {
  // Setup google auth and spreadsheet api

  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  })

  // Create client
  const client = await auth.getClient()

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: 'v4', auth: client })

  const spreadsheetId = process.env.GUEST_SPREADSHEET_ID

  // Get metatdata for the spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  })

  console.log(
    'Successfully authorized and retrieved metadata for spreadsheet. 💁🏾‍♂️',
  )

  // Setup headers and rows containing guest data
  const rowHeaders = ['Name', 'Meal']
  const rows = await getAllGuests().then((guests) =>
    guests
      .filter((guest) => guest.isAttending === true)
      .map((guest) => [guest.name, guest.meal || 'kids']),
  )

  // Write row(s) to Google spreadsheet
  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range: 'Guest List',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [rowHeaders, ...rows],
    },
  })

  console.log('Spreadsheet updated! 🕺🏾')

  return metaData.data.spreadsheetUrl
}

exportGuests()
  .then((spreadsheetUrl) => {
    console.log(`✨ You can view the spreadsheet here: ${spreadsheetUrl}`)
  })
  .catch((error) => {
    console.log(error.message)
  })
