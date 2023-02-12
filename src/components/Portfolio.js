import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`}className="item-img"/>

                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}
                          </p>

                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="portfolio-links">
                    <p className="github">
                      <a href={`${item.imgrepo}`} target="_blank"><i className="fa fa-3x fa-github"></i></a>
                    </p>
                    <p className="deployedSite">
                      <a href={`${item.imglink}`} target="_blank"><i className="fa fa-2x fa-desktop"></i></a>
                    </p>
                  </div>



                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}