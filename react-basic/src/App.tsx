import './App.css';
import './style.css'; 
import TestComponent, { testVariable } from './components/TestComponent';
import Header from './views/layout/Header';
import Main from './views/layout/Main';
import Footer from './views/layout/Footer';

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
     
    </>
  );
}

export default App;
