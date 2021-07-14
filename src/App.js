import './App.css';
import Navbar from '../src/components/Navbar.';
import Sobre from '../src/components/Sobre';
import Slider from '../src/components/Slider';
import Conhecimentos from './components/Conhecimentos';
import { SliderData } from './database/SlideData';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sobre></Sobre>
      <Slider slides={SliderData}></Slider>
      <Conhecimentos></Conhecimentos>
      <Footer></Footer>
        <a className='setinha' href='#navbar'><i class="fas fa-arrow-up"></i></a>
    </div>


  )
}

export default App;
