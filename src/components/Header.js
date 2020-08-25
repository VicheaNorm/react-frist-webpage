import React from 'react';
import '../styles/main.css'
import profile from '../img/profile.png'
import saiText from '../img/sai.png'
import facebookIcon from '../img/icon/facebook.svg'
import instagramIcon from '../img/icon/instagram.svg'
import youTubeIcon from '../img/icon/youtube.svg'
import ArrowDown from '../img/icon/Arrowdown.svg'

function Header() {
  return (
    <div className="w-auto h-screen bg-gray-800">
      <div className="mb-4 h-full flex justify-center items-center flex-col">
        <img src={profile} alt="Profile" className="rounded-full max-w-sm"></img>
        
        <img src={saiText} alt="Profile" className="-mb-8"></img>

        <h5 className="font-light text-white mb-6">Cambodian Artist</h5>
        
        <div className="flex flex-row m">
          <a href="https://www.instagram.com/sai_rtk/" target="Blink" className="w-100">
            <img src={facebookIcon} alt="Profile" className="w-100"></img>
          </a>
          <a href="https://www.instagram.com/sai_rtk/" target="Blink" className="w-100">
            <img src={instagramIcon} alt="Profile" className="w-100 pl-8"></img>
          </a>
          <a href="https://www.youtube.com/channel/UCO--z4PEZNgkXQLveHMQgeg" target="Blink" className="w-100">
            <img src={youTubeIcon} alt="Profile" className="w-100 pl-8"></img>
          </a>
        </div>
        <a href="https://" target="Blink" className="w-100">
          <img src={ArrowDown} alt="vector" className="w-10 pt-40 animate-bounce"></img>
        </a>
        
      </div>

      
        
      
    </div>
  );
}

export default Header;
