import React from 'react';
import Logo from '../logo';
import './styles.scss';

/**
 * Builds the header for the application.
 * @returns {object} - JSX for the component.
 */
export default function Header() {
  return (
    <header className="main-header">
      <Logo />
      <h1>Twitch Game Search</h1>
    </header>
  );
}
