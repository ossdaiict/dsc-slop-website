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
                  <h2 className="timeline-title">Mentor Application begins</h2>
                  {/* <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> 11 hours
                        ago via Twitter
                      </small>
                    </p> */}
                  {/* </div> */}
                  <div className="timeline-body">
                    <p>
                      Interested mentors submit their projects/ideas to be a
                      part of SLoP!
                    </p>
                    <p>
                      <b>5 Sept 2020</b>
                    </p>
                  </div>
                </div>
                {/* <DetailsOutlinedIcon className="text-white -mt-40 w-20 h-20" /> */}
              </li>
              <li className="timeline-item">
                <div className="timeline-badge success">
                  <i className="glyphicon glyphicon-check"></i>
                </div>
                <div className="timeline-panel bg-black border border-white rounded-lg">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      Student Application Begins
                    </h3>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Students submit the applications for the projects of their
                      interest.
                    </p>
                    <p>
                      <b>15 Sept 2020</b>
                    </p>
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
                    <h4 className="timeline-title">Mussum ipsum cacilds 3</h4>
                    <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> 11 hours
                        ago via Twitter
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipisci. Mé faiz elementum girarzis, nisi eros gostis.
                    </p>
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
                <div className="timeline-heading">
                  <h3 className="timeline-title">Student Application Begins</h3>
                </div>
                <div className="timeline-body">
                  <p>
                    <br />
                    Students submit the applications for the projects of their
                    interest.
                  </p>
                  <p>
                    <b>15 Sept 2020</b>
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-badge">
                <i className="glyphicon glyphicon-check"></i>
              </div>
              <div className="timeline-panel bg-black border border-white rounded-lg">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Student Application Begins</h3>
                </div>
                <div className="timeline-body">
                  <p>
                    <br />
                    Students submit the applications for the projects of their
                    interest.
                  </p>
                  <p>
                    <b>15 Sept 2020</b>
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-badge">
                <i className="glyphicon glyphicon-check"></i>
              </div>
              <div className="timeline-panel bg-black border border-white rounded-lg">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Student Application Begins</h3>
                </div>
                <div className="timeline-body">
                  <p>
                    <br />
                    Students submit the applications for the projects of their
                    interest.
                  </p>
                  <p>
                    <b>15 Sept 2020</b>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <hr className="bg-white -mx-10" />
      </div>
    </div>
  );
}
