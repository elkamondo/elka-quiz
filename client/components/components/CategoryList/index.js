import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectCategoryAndSelectQuestions } from 'Store/actions/category';
import Category from './Category';

const dispatchToProps = {
  onClickHandler: selectCategoryAndSelectQuestions
};

function CategoryList({ categories, onClickHandler }) {
  return (
    <div className="columns is-multiline">
      {categories.map(name =>
        Category({
          name,
          onClickHandler
        })
      )}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default connect(null, dispatchToProps)(CategoryList);
