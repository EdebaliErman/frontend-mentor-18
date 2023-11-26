import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './Style/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <img className='w-full' src={process.env.PUBLIC_URL + "./assets/bgDesktop.svg"} alt='svg' />
      <About />
      <Footer />
    </div>
  );
}

export default App;
