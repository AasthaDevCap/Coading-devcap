import './App.css';
import ChildA from './Table/ChildA';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import ChildB from './ChildB';

function App() {
  return (
    <Provider store={store}>
    <Router> 
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<ChildB />} />
            <Route path="/childB" element={<ChildA />} />
          </Routes>
        </header>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
