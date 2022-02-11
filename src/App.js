import './App.css';
import Navbar from './components/NavBar';
import TravelCard from './components/TravelCard';
import data from "./data"
function App() {
  const travelcards = data.map(x=>{
    return <TravelCard
      {...x}
      />
  })
  return (
    <div className="App">
      <Navbar/>
      <section className='cards-list'>{travelcards}</section>
    </div>
  );
}

export default App;
