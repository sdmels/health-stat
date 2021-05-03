import React from 'react';
import './player.css';

import { FaHeartbeat } from 'react-icons/fa';

const Player = ({ url }) => {
  return (
    <div className='player-wrapper'>
      <div className='player-overlay'>
        <ul>
          <li>
            <span>145</span>
            <sup>
              <FaHeartbeat size={18} />
            </sup>
          </li>
          <li>
            <span>102</span>
            <sup>CAL</sup>
          </li>
        </ul>
      </div>
      <video className='bs-card-video' src={url} loop controls />
    </div>
  );
};

export default Player;
