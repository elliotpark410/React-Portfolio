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
            </div>
          </div>
        </section>
        );
  }
}