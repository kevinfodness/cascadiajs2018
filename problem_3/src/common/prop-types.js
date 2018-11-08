import PropTypes from 'prop-types';

export default {
  GAME_SHAPE: {
    _id: PropTypes.number,
    box: {
      large: PropTypes.string,
    },
    name: PropTypes.string,
    popularity: PropTypes.number,
  },
};
