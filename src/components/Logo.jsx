import React from 'react';
import scelioLogo from '../assets/scelio_life_sciences.png';

const Logo = ({ width = 200, height = 60 }) => {
  return (
    <div style={{ width: width, height: height, display: 'flex', alignItems: 'center' }}>
      {/* Logo from scelio_life_sciences.png */}
      <img 
        src={scelioLogo} 
        alt="Scelio Lifesciences Logo" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain'
        }} 
      />
    </div>
  );
};

// Smaller version for mobile or compact displays
export const CompactLogo = ({ width = 40, height = 40 }) => {
  return (
    <img 
      src={scelioLogo} 
      alt="Scelio Lifesciences Logo" 
      width={width} 
      height={height}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;