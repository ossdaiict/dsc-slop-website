import React from 'react';
import DetailsOutlinedIcon from '@material-ui/icons/DetailsOutlined';
import './timeline.css';

export default function TimelineHorizontal() {
  return (
    <div className="container">
      <div className="row xs:hidden">
        <div className="col-md-12">
          {/* <div className="page-header">
            <h1>Horizontal timeline</h1>
          </div> */}
          <div id="something">
            <ul className="timeline timeline-horizontal">
              <li className="timeline-item ">
                <div className="timeline-badge primary">
                  <i className="glyphicon glyphicon-check"></i>
                </div>
                <div className="timeline-panel bg-black border border-white rounded-lg">
                  {/* <div className="timeline-heading"> */}
                  <h3 className="timeline-title">
                    <b>Mentor Application begins</b>
                  </h3>
                  {/* <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> 11 hours
                        ago via Twitter
                      </small>
                    </p> */}
                  {/* </div> */}
                  <div className="timeline-body">
                    <p>28 Aug 2020</p>
                  </div>
                </div>
                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
              </li>
              <li className="timeline-item">
                <div className="timeline-badge info">
                  <i className="glyphicon glyphicon-check"></i>
                </div>
                <div className="timeline-panel bg-black border border-white rounded-lg">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      <b>Student Application Begins</b>
                    </h3>
                  </div>
                  <div className="timeline-body">
                    <p>15 Sept 2020</p>
                  </div>
                </div>
                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
              </li>
              <li className="timeline-item">
                <div className="timeline-badge info">
                  <i className="glyphicon glyphicon-check"></i>
                </div>
                <div className="timeline-panel bg-black border border-white rounded-lg">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      <b>Eat. Sleep. Code. Repeat.</b>
                    </h3>
                  </div>
                  <div className="timeline-body">
                    <p>23 Sept 2020</p>
                  </div>
                </div>
                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
              </li>
              <li className="timeline-item">
                <div className="timeline-badge info">
                  <i className="glyphicon glyphicon-check"></i>
                </div>
                <div className="timeline-panel bg-black border border-white rounded-lg">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      <b>Bye Bye coding. Hello Results.</b>
                    </h3>
                  </div>
                  <div className="timeline-body">
                    <p>23 Nov 2020</p>
                  </div>
                </div>
                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row hidden xs:block">
        <div className="col-md-12">
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-badge">
                <i className="glyphicon glyphicon-off"></i>
              </div>
              <div className="timeline-panel bg-black border border-white rounded-lg">
                <div className="timeline-heading mb-10">
                  <h3 className="timeline-title">
                    <b>Mentor Application begins</b>
                  </h3>
                </div>
                <div className="timeline-body">
                  <p>5 Sept 2020</p>
                </div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-badge">
                <i className="glyphicon glyphicon-check"></i>
              </div>
              <div className="timeline-panel bg-black border border-white rounded-lg">
                <div className="timeline-heading mb-10">
                  <h3 className="timeline-title">
                    <b>Student Application Begins</b>
                  </h3>
                </div>
                <div className="timeline-body">
                  <p>15 Sept 2020</p>
                </div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-badge">
                <i className="glyphicon glyphicon-check"></i>
              </div>
              <div className="timeline-panel bg-black border border-white rounded-lg">
                <div className="timeline-heading mb-10">
                  <h3 className="timeline-title">
                    <b>Eat. Sleep. Code. Repeat.</b>
                  </h3>
                </div>
                <div className="timeline-body">
                  <p>23 Sept 2020</p>
                </div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-badge">
                <i className="glyphicon glyphicon-check"></i>
              </div>
              <div className="timeline-panel bg-black border border-white rounded-lg">
                <div className="timeline-heading mb-10">
                  <h3 className="timeline-title">
                    <b>Bye Bye coding. Hello Results.</b>
                  </h3>
                </div>
                <div className="timeline-body">
                  <p>23 Nov 2020</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* <hr className="bg-white -mx-10" /> */}
      </div>
    </div>
  );
}
