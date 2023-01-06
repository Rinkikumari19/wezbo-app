import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>Design Your Bussness in Your </h1>
        <h1 className='h1-style'>Style!</h1>
        <p>Super easy to use, ready to go designs</p>
        <p className='p-para'>Just put your bussness details and</p>
        <p className='p-para' style={{bottom:"30px"}}>Your are online...</p>
        <button className="clock-btn">Lets Built Websites! </button>

      </div>
      <div>
        <img className='dashboard-img' src='https://i.pinimg.com/originals/c6/10/05/c6100593448876a0c6c350465131e081.png' />
      </div>
    </div>
  );
}

export default App;
