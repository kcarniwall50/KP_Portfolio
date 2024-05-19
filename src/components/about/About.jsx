import React from "react";
import "./about.css";
import kp1 from "../../assets/kp1.jpg";
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
              <small>MNNIT Allahabad</small>
              <br />
              <small>
                Incomplete, &nbsp; B.Tech Mechanical Engineering
              </small>{" "}
              <br />
              <small>Jul 2018 - Feb 2021</small>
            </article>
            <article className="about_card">
              <MdLanguage className="about_icon" />
              <h5>Language</h5>
              <small>English and Hindi</small>
            </article>
          </div>
          <p>
            <div>
              <p>
      
                I was enrolled in the B.Tech Mechanical Engineering Program at NIT Allahabad (MNNIT) in session 2018-2022. 
                Later On, I found myself inclined toward learning new computer-related technologies and skills and exploring new things by myself which made me think of taking a break from ongoing academics That led to me quitting the enrolled program in March 2021. I got the feeling of going college back and 
I rejoined the college in July 2023. Currently, I am a final-year student graduating in July 2024.

              </p>
              <p  style={{marginTop:'-1rem'}} >
                I take intrest in reading and learning about different
                disciplines of natural Science. I like to listen all sort of
                music and going at natural places. I'm big fan of Marvel Cinematic Universe (MCU).
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
