import { Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{marginLeft: 10, marginTop: 10}}
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
