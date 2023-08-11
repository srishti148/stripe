/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useState, React, useCallback, useEffect } from "react";
import Login from "./components/Login";
import Plans from "./components/Plans";
import Signup from "./components/Signup";
import Payment from "./components/Payment";

function App() {
  const [user, setUser] = useState({
    uid: "",
    name: "",
  });
  const [subscription, setSubscription] = useState({
    monthlyPrice: "",
    videoQuality: "",
    resolution: "",
  });
  const subscriptionHandler = (data) => {
    console.log(data);
    setSubscription((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };
  const userHandler = (data) => {
    console.log(data);
    setUser((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };
  const fetchData = async () => {
    const yi = await getDocs(
      collection(db, `userData/${user.uid}/userDetails/`)
    );
    const z = yi.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log("hello app", z);
    setUser((prevState) => {
      return {
        ...prevState,
        name: z[0].name,
      };
    });
  };

  useEffect(() => {
    if (user.uid !== "") {
      fetchData();
    }
  }, [user.uid]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login userHandler={userHandler} />} />
        <Route
          path="/plans"
          element={
            <Plans
              userHandler={userHandler}
              subscriptionHandler={subscriptionHandler}
            />
          }
        />
        <Route
          path="/payment"
          element={<Payment subscription={subscription} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
