import React, { Fragment } from 'react';
import Header from '../header';
import SearchForm from '../searchForm';
import SelectedGame from '../selectedGame';
import './styles.scss';

/**
 * The primary application component.
 */
export default class App extends React.PureComponent {
  /**
   * Constructor. Initializes props, sets initial state, binds function scope.
   * @param {object} props - Props passed to this component.
   */
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  /**
   * Selects a specific game based on ID.
   * @param {number} id - The ID of the game to make active.
   */
  handleSelect(id) {
    const { games } = this.state;
    this.setState({
      selectedGame: games.find(game => id === game._id), // eslint-disable-line no-underscore-dangle, react/no-unused-state, max-len
    });
  }

  /**
   * Handles an update to the search parameter.
   * @param {string} value - The value to look up via the Twitch API.
   */
  handleUpdate(value) {
    fetch(
      `https://api.twitch.tv/kraken/search/games?query=${value}`,
      {
        headers: {
          Accept: 'application/vnd.twitchtv.v5+json',
          'Client-ID': process.env.TWITCH_CLIENT_ID,
        },
      },
    )
      .then(response => response.json())
      .then((response) => {
        this.setState({
          games: Array.isArray(response.games) ? response.games : [],
        });
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
      });
  }

  /**
   * Renders this component.
   * @returns {object} - JSX to render this component.
   */
  render() {
    const {
      games,
      selectedGame,
    } = this.state;

    return (
      <Fragment>
        <Header />
        <SearchForm
          games={games}
          handleSelect={this.handleSelect}
          handleUpdate={this.handleUpdate}
        />
        <SelectedGame game={selectedGame} />
      </Fragment>
    );
  }
}
