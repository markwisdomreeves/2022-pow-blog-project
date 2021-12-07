import React from 'react'
import "./aboutus.css"


function AboutUs() {
  return (
    <div className="main-about-us-container bg-gray-900">
      <div className="about-us-container">
        <div className="about-content-box">
          <h1>About the Pool of Writers</h1>

          <div className="about-context-text-box">
            <p>
            The Pool of Writers (POW) is an informative platform that features the writings of emerging and scholarly writers, with focused on various prevailing issues in Liberia and around the world. POW is established to develop emerging writers and promote their ideas through the system of quality media information dissemination.
            </p>
            <p>
            Views Expressed Disclaimer: The views and opinions expressed in any of the POW published articles are those of the authors and do not necessarily reflect the position of POW Management.
            </p>
          </div>

          <div className="about-vision-box private-about-one">
            <ul>
              <li>
               <h5>VISION: </h5>
               <i className="fa fa-check-circle"></i>
                Developing Emerging Writers for Tomorrow.
              </li>
            </ul>
          </div>

          <div className="about-vision-box private-about-two">
            <ul>
              <li>
                <h5>GOALS: </h5>
                <i className="fa fa-check-circle"></i>
                To develop emerging.
              </li>
              <li>
                <i className="fa fa-check-circle"></i>
                To promote emerging and scholarly writers.
              </li>
              <li>
                <i className="fa fa-check-circle"></i>
                To motivate contributing writers to author books.
              </li>
            </ul>
          </div>

          <div className="about-vision-box private-about-three">
            <ul>
              <li>
              <h5>CORE VALUES: </h5>
               <i className="fa fa-check-circle"></i>
                Truth, Creativity, Innovation, Discipline
              </li>
              <br />
            </ul>
          </div>

          <div className="about-vision-box private-about-four">
            <h3>Motto</h3>
            <h4>Developing Tomorrow Writers</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

