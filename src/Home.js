import React, { Fragment } from 'react';
import './App.css';
import photo from './img/map.jpg';

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 font-big slide-in-top">Welcome,</h1>
                <h1 className="m-0 font-big animate-charcter">geolocation pharmacie</h1>
                <p className="ls-2 mt-2 slide-in-bottom">@copyright bougrine mohamed 2023</p>
              </div>
            </div>
            <div className="col-ls">
              <img src={photo} alt="Photo" style={{ width: '800px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
