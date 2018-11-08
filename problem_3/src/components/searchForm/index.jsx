import PropTypes from 'prop-types';
import React from 'react';
import shapes from '../../common/prop-types';
import './styles.scss';

const { GAME_SHAPE } = shapes;

export default class SearchForm extends React.PureComponent {
  /**
   * Define prop types for this component.
   * @type {object}
   */
  static propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape(GAME_SHAPE)).isRequired,
    handleSelect: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
  };

  /**
   * Submit handler. Prevents default action, since React controls the form.
   * @param {Event} event - The submit event.
   */
  static handleSubmit(event) {
    event.preventDefault();
  }

  /**
   * Constructor function. Sets up default state and binds function scope.
   * @param {object} props - Props passed to this component.
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Change handler. Processes updates to the value of the search box.
   * @param {Event} event - The change event.
   */
  handleChange(event) {
    const { handleUpdate } = this.props;
    const { value } = event.target;
    this.setState({ value });
    handleUpdate(value);
  }

  /**
   * Click handler for entries in the game list.
   * @param {Event} event - The click event.
   */
  handleClick(event) {
    const { handleSelect } = this.props;
    handleSelect(parseInt(event.target.getAttribute('data-game-id'), 10));
  }

  /**
   * Renders the component.
   * @returns {object} - JSX for this component.
   */
  render() {
    const { games } = this.props;
    const { value } = this.state;

    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <p>
          Search for your favorite games in the search box below. Click on their
          name to find out more information about them.
        </p>
        <div>
          <label htmlFor="search-form-search">
            Search:
            <input
              id="search-form-search"
              onChange={this.handleChange}
              value={value}
            />
          </label>
        </div>
        {games.length > 0 && (
          <h2>Games:</h2>
        )}
        <ul className="search-form-games-list">
          { /* eslint-disable no-underscore-dangle */ }
          {games.map(game => (
            <li key={game._id}>
              <button
                data-game-id={game._id}
                onClick={this.handleClick}
                type="button"
              >
                {game.name}
              </button>
            </li>
          ))}
          { /* eslint-enable */ }
        </ul>
      </form>
    );
  }
}
