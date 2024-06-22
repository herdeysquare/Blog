import React from "react";
import right from "../Images/thao.jpg";

const ContactUs = () => {
  return (
    <>
      <div style={{ display: "flex", paddingInline: "5vw" }} id="bg">
        <div
          className="left"
          style={{
            flex: "1.5",
            display: "flex",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <img src={right} alt="" style={{ width: "40vw" }} />
        </div>

        <div
          className="right"
          style={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <h1 className="h1">Contact Us</h1>
          <p>
            <strong>
              <h3>
                You can reach us anytime via 📧support@beau_tified*sales.com
              </h3>
            </strong>
          </p>
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
              padding: "10px",
            }}
          >
            <input
              type="text"
              placeholder="First Name"
              required
              style={{ padding: "10px", width: "20vw", margin: "10px" }}
            />
            <input
              type="text"
              placeholder="Last Name"
              style={{ padding: "10px", width: "20vw", margin: "10px" }}
            />
            <input
              type="text"
              placeholder="Email Address"
              required
              style={{ padding: "10px", width: "20vw", margin: "10px" }}
            />
            <textarea
              type="text"
              placeholder="Type your message here"
              required
              maxLength={500}
              style={{ padding: "30px" }}
            />
          </form>
          <button
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              borderRadius: "10px",
            }}
            id="shop-button"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
