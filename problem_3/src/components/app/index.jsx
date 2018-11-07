import React, { Fragment } from 'react';
import Header from '../header';
import SearchForm from '../searchForm';
import './styles.scss';

/**
 * The primary application component.
 */
export default function App() {
  return (
    <Fragment>
      <Header />
      <SearchForm />
    </Fragment>
  );
}
