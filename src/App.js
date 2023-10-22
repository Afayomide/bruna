import './App.css';
import Header from './components/header.js/header';
import Footer from './components/footer/footer';
import Bruna from "./components/bruna"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/main/main/main';
import { Clean } from './components/main/Faqs/faqs';
import { Store } from './components/main/Faqs/faqs';
import { Care } from './components/main/Faqs/faqs';
import { Diff } from './components/main/Faqs/faqs';
import { Identify } from './components/main/Faqs/faqs';
import { Successful } from './components/main/Faqs/faqs';
import Contact from './components/contact/contact';
import { TechSpec } from './components/main/Faqs/faqs';
import { Warranty } from './components/main/Faqs/faqs';
import { Distrubutors } from './components/main/Faqs/faqs';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/bruna" element={<Bruna/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/Howtocleantheparts" element= {<Clean/>}/>
      <Route path="/Howtostore" element= {<Store/>}/>
      <Route path="/Generalcareforsemi-jewelry" element= {<Care/>}/>
      <Route path="/Differencesbetweemsemi-jewelryandcostumejewelry" element= {<Diff/>}/>
      <Route path="/HowtoIdentifyBruna'ssemi-jewelry" element= {<Identify/>}/>
      <Route path="/Howtobecomeasuccessfulconsultant" element= {<Successful/>}/>
      <Route path="/contactus" element= {<Contact/>}/>
      <Route path="/techspec" element= {<TechSpec/>}/>
      <Route path="/warranty" element= {<Warranty/>}/>
      <Route path="/distrubutors" element= {<Distrubutors/>}/>




     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
