import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const AppContainer = ({ logo, header, main }) =>(
  <div className="app-container">
    <header className="app-header">
      {/* <div className="app-logo">{logo}</div> */}
      <div className="app-header-content">
      {header}
      </div>
    </header>
    <main className="app-main">
      {main}
  </main>
</div>
);
  

AppContainer.propTypes = {
  header: PropTypes.node.isRequired,
  sider: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
}

export default AppContainer;