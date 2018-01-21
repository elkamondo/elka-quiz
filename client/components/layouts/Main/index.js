import React from 'react';

import CategoryList from 'Components/components/CategoryList';
import { selectCategories as categories } from 'Api/utils';

import githubRibbon from 'Assets/github-ribbon.png';

export default function Main() {
  return (
    <React.Fragment>
      <a
        href="https://github.com/elkamondo/elka-quiz"
        target="_blank"
        rel="noopener noreferrer"
        className="is-hidden-mobile"
      >
        <img
          style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
          src={githubRibbon}
          alt="Fork me on GitHub"
        />
      </a>
      <main className="main container has-text-centered">
        <h2 className="c-main-title title is-2">Séléctionner une catégorie</h2>
        <CategoryList categories={categories} />
      </main>
    </React.Fragment>
  );
}
