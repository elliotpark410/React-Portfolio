import React, { Component } from 'react';
export default class ContactUs extends Component {





  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head contact-text">
            <div style={{width: "100%"}} className="columns">
              <p className="lead">
              Please conact me if you have any questions or suggestions!
              </p>
              <a
              href="mailto:elliotpark410@gmail.com"
              >
              <i className='fa fa-envelope email'></i></a>
              {/* <p key='email'>
                  <a href='mailto:elliotpark410@gmail.com ' target="blank"><i className='fa fa-envelope'></i></a>
              </p> */}
            </div>
          </div>
          {/* <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
            

              </div>
            </aside>
          </div> */}
        </section>
        );
  }
}