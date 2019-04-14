import React, { Component } from "react";
import Img from "gatsby-image";
import expertiseList from "./../data/expertise.json";
import './../styles/expertise.scss';

class Expertise extends Component {
  render() {
    const expertiseImgs = this.props.expertiseImgs;
    return (
        <section id="expertise-list" className="expertise-list">
            <div className="content-grid">
                <h1>Expertise</h1>
                <div className="expertise-wrapper">
                    {expertiseList.map(expertise => {
                        const image = expertiseImgs.find(n => {
                            return n.node.relativePath === `expertise/${expertise.img}`;
                        });
                        const imageSizes = image.node.childImageSharp.sizes;
                        return (
                            <div className="expertise" key={expertise.name}>
                                <div className='expertise__image'>
                                    <Img
                                        title={expertise.name}
                                        alt="Screenshot of expertise"
                                        sizes={imageSizes}
                                        className="card-img_src center-block"
                                    />
                                </div>
                                <div className='expertise__title'>
                                    {expertise.name}
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

export default Expertise;
