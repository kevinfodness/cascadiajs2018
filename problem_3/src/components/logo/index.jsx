import React from 'react';
import './styles.scss';

export default function Logo() {
  return (
    <figure className="twitch-logo">
      <svg
        height="30px"
        overflow="visible"
        version="1.1"
        viewBox="0 0 30 30"
        width="30px"
        x="0px"
        y="0px"
      >
        <g>
          <path d="M4,7 L5.56799,3 L27,3 L27,18 L21,24 L16,24 L12.88599,27 L9,27 L9,24 L4,24 L4,7 Z M21,20 L25,16 L25,5 L8,5 L8,20 L12,20 L12,23 L15,20 L21,20 Z" />
          <g>
            <polygon points="21 9 19 9 19 15 21 15" />
            <polygon points="16 9 14 9 14 15 16 15" />
          </g>
        </g>
      </svg>
    </figure>
  );
}
