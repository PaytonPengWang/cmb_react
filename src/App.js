import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n/i18n';

import { Translation ,useTranslation,withTranslation, initReactI18next,Trans } from 'react-i18next';

function App() {
  // const {t} = useTranslation()
  var app ='home:app';

  return (
    <Translation>
      {
        t => <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/{t(app)}.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      }
    
    </Translation>
  );
}

export default withTranslation()(App);
