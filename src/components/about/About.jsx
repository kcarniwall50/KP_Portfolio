import React from "react";
import "./about.css";
import kp1 from "../../assets/kp3.jpg";
import { FaAward } from "react-icons/fa";
import { MdCastForEducation, MdLanguage } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={kp1} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about_card">
              <MdCastForEducation className="about_icon" />
              <h5>Education</h5>
              <small>
                Motilal Nehru National Institute of Technology,Allahabad (NIT
                Allahabad){" "}
              </small>
              <br />
              <small>B.Tech</small>
              <br />
              <small>
                <span>Mechanical Engineering</span>
              </small>{" "}
            </article>
            <article className="about_card">
              <MdLanguage className="about_icon" />
              <h5>Language</h5>
              <small>English and Hindi</small>
            </article>
          </div>
          <p>
            <div>
              <p style={{ marginTop: "-1rem" }}>
                I’m a nature-loving science enthusiast with a passion for
                diverse music genres and a love for the Marvel Cinematic
                Universe.
              </p>
            </div>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
