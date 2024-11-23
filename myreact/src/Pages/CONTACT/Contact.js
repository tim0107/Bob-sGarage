import React from "react";
import Footer from "../../ComponentApp/Footer";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <h2 className="h2Contact">
        Welcome to Bob’s Garage, your trusted local automotive service center.
        Founded over 20 years ago by Bob himself, our garage started as a small
        operation with a single mechanic and a passion for delivering reliable,
        top-notch car repairs. What began as a humble workshop has grown into a
        full-service garage renowned for its expertise, transparency, and
        commitment to customer satisfaction.
        <br />
        At Bob’s Garage, we believe in old-fashioned service combined with
        modern technology. From routine maintenance to complex engine
        diagnostics, our experienced mechanics, led by Tim, our head mechanist,
        ensure that every vehicle is treated with care and precision. Our goal
        has always been simple: to provide the best service possible at an
        affordable price. Over the years, we’ve earned the trust of our
        community and have become a go-to destination for all automotive needs.
        <br />
        Whether it’s a routine check-up or an urgent repair, Bob’s Garage is
        here to keep you on the road.
      </h2>
      <Footer />
    </div>
  );
}
