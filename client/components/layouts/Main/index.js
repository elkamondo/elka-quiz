import React from 'react';

import CategoryList from 'Components/components/CategoryList';
import { selectCategories as categories } from 'Api/utils';

export default function Main() {
  return (
    <main className="main">
      <div className="container has-text-centered">
        <h2 className="title is-2">Séléctionner une catégorie</h2>
        <CategoryList categories={categories} />
      </div>
    </main>
  );
}
