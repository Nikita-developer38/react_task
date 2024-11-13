import './App.css';
import Advertise from './component/javascript/Advertise';
import Button from './component/javascript/Button';
import CardPage from './component/javascript/CardPage';
import CardPage2 from './component/javascript/CardPage2';
import Footer from './component/javascript/Footer';
import Navbar from './component/javascript/Navbar';
import Track from './component/javascript/Track';




function App() {
  return (

    <>
      <Navbar />
      <Advertise />
      <div className='two'>
        <Track name="Pick-Up" />
        <Button />
        <Track name="Drop-off" />
      </div>
      <CardPage />
      <CardPage2 />
      <Footer />


    </>



  );
}

export default App;
