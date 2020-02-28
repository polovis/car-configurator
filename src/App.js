import React from 'react';

import './style/App.scss';
import Main from './partials/main';
import Header from './partials/header';


class App extends React.Component {
    
  render() {
    return (
      <div className='col-8 main-wrapper'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
