import React from "react";
import Cover from "../components/cover";
import AboutMe from "../components/about-me";
import Expertise from "../components/expertise";
import Projects from "../components/projects";
import ScrollTop from "../components/scroll-top";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";

import "../styles/main.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const metaDescr = data.site.siteMetadata.description;
  const { edges: projectImgData } = data.ProjectImgs;
  const { edges: expertiseImgData } = data.ExpertiseImgs;
  const { edges: experienceImgData } = data.ExperienceImgs;

  
  return (
    <div className="dev-landing-page">
      <Helmet
      title={siteTitle}
      meta={[
        {
          name: "description",
          content: {metaDescr},
        },
        {
          name: "keywords",
          content: "designer, UI/UX",
        },
      ]}
      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon}` },
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon}` },
        { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
      ]}
    />
      <Cover />
      <AboutMe experienceImgs={experienceImgData}  />
      <Expertise expertiseImgs={expertiseImgData} />
      <Projects projectImgs={projectImgData} />
      <Contact/>
      <ScrollTop />
      <Footer />
    </div>
  );
};
export default IndexPage

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    ExperienceImgs: allFile(
      filter: { relativePath: { regex: "/experience/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }


    ProjectImgs: allFile(
      filter: { relativePath: { regex: "/projects/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

    ExpertiseImgs: allFile(
      filter: { relativePath: { regex: "/expertise/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      
    }
  }
`;
