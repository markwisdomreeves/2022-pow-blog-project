import React, { useState } from 'react';
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./membership.css";
import {
  EMAILJS_USER_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config"


function MemberShip() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    e.target,
     EMAILJS_USER_ID,
    ).then(res => {
      Swal.fire({
        title: 'Thanks, We will get back to you soon.',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      setName("");
      setEmail("");
      // setSubject("");
      setMessage("");
    }).catch(err => {
      Swal.fire({
        title: 'Failed to Send',
        icon: 'error',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    });
  }

  return (
    <div className="main-membership-form-container bg-gray-900">
      <div className="inner-membership-form-content-box">
        <div className="membership-input-box">
        <h2>Membership Form</h2>
        <p>Do you want to be a member?</p>
          <form onSubmit={sendEmail}>
            <div className="membership-form-box">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                autoComplete="off"
                className="form_input"
                required
              />
            </div>
            <div className="membership-form-box">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                placeholder="Email"
                className="form_input"
                required
              />
            </div>
            {/* <div className="membership-form-box">
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                autoComplete="off"
                placeholder="Subject"
                className="form_input"
                required
              />
            </div> */}
            <div className="membership-form-box">
              <textarea
                type="text"
                name="message"
                id="message"
                rows="6"
                cols="45"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
                placeholder="What's on your mind?"
                className="form_input"
                required
              />
            </div>
            <button className="membership_submit_btn bg-gray-800" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MemberShip

