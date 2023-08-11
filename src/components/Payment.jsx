import React from "react";
import StripeCheckout from "react-stripe-checkout";
function Payment(props) {
  const pay = props.subscription.monthlyPrice.slice(1) + "00";
  console.log(pay);
  const onToken = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen bg-blue-900 flex items-center justify-center">
      <StripeCheckout
        token={onToken}
        currency="Inr"
        amount={pay}
        stripeKey="pk_test_51NdCS7SAJcWiO3TrhCASEQ7nBEW2SR0eZB8BLukHgmoeSdqvlJRIHUVTY7XvZMrKOKnTCnZvpJZkI4mK39VECOLv00PMHFG0Q7"
      />
    </div>
  );
}

export default Payment;
