import logo from './logo.jpg';
import './App.css';
import Header from './components/Header';
import ClaimPage from './components/pages/ClaimPage';
import navigation from './components/nav';
function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <div className='absolute top-0 left-0 w-full'>
          <Header navigation={navigation}/> 
        </div>     
      </header>
    </div>
  );
}

export default App;
