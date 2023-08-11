/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup(props) {
  const navigate = useNavigate();
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [remember, setRemeber] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const x = await createUserWithEmailAndPassword(auth, email, password);
      if (x.user.uid !== undefined) {
        console.log("hello");
        addDoc(collection(db, `userData/${x.user.uid}/userDetails/`), {
          name: name,
        });
        props.userHandler({ name: name, uid: x.user.uid });
      }
      navigate("/plans");
    } catch (err) {
      console.log(err);
    }
    console.log("sign in");
  };

  return (
    <div className="h-screen bg-blue-900 flex items-center justify-center">
      <form
        className="bg-white h-96 w-96 flex flex-col rounded-2xl items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="ml-auto mr-auto">
          <h1 className="font-bold tracking-wide mt-6 font-Poppins ">
            Create Account
          </h1>
        </div>
        <div className="flex flex-col mt-5 w-72 ml-auto mr-auto ">
          <label htmlFor="name" className="font-Poppins font-bold">
            Name
          </label>
          <input
            type="text"
            className="mt-2 border rounded-sm h-8 p-2 outline-none "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="font-Poppins font-bold mt-2">
            Email
          </label>
          <input
            type="text"
            className="mt-2 border rounded-sm h-8 p-2 outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="font-Poppins font-bold">
            Password
          </label>
          <input
            type="password"
            className="mt-2 border rounded-sm h-8 p-2 outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="font-Poppins font-bold flex flex-row mt-2 gap-2">
            <input
              type="checkbox"
              value={remember}
              onChange={(e) => setRemeber(e.target.value)}
            />
            Remember Me
          </span>
          <button className="border mt-1 font-Poppins font-medium p-1 bg-blue-900 text-white">
            Sign Up
          </button>
          {/* <span className="text-sm ">Already have an account? </span> */}
        </div>
        <span className="text-sm text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
