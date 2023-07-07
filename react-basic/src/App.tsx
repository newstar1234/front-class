import './App.css';
import './style.css'; 
import TestComponent, { testVariable } from './components/TestComponent';
import Header from './views/layout/Header';
import Main from './views/layout/Main';
import Footer from './views/layout/Footer';

function App() {

  return (
    <>
      <TestComponent arg1='문자열' arg2= {1} />
      <TestComponent arg1='문자열2' arg2= {100} />
      <Header />
      <Main />
      <Footer />
     
    </>  
  );
}

export default App;
