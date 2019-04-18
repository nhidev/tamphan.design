import React, { Component } from "react";
import Img from "gatsby-image";
import './../styles/about.scss';
import experienceList from "./../data/experience.json";
import avatar from "../images/avatar.png";

class AboutMe extends Component {
  render() {
    const experienceImgs = this.props.experienceImgs;
    return (
      <div className="about-page" >
        <div className="content-grid">
          <div className="about-wrapper">
            <h3><span>01</span>About me</h3>
            <div className="about-content flex-box">
              <p className="avatar"><img src={avatar} alt="avatar" style={{ width: "300px" }} /></p>
              <p>
                Hello, my name is Tam Phan. <br />
                I love everything about graphic design, user interface and user experience.<br />
                I have 6 years experience in Graphic Design and UI/UX Design.<br />
                For UI/UX Design, I experienced in mobile, website and native app.<br />
                For Graphic Design, I experienced in Corporate Identity Program (CIP), Package<br />
                Design, Catalogues, Brochure, Leaflet and Online Advertising.
</p>      </div>

            <div className="education-content">
              <h3><span>02</span>Education</h3>
              <div className="flex-box">
              <p>2006 - 2009</p>
               <p> Bachelor of Infomation Technology in Lotus University </p></div>

              <div className="flex-box">
              <p>2010 - 2012</p> 
              <p> Bachelor of Management Information System in Ho Chi Minh University of Economic</p>
              </div>

              <div className="flex-box">
              <p>2010 - 2012</p> 
              <p>Certificate of Web Design in University Of Science</p>
              </div>
            </div>
            <div className="experience-content">
              <h3><span>03</span>Experience</h3>
              <div className="experience-wrapper">
                {experienceList.map(experience => {
                  const image = experienceImgs.find(n => {
                    return n.node.relativePath === `experience/${experience.img}`;
                  });
                  const imageSizes = image.node.childImageSharp.sizes;

                  return (
                    <div className="experience" key={experience.key}>
                      <div className='experience__image'>
                        <Img
                          title={experience.company}
                          alt="Screenshot of experience"
                          sizes={imageSizes}
                          className="card-img_src center-block"
                        />
                      </div>
                      <div className='experience__details'>
                        <div className='experience__year'>
                          {experience.year}
                        </div>
                        <div className='experience__company'>
                          {experience.company}
                        </div>
                        <div className='experience__position'>
                          {experience.position}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default AboutMe;
