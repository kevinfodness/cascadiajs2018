import PropTypes from 'prop-types';
import React from 'react';
import shapes from '../../common/prop-types';
import './styles.scss';

const { GAME_SHAPE } = shapes;

/**
 * A component to render a selected game.
 */
export default class SelectedGame extends React.PureComponent {
  /**
   * Define default props for this component.
   * @type {object}
   */
  static defaultProps = {
    game: {},
  };

  /**
   * Define prop types for this component.
   * @type {object}
   */
  static propTypes = {
    game: PropTypes.shape(GAME_SHAPE),
  };

  /**
   * Renders the component.
   * @returns {object} - JSX for the component.
   */
  render() {
    const {
      game: {
        box: {
          large = '',
        } = {},
        name = '',
        popularity = 0,
      } = {},
    } = this.props;

    return (
      <div className="selected-game">
        {name !== '' && (
          <h3>{name}</h3>
        )}
        {large !== '' && (
          <img alt="" src={large} />
        )}
        {popularity !== 0 && (
          <h4>{`${popularity.toLocaleString('en-US')} viewers`}</h4>
        )}
      </div>
    );
  }
}
