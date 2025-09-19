import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getIdToken,
} from "firebase/auth";
import { auth } from "./firebase";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Firebase: Register new user + return ID token
const loginWithFirebase = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const token = await getIdToken(userCredential.user);
  return token;
};

// Firebase: Login existing user + return ID token
const loginUserWithFirebase = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const token = await getIdToken(userCredential.user);
  return token;
};

// Backend: Register user to MongoDB with role
const registerUser = async (token, role) => {
  try {
    const res = await axios.post(
      `${API}/auth`,
      { idToken: token, role }, // Ensure 'idToken' is sent here, as expected by backend
      { headers: { "Content-Type": "application/json" } }
    );
    return res.data;
  } catch (err) {
    console.error("Error registering user:", err.response ? err.response.data : err.message);
    throw new Error("Failed to register user.");
  }
};

// Backend: Login user to MongoDB (ensure account exists)
const loginUser = async (token) => {
  try {
    const res = await axios.post(
      `${API}/auth`,
      { idToken: token }, // Ensure 'idToken' is sent here, as expected by backend
      { headers: { "Content-Type": "application/json" } }
    );
    return res.data;
  } catch (err) {
    console.error("Error logging in user:", err.response ? err.response.data : err.message);
    throw new Error("Failed to login user.");
  }
};

const authService = {
  loginWithFirebase,
  loginUserWithFirebase,
  registerUser,
  loginUser,
};

export default authService;
