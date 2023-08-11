import { useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
const subscription = {
  mobile: {
    monthlyPrice: "₹100",
    videoQuality: "Good",
    resolution: "480p",
  },
  basic: {
    monthlyPrice: "₹200",
    videoQuality: "Good",
    resolution: "480p",
  },
  standard: {
    monthlyPrice: "₹500",
    videoQuality: "Better",
    resolution: "1080p",
  },
  premium: {
    monthlyPrice: "₹700",
    videoQuality: "Best",
    resolution: "4k+HDR",
  },
};

function Plans(props) {
  const navigate = useNavigate();
  const subscriptionHandler = (data) => {
    props.subscriptionHandler(data);
  };
  const nextHandler = () => {
    console.log("helllllll");
    navigate("/payment");
  };
  const mobile = () => {
    subscriptionHandler(subscription.mobile);
  };
  const basic = () => {
    subscriptionHandler(subscription.basic);
  };
  const standard = () => {
    subscriptionHandler(subscription.standard);
  };
  const premium = () => {
    subscriptionHandler(subscription.premium);
  };
  return (
    <div className="p-10">
      <div className="text-center">
        <h1 className="font-Poppins font-bold text-lg">
          Choose the right plan for you
        </h1>
      </div>
      <div className=" mt-10 flex flex-row w-[70%] ml-auto mr-auto gap-14 items-center">
        <div className="p-4 rounded-full bg-blue-900 ">
          <h1 className="text-white">Monthly</h1>
        </div>
        <div className="flex flex-row space-x-14 text-white">
          <h1 className={`p-10 bg-blue-900`} onClick={mobile}>
            Mobile
          </h1>
          <h1 className="p-10 bg-blue-300" onClick={basic}>
            Basic
          </h1>
          <h1 className="p-10 bg-blue-300" onClick={standard}>
            Standard
          </h1>
          <h1 className="p-10 bg-blue-300" onClick={premium}>
            Premium
          </h1>
        </div>
      </div>
      <div className=" mt-10 flex flex-row w-[70%] ml-auto mr-auto gap-14 items-center border-b-2">
        <div className="p-4">
          <h1 className="text-black">Monthly Price</h1>
        </div>
        <div className="flex flex-row space-x-20 text-white">
          <h1 className="p-10 text-black">
            {subscription.mobile.monthlyPrice}
          </h1>
          <h1 className="p-10 text-black">{subscription.basic.monthlyPrice}</h1>
          <h1 className="p-10 text-black">
            {subscription.standard.monthlyPrice}
          </h1>
          <h1 className="p-10 text-black">
            {subscription.premium.monthlyPrice}
          </h1>
        </div>
      </div>
      <div className=" mt-10 flex flex-row w-[70%] ml-auto mr-auto gap-14 items-center border-b">
        <div className="p-4">
          <h1 className="text-black">Video Quality</h1>
        </div>
        <div className="flex flex-row space-x-20 text-white">
          <h1 className="p-10 text-black">
            {subscription.mobile.videoQuality}
          </h1>
          <h1 className="p-10 text-black">
            {" "}
            {subscription.basic.videoQuality}
          </h1>
          <h1 className="p-10 text-black">
            {" "}
            {subscription.standard.videoQuality}
          </h1>
          <h1 className="p-10 text-black">
            {" "}
            {subscription.premium.videoQuality}
          </h1>
        </div>
      </div>
      <div className=" mt-10 flex flex-row w-[70%] ml-auto mr-auto gap-14 items-center border-b">
        <div className="p-4">
          <h1 className="text-black">Resolution</h1>
        </div>
        <div className="flex flex-row space-x-20 text-white">
          <h1 className="p-10 text-black">{subscription.mobile.resolution}</h1>
          <h1 className="p-10 text-black">{subscription.basic.resolution}</h1>
          <h1 className="p-10 text-black">
            {subscription.standard.resolution}
          </h1>
          <h1 className="p-10 text-black">{subscription.premium.resolution}</h1>
        </div>
      </div>
      <div className="text-center mt-3 p-1">
        <button
          className="bg-blue-900 p-1 w-40 text-white"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Plans;
