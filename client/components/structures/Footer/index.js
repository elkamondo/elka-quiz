import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="has-text-centered">
          <p>
            Built with <span className="c-footer-heart">&#10084;</span>
            {' By '}
            <a
              href="https://www.github.com/elkamondo"
              target="_blank"
              rel="noopener noreferrer"
            >
              MOHCINE EL KASSIB
            </a>
          </p>
          <p>
            Made with{' '}
            <a
              href="https://bulma.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bulma
            </a>
            {' ─ '}Icons By{' '}
            <a
              href="https://www.flaticon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flaticon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
