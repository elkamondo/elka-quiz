import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const categories = new Map([
  ['Géographie', 'geographie'],
  ['Histoire', 'histoire'],
  ['Informatique', 'informatique'],
  ['Maroc', 'maroc'],
  ['Mathématiques', 'math'],
  ['Sport', 'sport']
]);

function Category({ name, onClickHandler }) {
  const shortName = categories.get(name) || '';
  return (
    <div key={name} className="column is-one-third-desktop is-half-tablet">
      {/* eslint-disable */}
      <Link to={`/categorie/${shortName}`}>
        <img
          onClick={() => onClickHandler(name)}
          width="180"
          src={require(`../../../../assets/icons/categories/${shortName}.png`)}
          alt={`${name} icône`}
        />
      </Link>
      {/* eslint-enable */}
      <p className="subtitle">{name}</p>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Category;
