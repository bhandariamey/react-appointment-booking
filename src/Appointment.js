import React, { useState } from "react";
import "./styles.css";

export default function Appointment(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [responseStatus, setResponseStatus] = useState("");

  function resetForm(e) {
    // console.log("reset form called");
    setFirstName("");
    setLastName("");
    setEmail("");
    setDoctor("");
    setLocation("");
    setDate("");
    setResponseStatus("");
  }

  function getFirstName(e) {
    setFirstName(e.target.value);
  }

  function getLastName(e) {
    setLastName(e.target.value);
  }

  function getEmail(e) {
    setEmail(e.target.value);
  }

  function getDoctor(e) {
    setDoctor(e.target.value);
  }

  function getLocation(e) {
    setLocation(e.target.value);
  }

  function getDateTime(e) {
    setDate(e.target.value);
  }

  async function formSubmitted(e) {
    e.preventDefault();
    const response = await postData();

    if (response.ok) {
      // console.log("response was okay");
      setResponseStatus("Success");
    } else {
      //  console.log("response was failed");
      setResponseStatus("Error");
    }
  }

  async function postData() {
    // console.log("Post data called");
    const postAPI = "https://jsonplaceholder.typicode.com/posts";
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      doctor: doctor,
      location: location,
      date: date
    };

    const response = await fetch(postAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return response;
  }

  return (
    <div>
      {/* {console.log("Return was called")}
      {console.log("responseStatus = " + responseStatus)} */}

      <h1 className={responseStatus === "Success" ? "" : "hidedets"}>
        Appointment Booked successfully!!
      </h1>
      <h1 className={responseStatus === "Success" ? "hidedets" : ""}>
        Book a session
      </h1>
      <p className={responseStatus === "Success" ? "hidedets" : ""}>
        Fill in the form below to book a virtual session with your doctor
      </p>

      <h5 className={responseStatus === "Success" ? "hidedets" : ""}>
        Basic info
      </h5>
      <form onSubmit={formSubmitted}>
        <label
          className={responseStatus === "Success" ? "hidedets" : ""}
          htmlFor="firstName"
        >
          First Name:
        </label>
        <input
          className={responseStatus === "Success" ? "hidedets" : ""}
          onChange={getFirstName}
          type="text"
          id="firstName"
          value={firstName}
          required
        />
        <br />
        <label
          className={responseStatus == "Success" ? "hidedets" : ""}
          htmlFor="lastName"
        >
          Last Name:
        </label>
        <input
          className={responseStatus == "Success" ? "hidedets" : ""}
          onChange={getLastName}
          type="text"
          id="lastName"
          value={lastName}
          required
        />
        <br />
        <label
          className={responseStatus == "Success" ? "hidedets" : ""}
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className={responseStatus == "Success" ? "hidedets" : ""}
          onChange={getEmail}
          type="email"
          id="email"
          value={email}
          required
        />
        <h5 className={responseStatus == "Success" ? "hidedets" : ""}>
          Doctor
        </h5>
        <select
          className={responseStatus == "Success" ? "hidedets" : ""}
          name="doctor"
          id="doctor"
          value={doctor}
          onChange={getDoctor}
          required
        >
          <option value="">Select your doctor</option>
          <option value="Dr. Cameron">Dr. Cameron</option>
          <option value="Dr. Chase">Dr. Chase</option>
          <option value="Dr. House">Dr. House</option>
        </select>
        <br />
        {doctor && (
          <div className={responseStatus == "Success" ? "hidedets" : ""}>
            <h5>Where?</h5>
            <input
              onChange={getLocation}
              type="radio"
              id="Google"
              value="Google"
              name="location"
            />
              <label htmlFor="Google">Google</label>
            <br />
            <input
              onChange={getLocation}
              type="radio"
              id="Phone"
              value="Phone"
              name="location"
            />
              <label htmlFor="Phone">Phone</label>
            <br />
            <h5>When?</h5>
            <input onChange={getDateTime} type="datetime-local" />
            <br />
          </div>
        )}
        <br />
        <button
          className={responseStatus == "Success" ? "hidedets" : ""}
          type="submit"
        >
          Confirm Booking
        </button>

        <button
          className={responseStatus == "Success" ? "" : "hidedets"}
          onClick={resetForm}
          type="button"
        >
          Cancel Booking
        </button>
      </form>
    </div>
  );
}
