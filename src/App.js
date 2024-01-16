import './App.css';
import Hider from './components/hider/Hider';
import Main from './components/main/Main';
import Bootstrap from './components/boostrap/Bootstrap';
import Carusel from './components/carusel/Carusel';
import Slot from './components/slot/Slot';
import Diler from './components/diler/Diler';
import Game from './components/game/Game';
import Footer from './components/footer/Footer';
import Bye from './components/bye/Bye';



function App() {
  return (
    <div className="App">
     <Hider/>
     <Bootstrap/>
     <Main/>
     <Carusel/>
     <Slot/>
     <Diler/>
     <Game/>
     <Footer/>
     <Bye/>
    </div>
  );
}

export default App;
