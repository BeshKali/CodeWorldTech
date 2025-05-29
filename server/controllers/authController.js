const User = require("../models/userModel");
const admin = require("firebase-admin");

// Firebase Admin init
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
});

exports.registerOrLogin = async (req, res) => {
  try {
    const { idToken, username, role } = req.body;
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, email } = decodedToken;

    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        email,
        username,
        role,
      });
    }

    res.status(200).json({ message: "Authenticated", user });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Unauthorized" });
  }
};
