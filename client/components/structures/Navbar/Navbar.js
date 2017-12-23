import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function Navbar({ active, toggleActive, deactivate }) {
  const toggleClasses = classNames({
    'navbar-burger': true,
    'is-active': active
  });
  const menuClasses = classNames({ 'navbar-menu': true, 'is-active': active });

  return (
    <nav className="navbar has-shadow is-fixed" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" onClick={deactivate}>
            <h3 className="title is-3">React</h3>
          </Link>

          <Link
            to="/"
            className="navbar-item is-hidden-desktop"
            onClick={deactivate}
          >
            <span className="icon is-medium">
              <i className="fa fa-lg fa-home" />
            </span>
          </Link>

          <div
            className={toggleClasses}
            onClick={toggleActive}
            onKeyPress={toggleActive}
            role="link"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={menuClasses}>
          <div className="navbar-start">
            <Link to="/link1" className="navbar-item" onClick={deactivate}>
              Link 1
            </Link>
            <Link to="/link2" className="navbar-item" onClick={deactivate}>
              Link 2
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
  deactivate: PropTypes.func.isRequired
};
