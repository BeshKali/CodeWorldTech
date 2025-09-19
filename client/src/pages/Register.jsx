import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Customer"); // Default to avoid "" issues
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const idToken = await getIdToken(user);

      const res = await fetch("http://localhost:5000/api/auth", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, username, role }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Registration successful!");
        console.log("User registered:", data.user);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setError(data.error || "Backend error");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        {/* input fields... */}
      </form>
      {success && <p className="text-green-600 mt-2">{success}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default Register;
