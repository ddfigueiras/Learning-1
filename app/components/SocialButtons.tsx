import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

type SocialButtonProps = {
  platform: 'facebook' | 'twitter' | 'instagram';
  url: string;
};

const iconMap = {
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
};

const SocialButton: React.FC<SocialButtonProps> = ({ platform, url }) => {
  const Icon = iconMap[platform];
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`social-button ${platform}`}>
      {Icon}
    </a>
  );
};

const SocialButtons: React.FC = () => {
  return (
    <div className="social-buttons">
      <SocialButton platform="facebook" url="https://www.facebook.com/Autarquia360/" />
      <SocialButton platform="twitter" url="https://twitter.com" />
      <SocialButton platform="instagram" url="https://www.instagram.com/autarquia360/" />
    </div>
  );
};

export default SocialButtons;