import React from 'react';
import './Footer.scss';

import { ICFacebook, ICGithub, ICInstagram, ICWhatsapp, LogoGithub } from '../../../assets'

const Icon = ({ img }) => {
     return (
          <div className="icon-wrapper">
               <img className="icon-sosmed " src={img} alt="icon" />
          </div>
     )
}
const Footer = () => {
     return (
          <div>
               <div className="footer" >
                    <div>
                         <img className="logo" src={LogoGithub} alt="LogoGithub" />
                    </div>
                    <div className="social-wrapper">
                         <Icon img={ICWhatsapp} />
                         <Icon img={ICFacebook} />
                         <Icon img={ICInstagram} />
                         <Icon img={ICGithub} />
                    </div>
               </div>
               <div className="copyright">
                    <p>@Copyright 2021 IJlnflhbrz</p>
               </div>
          </div>
     )
}

export default Footer
