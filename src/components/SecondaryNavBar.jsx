import React from 'react';
import Proptypes from 'prop-types';

const SecondaryNavBar = () => (
    <nav>
      <ul>
        <li>
          <form>
            <div>
              <input
                type="text"
                placeholder="Find the stories you love"
                />
            </div>
            <div>
              <button>Sign in</button>
              <button>Get started</button>
            </div>
          </form>
        </li>
      </ul>
    </nav>
);

export default SecondaryNavBar;
