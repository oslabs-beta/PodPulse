import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <div>
          Logo
        </div>
        <div>
          <nav>
            <ul>
              <li>
              <Link>Menu Item 1</Link>
              </li>
              <li>
              <Link>Menu Item 2</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>My App Footer</p>
      </footer>
    </div>
  )
}

export default Layout;