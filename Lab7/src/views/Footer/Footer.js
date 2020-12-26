import React from 'react';

import shopLogo from '../../images/logo.png';
import facebookIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import linkedinIcon from '../../images/linkedin.svg';
import instagramIcon from '../../images/instagram.svg';
import './footer.css';

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_description">
          <span className="footer_description_title">Pol bookshop</span>
          <span className="footer_description_body">Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
          </span>
        </div>
        <img className="footer_logo" src={shopLogo} alt="logo" />
        <div className="footer_social">
          <img className="social_ico" src={facebookIcon} alt="facebook_icon"></img>
          <img className="social_ico" src={instagramIcon} alt="instagram_icon"></img>
          <img className="social_ico" src={linkedinIcon} alt="linkedin_icon"></img>
          <img className="social_ico" src={twitterIcon} alt="twitter_icon"></img>
        </div>
      </div>
      <hr />
      <div className="footer_copyright">
        <span>2020 © Pol inc.</span>
      </div>
    </div> 
  )
};