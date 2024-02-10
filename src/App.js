import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/about';

function App() {
  return (
    <>
      <Navbar title="Teaxt Utils" />
      <div className="container">
        <FormText heading="Enter the text to analize below" textname="Enter the text"/>
      </div>
      <div className="container">
        <About/>
      </div>
    </>
  );
}

export default App;
