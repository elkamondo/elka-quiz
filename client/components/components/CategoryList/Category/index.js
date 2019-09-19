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
  constructor() {
    super();
    this.state = {
      width: Math.min(window.innerWidth || Infinity, window.screen.width)
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({
      width: Math.min(window.innerWidth || Infinity, window.screen.width)
    });
  };

  handleClick = () => {
    const { name, onClickHandler } = this.props;
    onClickHandler(name);
  };

  render() {
    const { name } = this.props;
    const { width } = this.state;
    const shortName = categories.get(name) || '';
    const image = imageSource[shortName];
    const isMobile = width < 768;

    if (isMobile) {
      return (
        <section className="column">
          <Link to={`/categorie/${shortName}`}>
            {/* eslint-disable */}
            <div
              className="c-category-box box"
              onClick={this.handleClick}
            >
            {/* eslint-enable */}
              <article className="media">
                <div className="media-left">
                  <figure>
                    <img className="c-category-image" src={image} alt={name} />
                  </figure>
                </div>
                <div className="c-category-title media-content">
                  <div className="content has-text-weight-semibold">
                    <p>{name}</p>
                  </div>
                </div>
              </article>
            </div>
          </Link>
        </section>
      );
    }

    return (
      <section className="column is-one-third-desktop is-half-tablet">
        <Link to={`/categorie/${shortName}`}>
          {/* eslint-disable */}
          <figure className="c-category-figure" onClick={this.handleClick}>
            <img width="180" src={image} alt={name} />
          </figure>
          {/* eslint-enable */}
        </Link>
        <p className="subtitle">{name}</p>
      </section>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Category;
