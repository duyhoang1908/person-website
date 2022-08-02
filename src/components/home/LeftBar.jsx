import React from 'react'
import { FaFacebookF, FaFacebookMessenger, FaGithub, FaInstagram } from "react-icons/fa";
import avatar from "../../media/avatar.jpg"

const LeftBar = () => {
  return (
    <div className='leftbar'>
        <div className="box">
            <img src={avatar} alt="" className="avatar" />
            <h2 className="name">HOANG DUY</h2>
            <span></span>
            <h3>FRONT-END DEVELOPER</h3>
            <div className="contact">
                <a href='https://www.facebook.com/duy.pipi.9/' target="_blank"><FaFacebookF /></a>
                <a href='https://www.facebook.com/duy.pipi.9/' target="_blank"><FaFacebookMessenger /></a>
                <a href='https://github.com/duyhoang1908' target="_blank"><FaGithub /></a>
                <a href='https://www.facebook.com/duy.pipi.9/' target="_blank"><FaInstagram /></a>
            </div>
        </div>
    </div>
  )
}

export default LeftBar