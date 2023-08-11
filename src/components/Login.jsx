import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

function Login(props) {
  const navigate = useNavigate();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [remember, setRemeber] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const x = await signInWithEmailAndPassword(auth, email, password);
      console.log(x);
      navigate("/plans");
      props.userHandler({ uid: x.user.uid });
    } catch (err) {
      console.log(err);
    }
    console.log("log in");
  };

  return (
    <div className="h-screen bg-blue-900 flex items-center justify-center">
      <form
        className="bg-white h-96 w-96 flex flex-col rounded-2xl"
        onSubmit={handleSubmit}
      >
        <div className="ml-auto mr-auto">
          <h1 className="font-bold tracking-wide mt-6 font-Poppins ">
            Login to your account
          </h1>
        </div>
        <div className="flex flex-col mt-5 w-72 ml-auto mr-auto ">
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
            Login
          </button>
        </div>
        <span className="text-sm text-center mt-3">
          New to My App? <Link to="/">Sign up</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
