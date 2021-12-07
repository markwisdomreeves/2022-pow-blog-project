import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contact.css"


function ContactUs() {
  const [state, handleSubmit] = useForm("mdobnobe");

  if (state.succeeded) {
    return <div className="success_form_container bg-gray-900">
            <div className="inner_success_box">
              <p>Thanks for contacting us. We will get back to you soon.</p>
            </div>
          </div>;
  }

  return (
    <div className="main-contact-form-container bg-gray-900">
      <div className="inner-contact-form-content-box">
        <div className="contact-form-box-container">
          <h2>Contact Us</h2>
          <h6>Please get in touch with us</h6>
          <form action="https://formspree.io/f/mdobnobe" onSubmit={handleSubmit}>
            <div className="contact-form-box">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form_input"
                placeholder="Full Name"
                autoComplete="off"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="contact-form-box">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form_input"
                placeholder="Email"
                autoComplete="off"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="contact-form-box">
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="form_input"
                placeholder="Subject"
                autoComplete="off"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="contact-form-box">
              <textarea
                type="text"
                name="message"
                id="message"
                rows="6"
                cols="45"
                required
                className="form_input"
                placeholder="What's on your mind?"
                autoComplete="off"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
               type="submit"
               className="contact_submit_btn bg-gray-800"
               disabled={state.submitting}
               >
              Submit
            </button>

            <ValidationError errors={state.errors} className="error_message_alert" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

