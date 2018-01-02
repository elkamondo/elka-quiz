import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import geographie from 'Assets/icons/categories/geographie.png';
import histoire from 'Assets/icons/categories/histoire.png';
import informatique from 'Assets/icons/categories/informatique.png';
import maroc from 'Assets/icons/categories/maroc.png';
import math from 'Assets/icons/categories/math.png';
import sport from 'Assets/icons/categories/sport.png';

const imageSource = {
  geographie,
  histoire,
  informatique,
  maroc,
  math,
  sport
};

const categories = new Map([
  ['Géographie', 'geographie'],
  ['Histoire', 'histoire'],
  ['Informatique', 'informatique'],
  ['Maroc', 'maroc'],
  ['Mathématiques', 'math'],
  ['Sport', 'sport']
]);

class Category extends PureComponent {
  handleClick = () => {
    this.props.onClickHandler(this.props.name);
  };

  render() {
    const { name } = this.props;
    const shortName = categories.get(name) || '';
    const image = imageSource[shortName];
    return (
      <React.Fragment>
        <section className="column is-hidden-mobile is-one-third-desktop is-half-tablet">
          <Link to={`/categorie/${shortName}`}>
            {/* eslint-disable */}
            <figure onClick={this.handleClick}>
              <img width="180" src={image} alt={name} />
            </figure>
            {/* eslint-enable */}
          </Link>
          <p className="subtitle">{name}</p>
        </section>
        <section className="column is-hidden-tablet">
          <Link to={`/categorie/${shortName}`}>
            {/* eslint-disable */}
            <div
              className="Category--box box"
              onClick={this.handleClick}
            >
            {/* eslint-enable */}
              <article className="media">
                <div className="media-left">
                  <figure>
                    <img className="Category--image" src={image} alt={name} />
                  </figure>
                </div>
                <div className="Category--title media-content">
                  <div className="content has-text-weight-semibold">
                    <p>{name}</p>
                  </div>
                </div>
              </article>
            </div>
          </Link>
        </section>
      </React.Fragment>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Category;
