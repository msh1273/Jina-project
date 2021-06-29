import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchBox from './SearchBox.js';
import { SearchPage, Home} from './container';
import firebaseInit from './firebaseInit';

function App() {
  // firebaseInit에서 넘어온 정보를 콘솔에 출력
  console.log(firebaseInit)
  return (
    <div className="App">
      <h1>Jina Box Example 테스트</h1>
      <Router>
        <Switch>
          <Route path="/search" component={SearchPage}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;