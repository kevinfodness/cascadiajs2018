import React, { Fragment } from 'react';
import Header from '../header';
import SearchForm from '../searchForm';
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
    this.handleUpdate = this.handleUpdate.bind(this);
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
    const { games } = this.state;
    return (
      <Fragment>
        <Header />
        <SearchForm games={games} handleUpdate={this.handleUpdate} />
      </Fragment>
    );
  }
}
