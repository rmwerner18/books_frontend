import './App.css';
import NewBookForm from './components/new_book_form';

function App() {

  const makeCall = () => {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(console.log)
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(console.log)
  }

  return (
    <div className="App">
      <NewBookForm/>
      <button onClick={makeCall}>clik here</button>
    </div>
  );
}

export default App;
