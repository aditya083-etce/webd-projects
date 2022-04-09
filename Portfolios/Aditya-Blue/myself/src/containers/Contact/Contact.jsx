import React, { Component } from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { MdLocationOn, MdCall } from "react-icons/md";

import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div class="contact" id="contact">
        <div className="container">
          <div class="contact-box">
            <div class="contact-info">
              <h3 class="contact-title">Get in touch</h3>
              <p class="contact-text">
              I'm currently looking for full-time Software Engineering or Full stack web development opportunities! 
              If you know of any positions available, if you have any questions, or if you just want to say hi,
              please feel free to contact me.
              </p>
              <div class="information-wrap">
                <div class="information">
                  <div class="contact-icon">
                    <MdLocationOn />
                  </div>
                  <p class="info-text">145, Raja Rammohan Rai Sarani, WB, India</p>
                </div>

                <div class="information">
                  <div class="contact-icon">
                    <FaPaperPlane />
                  </div>
                  <p class="info-text">aditya.b.mitra@gmail.com</p>
                </div>

                <div class="information">
                  <div class="contact-icon">
                    <MdCall />
                  </div>
                  <p class="info-text">+91 9330028651</p>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <h3 class="contact-title">Contact me</h3>
              <div class="row">
                <input type="text" class="contact-input" placeholder="First Name" />
                <input type="text" class="contact-input" placeholder="Last Name" />
              </div>

              <div class="row">
                <input type="text" class="contact-input" placeholder="Phone" />
                <input type="email" class="contact-input" placeholder="Email" />
              </div>

              <div class="row">
                <textarea name="message" class="contact-input textarea" placeholder="Message"></textarea>
              </div>
              <button type="button" class="btn btn-lg btn-success">Send</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
