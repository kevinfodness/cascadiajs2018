import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

export default class SearchForm extends React.PureComponent {
  /**
   * Define prop types for this component.
   * @type {object}
   */
  static propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.number,
      box: {
        large: PropTypes.string,
      },
      name: PropTypes.string,
      popularity: PropTypes.number,
    })).isRequired,
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
        <ul className="search-form-games-list">
          {games.map(game => (
            <li key={game._id}>{game.name}</li> // eslint-disable-line no-underscore-dangle
          ))}
        </ul>
      </form>
    );
  }
}
