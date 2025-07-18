const admin = require("firebase-admin");

const serviceAccount = require("./firebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const lugarCollection = db.collection("Lugares");

module.exports = { db, lugarCollection };
