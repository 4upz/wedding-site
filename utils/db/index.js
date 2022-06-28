import admin from 'firebase-admin'
// import { getAnalytics } from 'firebase/analytics'
import serviceAccount from './serviceAccountKey.json'

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  } catch (error) {
    console.log('Firebase admin initialization error: ', error.stack)
  }
}

// const analytics = getAnalytics(admin.apps[0])

export default admin.firestore()
