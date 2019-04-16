import React, { Component } from "react";
import Img from "gatsby-image";
import projectList from "./../data/projects.json";
import './../styles/projects.scss';

class Projects extends Component {

  render() {
    const projectImgs = this.props.projectImgs;
    return (
      <section id="projects" className="projects">
        <div className="content-grid">
          <h3><span>05</span>LATEST PROJECTS</h3>
          <div className="project-wrapper">
            {projectList.map(project => {
              const image = projectImgs.find(n => {
                return n.node.relativePath === `projects/${project.img}`;
              });
              const imageSizes = image.node.childImageSharp.sizes;

              return (
                <div className="project" key={project.name}>

                  <div className='project__image'>
                    <Img
                      title={project.name}
                      alt="Screenshot of Project"
                      sizes={imageSizes}
                      className="card-img_src center-block"
                    />
                  </div>
                  <div className='project__details'>
                    <div className='project__title'>
                      {project.name}
                    </div>
                    <div className='project__link'>
                      <a
                        href={project.url}
                        key={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >{project.url}</a>
                    </div>
                    <div className='project__desc'>
                      {project.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
