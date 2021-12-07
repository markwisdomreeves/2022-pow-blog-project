import React, { useState, useEffect } from 'react'
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton"
import "./footer.css"


const FooterSection = () => {

  const [date , setDate] = useState();

  const getYear = () =>  setDate(new Date().getFullYear())

  useEffect(() => {
    getYear()
  }, [])

  return (
    <>
    {/* <hr id="footer-line" /> */}
    <div className="parent-footer-box bg-gray-900">
      <div className="social-container">
        <a href="https://www.facebook.com/markreeves.wisdom/" rel="noreferrer" target="_blank">
          <i className="fa fa-facebook text-yellow-500 hover:text-yellow-600" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/markwisdomreeves/" rel="noreferrer" target="_blank">
          <i className="fa fa-instagram text-yellow-500 hover:text-yellow-600" aria-hidden="true"></i>
        </a>
      </div>
      <div id="copy-right-box">
        <p>Pool of Writers' Platform &copy; {date}</p>
      </div>
    </div>

    <ScrollToTopButton />
    </>
  )
}


export default FooterSection;
