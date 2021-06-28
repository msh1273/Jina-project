import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox.js';
import firebaseInit from './firebaseInit';

function App() {
  // firebaseInit에서 넘어온 정보를 콘솔에 출력
  console.log(firebaseInit)
  return (
    <div className="App">
      <h1>Jina Box Example</h1>
      <SearchBox/>
    </div>
  );
}

export default App;