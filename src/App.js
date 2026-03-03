//import logo from './logo.svg';
import './App.css';
//import { AiFillAccountBook } from "react-icons/ai";
//import Hellow from './01/Hellow';
import MyClock from './02/MyClock'; 
import { RiHomeHeartFill } from 'react-icons/ri';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList'; 
import Lotto from './05/Lotto';
import Traffic from './06/Traffic';
// import MyRef from './07/MyRef';
// import MyRefAdd from './07/MyRefAdd';
// import Gallery from './08/Gallery';
// import RouteMain from './09/RouteMain';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full min-h-screen mx-auto ">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10'>
          <p>리엑트 기초</p>
          <ul className='flex justify-center items-center gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lotto">Lotto</Link></li>
            <li><Link to="/traffic">Traffic</Link></li>
          </ul>
          <p><Link to="/"><RiHomeHeartFill /></Link></p>
        </header>
        
        <main className='grow w-full flex justify-center items-center overflow-y-auto'>
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/traffic" element={<Traffic />} />
          </Routes>

        </main>

        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          @ YoungJo Ha
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
